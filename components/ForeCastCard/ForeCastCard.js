import React from 'react';
import classes from './ForeCastCard.module.css';

const { forecastCard, cityBlock, weatherBlock } = classes;

const ForeCastCard = ({ city, currentWeather, timeZone }) => {
    return (
        <div className={forecastCard}>
            <section className={cityBlock}>
                <h2>San Francisco</h2>
                <p>The local time for {city} is {timeZone}</p>
            </section>
            <section className={weatherBlock}>
                <h3>73 degrees</h3>
                <p>Other weather data</p>
            </section>
            {/* <h2>{city}</h2>
            <h3>{currentWeather}</h3> */}
        </div>
    );
};

export default ForeCastCard;