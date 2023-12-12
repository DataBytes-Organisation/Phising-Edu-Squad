import React, { useState, useEffect } from 'react';
import './Header2.css';
import sample from './sample.JPEG';

const Header2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: sample, text: 'Welcome to Your Blog' },
    { id: 2, image: sample, text: 'Highlighting Awesome Content' },
    // Add more slides as needed
  ];

  useEffect(() => {
    // Automatically transition to the next slide after 3 seconds
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <header2>
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide fade ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.image} alt={`Slide ${slide.id}`}width="500" height="150" />
            <div className="slide-text">{slide.text}</div>
          </div>
        ))}
      </div>
      
    </header2>
  );
};

export default Header2;
