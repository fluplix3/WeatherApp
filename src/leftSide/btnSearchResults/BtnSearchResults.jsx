import React from 'react';
import './btnSearchResults.css';

function BtnSearchResults({ darkMode, city, onClick }) {
    return (
        <button onClick={onClick} className={`btnSearchResults ${darkMode ? 'dark-mode' : ''}`}>
            <p className={`searchCity ${darkMode ? 'dark-mode' : ''}`}>{city}</p>
        </button >
    );
}

export default BtnSearchResults;
