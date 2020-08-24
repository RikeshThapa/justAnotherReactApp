import React from 'react';

import UsersList from '../components/UsersList.js'

const Users = () => {
    /* let USERS = []; */
    const USERS = [
        {
            id: 'u1',
            name: 'Max Schwartz',
            image: 'https://cdn5.vectorstock.com/i/1000x1000/38/64/stopwatch-vector-913864.jpg',
            places: 3
        }
    ]
    return <UsersList items={USERS} />
};

export default Users;