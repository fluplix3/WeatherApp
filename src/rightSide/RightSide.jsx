import React, { useState } from 'react';
import './rightSide.css';
import MoreDetails from './moreDetails/MoreDetails';
import CardForecastWeek from './cardForecast/cardForecastWeek/CardForecastWeek';
import CardForecastHour from './cardForecast/cardForecastHour/CardForecastHour';
import Loader from '../loader/Loader';

function RightSide({ darkMode }) {
    const [activeTab, setActiveTab] = useState('week');
    const [isLoading, setIsLoading] = useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    return (
        <section className={`forecastContainer ${darkMode ? 'dark-mode' : ''}`}>
            <div className="forecast">
                <div className="forecastWeekMonth">
                    <div className="forecastBlock">
                        <p className={`forecastText ${darkMode ? 'dark-mode' : ''}`}>Прогноз</p>
                        <div>
                            <button
                                onClick={() => handleTabClick('week')}
                                className={`forecastWeek ${darkMode ? 'dark-mode' : ''} ${activeTab === 'week' ? 'active' : ''}`}
                            >
                                на неделю
                            </button>
                            <button
                                onClick={() => handleTabClick('hour')}
                                className={`forecastHour ${darkMode ? 'dark-mode' : ''} ${activeTab === 'hour' ? 'active' : ''}`}
                            >
                                почасовой
                            </button>
                        </div>
                    </div>
                    <button className={`btnCarousel btnCarouselLeft ${darkMode ? 'dark-mode' : ''}`} disabled>
                        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L10.1265 7.14974C10.758 7.54068 10.758 8.45932 10.1265 8.85027L1 14.5"
                                stroke="#ACACAC" strokeWidth="3" />
                        </svg>
                    </button>
                    <button className={`btnCarousel btnCarouselRight ${darkMode ? 'dark-mode' : ''}`}>
                        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L10.1265 7.14974C10.758 7.54068 10.758 8.45932 10.1265 8.85027L1 14.5"
                                stroke="#ACACAC" strokeWidth="3" />
                        </svg>
                    </button>
                    {activeTab === 'week'
                        ?
                        <ul className='cardList cardListWeek'>
                            {isLoading ? <Loader darkMode={darkMode} /> :
                                <>
                                    <CardForecastWeek darkMode={darkMode} />
                                    <CardForecastWeek darkMode={darkMode} />
                                    <CardForecastWeek darkMode={darkMode} />
                                    <CardForecastWeek darkMode={darkMode} />
                                    <CardForecastWeek darkMode={darkMode} />
                                    <CardForecastWeek darkMode={darkMode} />
                                </>
                            }
                        </ul>
                        :
                        <ul className="cardList cardListHour">
                            {isLoading ? <Loader /> :
                                <>
                                    <CardForecastHour darkMode={darkMode} />
                                    <CardForecastHour darkMode={darkMode} />
                                    <CardForecastHour darkMode={darkMode} />
                                    <CardForecastHour darkMode={darkMode} />
                                    <CardForecastHour darkMode={darkMode} />
                                    <CardForecastHour darkMode={darkMode} />
                                    <CardForecastHour darkMode={darkMode} />
                                    <CardForecastHour darkMode={darkMode} />
                                    <CardForecastHour darkMode={darkMode} />
                                </>
                            }
                        </ul>
                    }
                    <MoreDetails darkMode={darkMode} />
                </div>
            </div>
        </section>
    );
}

export default RightSide;