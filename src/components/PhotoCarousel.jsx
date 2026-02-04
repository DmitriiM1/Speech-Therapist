import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/photo_carousel.css';

import photo1 from "../assets/header_footerIMG/carouselPhoto1.jpg";
import photo2 from "../assets/header_footerIMG/carouselPhoto2.jpg";
import photo3 from "../assets/header_footerIMG/carouselPhoto3.jpg";



const photos = [
    {
        src: photo1,
    },
    {
        src: photo2,
    },
    {
        src: photo3,
    }
];

const PhotoCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} interval={3000} className="photo-carousel">
            {photos.map((photo, i) => (
                <Carousel.Item key={i}>
                    <img
                        className="d-block w-100"
                        src={photo.src}
                        alt={`Slide ${i}`}
                    />
                    {/* <Carousel.Caption>
                        <h3>{photo.captionTitle}</h3>
                        <p>{photo.captionText}</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default PhotoCarousel;