import React from 'react';
import './carousel.css';

const Carousel = (props) => {
    const { children, currentIndex } = props;

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div className="carousel-content-wrapper">
                    <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 125}px)` }}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;