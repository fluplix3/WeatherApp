import React, { useEffect, useState } from 'react';
import './moreDetails.css';
import Loader from '../../loader/Loader';
import getWeather from '../../getData/getWeather';

function MoreDetails({ darkMode }) {
    const [isLoading, setIsLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

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
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <section className="moreDetails">
            <p className={`moreDetailsTitle ${darkMode ? 'dark-mode' : ''}`}>Подробно на сегодня</p>
            {isLoading
                ? <Loader darkMode={darkMode} />
                : <ul className="cardsDetails">
                    <li className={`cardDetails ${darkMode ? 'dark-mode' : ''}`}>
                        <span className={`cardMainText ${darkMode ? 'dark-mode' : ''}`}>Скорость ветра</span>
                        <div className="numberBlock">
                            <span className={`numberDetails ${darkMode ? 'dark-mode' : ''}`}>{weatherData ? weatherData.wind.speed : 7}</span>
                            <span className={`unitsDetails ${darkMode ? 'dark-mode' : ''}`}>м/с</span>
                        </div>
                        <div className="windDetailsBlock">
                            <img src={require('../../img/windIndicator.svg').default} alt="Скорость ветра" />
                            <span className={`wind ${darkMode ? 'dark-mode' : ''}`}>СЗ</span>
                        </div>
                    </li>
                    <li className={`cardDetails ${darkMode ? 'dark-mode' : ''}`}>
                        <span className={`cardMainText ${darkMode ? 'dark-mode' : ''}`}>Влажность</span>
                        <div className="numberBlock">
                            <span className={`numberDetails ${darkMode ? 'dark-mode' : ''}`}>{weatherData ? weatherData.main.humidity : 84}</span>
                            <span className={`unitsDetails ${darkMode ? 'dark-mode' : ''}`}>%</span>
                        </div>
                        <div className={`humiditylFill`}>
                            <div className={`humidityNumbers ${darkMode ? 'dark-mode' : ''}`}>
                                <span className={`humidityPercent ${darkMode ? 'dark-mode' : ''}`}>0</span>
                                <span className={`humidityPercent ${darkMode ? 'dark-mode' : ''}`}>50</span>
                                <span className={`humidityPercent ${darkMode ? 'dark-mode' : ''}`}>100</span>
                            </div>
                            <div className={`humidityScale ${darkMode ? 'dark-mode' : ''}`}></div>
                            <div className="humidityScaleOrange" style={{ width: `${weatherData ? weatherData.main.humidity : 84}%` }}></div>
                            <span className={`percent ${darkMode ? 'dark-mode' : ''}`}>%</span>
                        </div>
                    </li>
                    <li className={`cardDetails ${darkMode ? 'dark-mode' : ''}`}>
                        <span className={`cardMainText ${darkMode ? 'dark-mode' : ''}`}>Видимость</span>
                        <div className="numberBlock numberBlock34">
                            <span className={`numberDetails ${darkMode ? 'dark-mode' : ''}`}>
                                {weatherData ? (
                                    weatherData.visibility > 10 ? 10 : weatherData.visibility
                                ) : (
                                    6.2
                                )}
                            </span>
                            <span className={`unitsDetails ${darkMode ? 'dark-mode' : ''}`}>км</span>
                        </div>
                    </li>
                    <li className={`cardDetails ${darkMode ? 'dark-mode' : ''}`}>
                        <span className={`cardMainText ${darkMode ? 'dark-mode' : ''}`}>Давление</span>
                        <div className="numberBlock numberBlock34">
                            <span className={`numberDetails ${darkMode ? 'dark-mode' : ''}`}>{weatherData ? weatherData.main.pressure : 742}</span>
                            <span className={`unitsMercury ${darkMode ? 'dark-mode' : ''}`}>мм рт. ст.</span>
                        </div>
                    </li>
                </ul>}
        </section>

    );
}

export default MoreDetails;