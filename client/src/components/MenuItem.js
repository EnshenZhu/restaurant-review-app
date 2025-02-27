import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ item }) => {
  return (
    <div className="card mb-3 h-100">
      {/* If the item has an image, display it */}
      {item.imageUrl && (
        <img
          src={item.imageUrl}
          className="card-img-top"
          alt={item.title}
        />
      )}

      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">Price: ${item.price}</p>
        
        {/* Link to a page that shows reviews/comments for this menu item */}
        <Link to={`/menu/${item._id}`} className="btn btn-primary">
          View Reviews
        </Link>
      </div>
    </div>
  );
};

export default MenuItem;