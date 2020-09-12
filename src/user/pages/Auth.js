import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';

import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from '../../shared/util/validators';
import { AuthContext } from '../../shared/context/auth-context';
import { useForm } from '../../shared/hooks/form-hook';

import './Auth.css';

const Auth = props => {
    const auth = useContext(AuthContext);

    const [isLoginMode, setIsLoginMode] = useState(true);

    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const loginHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); //TODO: placeholder to send to the backend
        auth.login();
    };

    const switchModeHandler = () => {
        if(!isLoginMode){
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined
                }, 
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, 
            false
            );
        }
        setIsLoginMode(prevMode => !prevMode);
    };

    return <Card className="authentication">
                <h2>Login Required</h2>
                <hr />
                <form class="auth-form" onSubmit={loginHandler}>
                    {!isLoginMode && (
                    <Input 
                        id= "name"
                        element = "inupt"                        
                        type = "text"
                        label="Name"
                        validators = {[VALIDATOR_REQUIRE()]}
                        errorText = "Please Enter Name"
                        onInput = {inputHandler} />
                    )}
                    <Input 
                        id="email"
                        element="input"
                        type="email"
                        label="Email"
                        validators={[VALIDATOR_EMAIL()]}
                        errorText="Please enter valid email address"
                        onInput={inputHandler} />
                    <Input 
                        id="password"
                        element="input"
                        type="password"
                        label="Password"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter password"
                        onInput={inputHandler} />
                    <Button type="submit" disabled={!formState.isValid} >
                        {isLoginMode ? 'LOGIN' : 'SIGNUP'}
                    </Button>
                </form>
                <Button inverse onClick={switchModeHandler}> SWITCH TO {isLoginMode ? 'LOGIN' : 'SIGNUP'} </Button>
            </Card>
};

export default Auth;