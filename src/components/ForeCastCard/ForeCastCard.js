import React from 'react';
import classes from './ForeCastCard.module.css';

const { forecastCard, cityBlock, weatherBlock, weatherBlockDetails } = classes;

const ForeCastCard = ({ city, state, country, weatherFahrenheight, weatherCelsius, timeZone, aqCarbonLevels, aqOxygenLevels }) => {
    return (
        <div className={forecastCard}>
            <section className={cityBlock}>
                <h2>{city}, {state}</h2>
                <span>{country}</span>
                <p>The local time for this area is {timeZone}</p>
            </section>
            <section className={weatherBlock}>
                <h3>{weatherFahrenheight}°F | {weatherCelsius}°C</h3>
                <div className={weatherBlockDetails}>
                    <p>Air quality Index: 
                        <li>Carbon levels: {Math.round(aqCarbonLevels)} </li>
                        <li>Oxygen Levels levels: {Math.round(aqOxygenLevels)} </li>
                    </p>
                    <p>Astronomy:</p>
                    <p>Weather Alerts:</p>
                </div>
            </section>
        </div>
    );
};

export default ForeCastCard;