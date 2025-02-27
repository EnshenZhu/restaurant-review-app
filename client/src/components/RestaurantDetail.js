import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GoogleMap from './GoogleMap';
import { useParams } from 'react-router-dom';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch the restaurant
    axios.get(`/api/restaurants/${id}`)
      .then(res => setRestaurant(res.data))
      .catch(err => console.error(err));

    // Fetch the menu items for this restaurant
    axios.get(`/api/menus?restaurantId=${id}`)
      .then(res => setMenuItems(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p>{restaurant.address}</p>

      {/* Google Map */}
      <GoogleMap 
        latitude={restaurant.latitude}
        longitude={restaurant.longitude}
      />

      <h3>Menu</h3>
      <div className="row">
        {menuItems.map((item) => (
          <div className="col-md-4 mb-3" key={item._id}>
            <div className="card">
              {item.imageUrl && (
                <img 
                  src={item.imageUrl} 
                  className="card-img-top" 
                  alt={item.title} 
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  {item.description} - ${item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetail;