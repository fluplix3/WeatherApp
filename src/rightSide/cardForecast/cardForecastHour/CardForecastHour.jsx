import React from 'react';
import './cardForecastHour.css';

function CardForecastHour({ darkMode }) {
    return (
        <li className={`card ${darkMode ? 'dark-mode' : ''}`}>
            <p className={`daysHours ${darkMode ? 'dark-mode' : ''}`}>2:00</p>
            <img src={require('../../../img/lines.svg').default} className="cardImg" alt="" />
            <span className={`degreesMorning degreesHour ${darkMode ? 'dark-mode' : ''}`}>10°C</span>
        </li>
    );
}

export default CardForecastHour;