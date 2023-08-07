import React from 'react';
import './moreDetails.css';

function MoreDetails({ darkMode }) {
    return (
        <section className="moreDetails">
            <p className={`moreDetailsTitle ${darkMode ? 'dark-mode' : ''}`}>Подробно на сегодня</p>
            <ul className="cardsDetails">
                <li className={`cardDetails ${darkMode ? 'dark-mode' : ''}`}>
                    <span className={`cardMainText ${darkMode ? 'dark-mode' : ''}`}>Скорость ветра</span>
                    <div className="numberBlock">
                        <span className={`numberDetails ${darkMode ? 'dark-mode' : ''}`}>7</span>
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
                        <span className={`numberDetails ${darkMode ? 'dark-mode' : ''}`}>84</span>
                        <span className={`unitsDetails ${darkMode ? 'dark-mode' : ''}`}>%</span>
                    </div>
                </li>
                <li className={`cardDetails ${darkMode ? 'dark-mode' : ''}`}>
                    <span className={`cardMainText ${darkMode ? 'dark-mode' : ''}`}>Видимость</span>
                    <div className="numberBlock numberBlock34">
                        <span className={`numberDetails ${darkMode ? 'dark-mode' : ''}`}>6.2</span>
                        <span className={`unitsDetails ${darkMode ? 'dark-mode' : ''}`}>км</span>
                    </div>
                </li>
                <li className={`cardDetails ${darkMode ? 'dark-mode' : ''}`}>
                    <span className={`cardMainText ${darkMode ? 'dark-mode' : ''}`}>Давление</span>
                    <div className="numberBlock numberBlock34">
                        <span className={`numberDetails ${darkMode ? 'dark-mode' : ''}`}>742</span>
                        <span className={`unitsMercury ${darkMode ? 'dark-mode' : ''}`}>мм рт. ст.</span>
                    </div>
                </li>
            </ul>
        </section>

    );
}

export default MoreDetails;