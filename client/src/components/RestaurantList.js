import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GoogleMap from './GoogleMap';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get('/api/restaurants').then(response => setRestaurants(response.data));
    }, []);

    return (
        <div>
            <h2>Restaurants</h2>
            {restaurants.map(res => (
                <div key={res._id}>
                    <h3>{res.name}</h3>
                    <p>{res.address}</p>
                    <GoogleMap location={res.location} />
                </div>
            ))}
        </div>
    );
};

export default RestaurantList;