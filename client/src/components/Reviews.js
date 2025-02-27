import React, { useState } from 'react';
import axios from 'axios';

const Reviews = ({ menuItemId }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(3);
  const [image, setImage] = useState(null);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('menuItem', menuItemId);
    formData.append('comment', comment);
    formData.append('rating', rating);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.post('/api/reviews', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Review submitted!');
      // Possibly refetch reviews
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleReviewSubmit}>
      <div className="mb-3">
        <label htmlFor="comment" className="form-label">Comment</label>
        <input
          id="comment"
          type="text"
          className="form-control"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="rating" className="form-label">Rating</label>
        <select
          id="rating"
          className="form-select"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          {[1,2,3,4,5].map(r => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Upload Image</label>
        <input
          id="image"
          type="file"
          className="form-control"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit Review</button>
    </form>
  );
};

export default Reviews;