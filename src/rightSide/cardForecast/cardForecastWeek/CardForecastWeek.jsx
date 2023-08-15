import React from 'react';
import './cardForecastWeek.css';

function CardForecastWeek({ darkMode, day, degreesMorning, degreesEvening, img }) {

    return (
        <li className={`card ${darkMode ? 'dark-mode' : ''}`}>
            <p className={`daysHours ${darkMode ? 'dark-mode' : ''}`}>{day}</p>

            <img src={`https://openweathermap.org/img/wn/${img}@2x.png`} className="cardImg" alt="иконка погоды" />

            <div className="degreesBlock">
                <span className={`degreesMorning ${darkMode ? 'dark-mode' : ''}`}>{degreesMorning}°C</span>
                <span className={`degreesEvening ${darkMode ? 'dark-mode' : ''}`}>{degreesEvening}°C</span>
            </div>
        </li>
    );
}

export default CardForecastWeek;