import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

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
        id: 'p2', 
        imageURL: 'https://image.shutterstock.com/image-photo/nice-evening-after-sunset-600w-538099591.jpg',
        title: 'place 2',
        description: 'place description',
        address: 'Lifestyle Group, Indianapolis, USA',
        creatorId: 'u1',
        coordinates: {
            lat: 39.731,
            lng: -86.056
        },
    },
]

const UserPlaces = props => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creatorId === userId);
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;