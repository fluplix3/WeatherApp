import React, { useEffect, useState } from 'react';
import './leftSide.css';
import BtnSearchResults from './btnSearchResults/BtnSearchResults';
import Loader from '../loader/Loader';
import BlockInfoDegrees from './blockInfoDegrees/BlockInfoDegrees';
import getWeatherCards from '../getData/getWeatherCards';
import getDataSearch from '../getData/GetDataSearch';

function LeftSide({ darkMode, handleDarkModeToggle }) {
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [cities, setCities] = useState([]);
    const [searchResultsEmpty, setSearchResultsEmpty] = useState(false);
    const [lastSearches, setLastSearches] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const regexPattern = new RegExp("[А-Яа-яЁё\s\-]+");
    const [weatherData, setWeatherData] = useState(null);

    const fetchData = async () => {
        try {
            const data = await getWeatherCards();
            setWeatherData(data.list[0].weather[0].icon);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    //Переключение на темную тему
    const handleClickDarkTheme = () => {
        handleDarkModeToggle();
    };

    //Открытие/Закрытие боковой панели
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //Закрытие боковой панели после успешного запроса
    const handleCloseSearchResults = (cityNames) => {
        setOpen(false);
        setSearchValue('');
        setCities([]);

        const city = cityNames[0];

        const storedLastSearches = localStorage.getItem('lastSearches');
        const parsedLastSearches = JSON.parse(storedLastSearches) || [];
        const updatedSearches = [city, ...parsedLastSearches]
            .filter((value, index, self) => self.indexOf(value) === index)
            .slice(0, 5);

        localStorage.setItem('lastSearches', JSON.stringify(updatedSearches));

        setLastSearches(updatedSearches);
    };

    //Закрытие боковой панели после клика на город из истории поиска
    const handleCloseLastSearch = async (city) => {
        try {
            setOpen(false);
            setSearchValue('');
            setCities([]);
            await getDataSearch(city);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    //Контролируемый инпут и поиск только по кириллице
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
        const inputValue = e.target.value;
        const russianCharactersRegex = /[А-Яа-яЁё\s\-]+/;
        if (russianCharactersRegex.test(inputValue) || inputValue === "") {
            setSearchValue(inputValue);
        }
    };

    //Взаимодействие с формой поиска
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (searchValue) {
            setIsLoading(true);
            const data = await getDataSearch(searchValue);
            setIsLoading(false);

            const cityNames = data.map((item) => item.name);
            setCities(cityNames);

            if (regexPattern.test(searchValue)) {
                setHasError(false);
            } else {
                setHasError(true);
            }


            if (cityNames.length === 0) {
                setSearchResultsEmpty(true);
            } else {
                setSearchResultsEmpty(false);
                handleCloseSearchResults(cityNames);
                window.location.reload();
            }
        }
    };

    useEffect(() => {
        const storedLastSearches = localStorage.getItem('lastSearches');
        const parsedLastSearches = JSON.parse(storedLastSearches) || [];
        setLastSearches(parsedLastSearches);
    }, []);

    return (
        <section className={`leftSide ${darkMode ? 'dark-mode' : ''}`}>
            <div className="LeftSideBtns">
                <button className={`btnSearchCity ${darkMode ? 'dark-mode' : ''}`} onClick={handleClick}>Поиск города</button>
                <label className="switch">
                    <input onClick={handleClickDarkTheme} type="checkbox" id="darkModeToggle" />
                    <span className="sliderMoon">
                    </span>
                    <svg className="moon" width="13" height="13" viewBox="0 0 13 13" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.6067 2.12132C9.83451 1.34916 8.89689 0.8358 7.9126 0.572756C8.44717 2.57528 7.93381 4.79418 6.36403 6.36396C4.79425 7.93374 2.57535 8.4471 0.572826 7.91253C0.83587 8.89682 1.34923 9.83444 2.12139 10.6066C4.46333 12.9485 8.26473 12.9485 10.6067 10.6066C12.9486 8.26466 12.9486 4.46326 10.6067 2.12132Z"
                            fill="#E6E6E6" />
                    </svg>
                </label>
            </div>
            <div className={`searchPanel ${open && 'open'} ${darkMode ? 'dark-mode' : ''}`}>
                <button className={`closeBtn ${darkMode ? 'dark-mode' : ''}`} onClick={handleClose}>
                    <span className={`closeCross ${darkMode ? 'dark-mode' : ''}`}></span>
                </button>
                <form onSubmit={handleSubmit} className="blockSearch">
                    {hasError && <p className="error">Используйте только кириллицу</p>}
                    <input
                        type="search"
                        className={`inputSearch ${darkMode ? 'dark-mode' : ''}`}
                        placeholder="Москва"
                        value={searchValue}
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className={`btnSearch ${darkMode ? 'dark-mode' : ''}`}
                    >
                        Найти
                    </button>
                </form>
                {lastSearches.map((city) => (
                    <BtnSearchResults
                        darkMode={darkMode}
                        key={city}
                        city={city}
                        onClick={() => handleCloseLastSearch(city)}
                    />
                ))}

                {searchResultsEmpty && regexPattern.test(searchValue) && <p className={`noResults ${darkMode ? 'dark-mode' : ''}`}>Упс! Город не найден, попробуйте другой</p>}
                {isLoading ? <Loader darkMode={darkMode} /> : cities.map((city, index) => (
                    <BtnSearchResults
                        darkMode={darkMode}
                        key={index}
                        city={city}
                        onClick={handleCloseSearchResults}
                    />
                ))
                }

            </div>
            {weatherData && <img src={`https://openweathermap.org/img/wn/${weatherData}@4x.png`} className="iconWeather" alt="иконка погоды" />}
            <BlockInfoDegrees darkMode={darkMode} />
        </section >
    );
}

export default LeftSide;

