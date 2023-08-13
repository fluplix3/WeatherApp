import React, { useEffect, useState } from 'react';
import './blockInfoDegrees.css';
import getWeather from '../../getData/getWeather';

function BlockInfoDegrees({ darkMode }) {
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const months = [
        'янв', 'фев', 'мар', 'апр', 'май', 'июн',
        'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
    ];
    const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const data = await getWeather();
            setWeatherData(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const currentDate = new Date();

    return (
        <div className="blockInfoDegrees">
            <div className="degrees">
                <p className={`degreesNumber ${darkMode ? 'dark-mode' : ''}`}>{weatherData ? Math.round(weatherData.main.temp) : 1}</p>
                <p className={`celsius ${darkMode ? 'dark-mode' : ''}`}>°C</p>
            </div>
            <span className={`weatherElement ${darkMode ? 'dark-mode' : ''}`}>{weatherData ? weatherData.weather[0].description : "Облачно"}</span>
            <span className="temperatureSensation">Ощущается как {weatherData ? Math.round(weatherData.main.feels_like) : -3} °C</span>
            <div className="bottomDate">
                <span className="today">Сегодня</span>
                <span className="today">{days[currentDate.getDay()]}, {currentDate.getDate()} {months[currentDate.getMonth()]}</span>
            </div>
            <span className="city">{weatherData ? weatherData.name : "Москва"}</span>
        </div>
    );
}

export default BlockInfoDegrees;