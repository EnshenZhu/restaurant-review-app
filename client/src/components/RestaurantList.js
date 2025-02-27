import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('/api/restaurants')
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <div className="row">
        {restaurants.map((rest) => (
          <div className="col-md-4 mb-3" key={rest._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{rest.name}</h5>
                <p className="card-text">{rest.address}</p>
                <Link to={`/restaurant/${rest._id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;