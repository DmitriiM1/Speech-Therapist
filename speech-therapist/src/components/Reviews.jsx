import React, { useEffect, useState } from 'react';
import '../styles/reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/reviews.json')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <div className="reviews-container">
      <h3>Отзывы</h3>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p><strong>{review.name}</strong></p>
            <p>Оценка: {review.rating} из 5</p>
            <p>{review.comment}</p>
            <p><em>Дата: {review.date}</em></p> {/* Display the date */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
