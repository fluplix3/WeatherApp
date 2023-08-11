import React from 'react';
import './loader.css';

function Loader({ darkMode }) {
    return (
        <div className={`lds-ellipsis ${darkMode ? 'dark-mode' : ''}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Loader;