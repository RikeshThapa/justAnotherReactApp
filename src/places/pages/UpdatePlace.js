import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE,
         VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './NewPlace.css';

const DUMMY_PLACES = [
    {
        id: 'p1', 
        imageURL: 'https://image.shutterstock.com/image-photo/nice-evening-after-sunset-600w-538099591.jpg',
        title: 'place 1',
        description: 'place description',
        address: 'Zeit für Brot, Berlin, Germany',
        creatorId: 'u1',
        coordinates: {
            lat: 52.527981,
            lng: 13.408488
        },
    },
    {
        id: 'p1', 
        imageURL: 'https://image.shutterstock.com/image-photo/nice-evening-after-sunset-600w-538099591.jpg',
        title: 'place 1',
        description: 'place description',
        address: 'Lifestyle Group, Indianapolis, USA',
        creatorId: 'u2',
        coordinates: {
            lat: 39.731,
            lng: -86.056
        },
    },
]

const UpdatePlace = props => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    const [formState, inputHnadler] = useForm(
        {
            title: {
                value: identifiedPlace.title,
                isValid: true
            },
            description: {
                value: identifiedPlace.description,
                isValid: true
            }
        },
        true
    );

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    if (!identifiedPlace) {
        return (
            <div className="center">
                <h2>Could not find place</h2>
            </div>
        );
    }

    return (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input 
                id= "title"
                element="input" 
                label="Title" 
                validators={[VALIDATOR_REQUIRE()]} 
                errorText="Please enter a valid title."
                onInput={inputHnadler} 
                initialValue = {formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
                />
            <Input 
                id= "description"
                element="textarea" 
                label="Description" 
                validators={[VALIDATOR_MINLENGTH(5)]} 
                errorText="Please enter a valid description with atleast 5 characters."
                onInput={inputHnadler} 
                initialValue = {formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
                />
            <Button type="submit" disabled={ !formState.isValid }>Update Place</Button>
        </form>)
    ;
}

export default UpdatePlace;