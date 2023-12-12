// SliderBanner.js
import React, { useState, useEffect } from 'react';
import './SliderBanner.css';

const SliderBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images =
        [
            'https://www.aboudcar.com/wp-content/uploads/2017/10/GAC_Hyundai-Banner-.jpg',
            'https://t4.ftcdn.net/jpg/02/89/80/45/360_F_289804593_teboDpNudJbCoHqbNWPqLRSmBoHKUThE.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/52c44b106919129.5f9acf80391fb.jpg'
        ]; // Add your image URLs

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
          nextSlide();
        }, 3000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [currentIndex]);

    return (
        <div className="slider-container">
            {/* <button onClick={prevSlide} className="slider-button">
                &lt;
            </button> */}
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-item" />
            {/* <button onClick={nextSlide} className="slider-button">
                &gt;
            </button> */}
        </div>
    );
};

export default SliderBanner;
