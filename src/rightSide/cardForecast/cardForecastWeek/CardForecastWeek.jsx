import React from 'react';
import './cardForecastWeek.css';

function CardForecastWeek({ darkMode }) {
    return (
        <li className={`card ${darkMode ? 'dark-mode' : ''}`}>
            <p className={`daysHours ${darkMode ? 'dark-mode' : ''}`}>Ср, 17 мар</p>
            <img src={require('../../../img/thunderstorm.svg').default} className="cardImg" alt="гроза с дождем" />
            <div className="degreesBlock">
                <span className={`degreesMorning ${darkMode ? 'dark-mode' : ''}`}>10°C</span>
                <span className={`degreesEvening ${darkMode ? 'dark-mode' : ''}`}>4°C</span>
            </div>
        </li>
    );
}

export default CardForecastWeek;