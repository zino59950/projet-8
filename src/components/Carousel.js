import React, { useState } from 'react';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
      <button className='previous' onClick={prevSlide}>
      <FontAwesomeIcon icon={faChevronLeft} />
      </button>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      <button className='next' onClick={nextSlide}>
      <FontAwesomeIcon icon={faChevronRight} />
      </button>
      </div>
    </div>
  );
};

export default Carousel;
