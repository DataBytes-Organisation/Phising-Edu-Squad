// Header2.js

import React, { useState, useEffect } from 'react';
import './Header2.css';
import sample1 from './slide.jpg';
import sample2 from './scam1.jpg';
import sample3 from './slide2.jpg';
import Sub from './Sub';

const Header2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const slides = [
    { id: 1, image: sample1, text: 'Subsribe Now!', sentence:'Stayed inform!' },
    { id: 2, image: sample2, text: 'Phishing Red Flags', sentence:'Learn to identify key red flags.' },
    { id: 3, image: sample3, text: 'Explore & Learn' , sentence:'Do nott miss our news'},
    
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    // Automatically show the popup after 5 seconds
    const popupTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(popupTimeout);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <header className="header" >
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.image} alt={`Slide ${slide.id}`} width="500" height="150" />
            <div className="slide-text">{slide.text}</div>
            <div className="slide-sentence">{slide.sentence}</div>
         
          </div>
        ))}

        <div className="dots-container">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            
            <div className="popup-message" style={{ fontSize: '44px', fontFamily: 'Arial, sans-serif' }}>
              <p style={{ color: 'red' }}>Merry Christmas!</p>
              <p style={{ color: 'green' }}>Happy New Year!</p>
              {/* You can customize the content and styles further */}
            </div>
          </div>
        </div>
      )}

    </header>
  );
};

export default Header2;
