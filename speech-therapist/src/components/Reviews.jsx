import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/reviews.json')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div className="reviews-container">
      <h3>Отзывы наших клиентов и высокие рейтинги на картах наглядно подтверждают непревзойденное качество наших услуг, демонстрируя профессионализм и эффективность работы нашего логопедического центра.</h3>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        containerClass="carousel-container"
        draggable
        infinite={false}
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        responsive={responsive}
        rewind
        rewindWithAnimation={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p><strong>{review.name}</strong></p>
            <p>Оценка: {review.rating} из 5</p>
            <p>{review.comment}</p>
            <p><em>Дата: {review.date}</em></p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
