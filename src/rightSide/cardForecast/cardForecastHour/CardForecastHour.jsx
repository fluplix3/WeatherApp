import React from 'react';
import './cardForecastHour.css';

function CardForecastHour({ darkMode, time, img, degrees }) {
    const date = new Date(time);
    // Получаем отформатированное время без нолей перед числами
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <li className={`card ${darkMode ? 'dark-mode' : ''}`}>
            <p className={`daysHours ${darkMode ? 'dark-mode' : ''}`}>{formattedTime}</p>
            <img src={`https://openweathermap.org/img/wn/${img}@2x.png`} className="cardImg" alt="иконка погоды" />
            <span className={`degreesMorning degreesHour ${darkMode ? 'dark-mode' : ''}`}>{degrees}°C</span>
        </li>
    );
}

export default CardForecastHour;