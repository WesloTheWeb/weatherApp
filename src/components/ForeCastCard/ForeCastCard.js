import React from 'react';
import classes from './ForeCastCard.module.css';

const { forecastCard, cityBlock, weatherBlock, weatherBlockDetails } = classes;

const ForeCastCard = (
    { city, state, country, weatherFahrenheight, weatherCelsius, feelsLikeF, feelsLikeC, timeZone, aqCarbonLevels,
        aqOxygenLevels, humidity, visMiles, visKM }) => {
    return (
        <div className={forecastCard}>
            <section className={cityBlock}>
                <h2>{city}, {state}</h2>
                <span>{country}</span>
                <div>
                    <p>The local date and time for this area is {timeZone}. Visibility is currently {visMiles} miles / {visKM} kilometers</p>
                    <h4>Feels like...</h4>
                    <p>{feelsLikeF}°F | {feelsLikeC}°C</p>
                </div>
            </section>
            <section className={weatherBlock}>
                <h3>{weatherFahrenheight}°F | {weatherCelsius}°C</h3>
                <div className={weatherBlockDetails}>
                    <p>
                        <label>Air quality Index:</label>
                        <li>Carbon levels: {Math.round(aqCarbonLevels)} </li>
                        <li>Oxygen Levels levels: {Math.round(aqOxygenLevels)} </li>
                    </p>
                    <p><label>Humidity:</label> {humidity}</p>
                </div>
            </section>
        </div>
    );
};

export default ForeCastCard;