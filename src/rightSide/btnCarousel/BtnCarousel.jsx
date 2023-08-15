import React from 'react';
import './btnCarousel.css';

const BtnCarousel = ({ darkMode, disabled, position, onClick }) => {
    return (
        <button onClick={onClick} className={`btnCarousel ${position} ${darkMode ? 'dark-mode' : ''}`} disabled={disabled}>
            <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L10.1265 7.14974C10.758 7.54068 10.758 8.45932 10.1265 8.85027L1 14.5"
                    stroke="#ACACAC" strokeWidth="3" />
            </svg>
        </button>
    );
};

export default BtnCarousel;