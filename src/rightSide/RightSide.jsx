import React, { useEffect, useState } from 'react';
import './rightSide.css';
import MoreDetails from './moreDetails/MoreDetails';
import CardForecastWeek from './cardForecast/cardForecastWeek/CardForecastWeek';
import CardForecastHour from './cardForecast/cardForecastHour/CardForecastHour';
import Loader from '../loader/Loader';
import getWeatherCards from '../getData/getWeatherCards';
import 'swiper/css/navigation';
import Carousel from './carousel/Carousel';
import BtnCarousel from './btnCarousel/BtnCarousel';

function RightSide({ darkMode }) {
    const [activeTab, setActiveTab] = useState('week');
    const [isLoading, setIsLoading] = useState(false);
    const [weather, setWeather] = useState([]);
    const [currentIndexDay, setCurrentIndexDay] = useState(0);
    const [currentIndexHour, setCurrentIndexHour] = useState(0);
    const [lengthWeek, setLengthWeek] = useState(3);
    const [lengthHour, setLengthHour] = useState(7);

    let prev = null;
    let next = null;

    if (activeTab === 'week') {
        prev = () => {
            if (currentIndexDay > 0) {
                setCurrentIndexDay(prevState => prevState - 1);
            }
        };

        next = () => {
            if (currentIndexDay < lengthWeek - 1) {
                setCurrentIndexDay(prevState => prevState + 1);
            }
        };
    } else {
        prev = () => {
            if (currentIndexHour > 0) {
                setCurrentIndexHour(prevState => prevState - 1);
            }
        };

        next = () => {
            if (currentIndexHour < lengthHour - 1) {
                setCurrentIndexHour(prevState => prevState + 1);
            }
        };
    }

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const data = await getWeatherCards();
            setWeather(data.list);
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

                    {activeTab === 'week'
                        ? <>
                            <BtnCarousel
                                onClick={prev}
                                darkMode={darkMode}
                                disabled={currentIndexDay === 0}
                                position={'btnCarouselLeft'}
                            />
                            <BtnCarousel
                                onClick={next}
                                darkMode={darkMode}
                                disabled={currentIndexDay > lengthWeek - 2}
                                position={'btnCarouselRight'}
                            />
                            <ul className='cardList cardListWeek'>
                                <Carousel currentIndex={currentIndexDay}>
                                    {isLoading ? <Loader darkMode={darkMode} /> :
                                        <>
                                            {weather.filter((item, index) => index % 8 === 0 && index !== 0).map((item, index) => {
                                                const date = new Date(item.dt_txt);
                                                let formattedDate = date.toLocaleDateString('ru-RU', { weekday: 'short', day: 'numeric', month: 'short' });

                                                // Заменяем число на "завтра", если прогноз на завтра
                                                if (date.getDay() - 1 === new Date().getDay()) {
                                                    formattedDate = 'Завтра';
                                                }

                                                return (
                                                    <CardForecastWeek
                                                        key={index}
                                                        darkMode={darkMode}
                                                        day={formattedDate}
                                                        img={item.weather[0].icon}
                                                        degreesMorning={Math.round(item.main.temp_min)}
                                                        degreesEvening={Math.round(item.main.temp_max)}
                                                    />

                                                );
                                            })}
                                            {/* Сделано для демонстрации работоспособности карусели, так как с API приходят данные только на 5 дней! */}
                                            {weather.filter((item, index) => index % 8 === 0 && index !== 0).map((item, index) => {
                                                const date = new Date(item.dt_txt);
                                                let formattedDate = date.toLocaleDateString('ru-RU', { weekday: 'short', day: 'numeric', month: 'short' });                           

                                                return (
                                                    <CardForecastWeek
                                                        key={index}
                                                        darkMode={darkMode}
                                                        day={formattedDate}
                                                        img={item.weather[0].icon}
                                                        degreesMorning={Math.round(item.main.temp_min)}
                                                        degreesEvening={Math.round(item.main.temp_max)}
                                                    />

                                                );
                                            })}
                                        </>
                                    }
                                </Carousel>
                            </ul>
                        </>
                        :
                        <>
                            <BtnCarousel
                                onClick={prev}
                                darkMode={darkMode}
                                disabled={currentIndexHour === 0}
                                position={'btnCarouselLeft'}
                            />
                            <BtnCarousel
                                onClick={next}
                                darkMode={darkMode}
                                disabled={currentIndexHour > lengthHour - 2}
                                position={'btnCarouselRight'}
                            />
                            <ul className="cardList cardListHour">
                                <Carousel currentIndex={currentIndexHour}>
                                    {isLoading ? <Loader /> :
                                        <>
                                            {weather.slice(0, weather.length - 28).map((item) => {

                                                return (
                                                    <CardForecastHour
                                                        key={Math.random()}
                                                        darkMode={darkMode}
                                                        img={item.weather[0].icon}
                                                        time={item.dt_txt}
                                                        degrees={Math.round(item.main.temp)}
                                                    />
                                                );
                                            })}
                                        </>
                                    }
                                </Carousel>
                            </ul >
                        </>
                    }
                    <MoreDetails darkMode={darkMode} />
                </div >
            </div >
        </section >
    );
}

export default RightSide;