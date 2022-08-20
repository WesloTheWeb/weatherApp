import React from 'react';
import classes from './ForeCastCard.module.css';

const { forecastCard, cityBlock, conditionContainer, weatherBlock, weatherBlockDetails } = classes;

const ForeCastCard = (
    { city, state, country, conditions, conditionImg, weatherFahrenheight, weatherCelsius, feelsLikeF, feelsLikeC, timeZone, aqCarbonLevels, sunrise, sunset,
        aqOxygenLevels, humidity, visMiles, visKM }) => {
    return (
        <div className={forecastCard}>
            <section className={cityBlock}>
                <h2>{city}, {state}</h2>
                <span>{country}</span>
                <div>
                    <p>The local date and time for this area is {timeZone.toString()} . Visibility is currently {visMiles} miles / {visKM} kilometers</p>
                    <h4>Feels like...</h4>
                    <p>{feelsLikeF}°F | {feelsLikeC}°C</p>
                    <div className={conditionContainer}>
                        <p>Current conditions: <b>{conditions}</b></p>
                        <img src={`${conditionImg}`} alt="clouds" />
                        <p>Sunrise is at {sunrise} </p>
                        <p>Sunset is at {sunset}</p>
                    </div>
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