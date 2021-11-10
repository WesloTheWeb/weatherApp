import React from 'react';
import classes from './ForeCastCard.module.css';

const { forecastCard, cityBlock, weatherBlock, weatherBlockDetails } = classes;

const ForeCastCard = ({ city, currentWeather, timeZone }) => {
    return (
        <div className={forecastCard}>
            <section className={cityBlock}>
                <h2>{city}</h2>
                <p>The local time for this area is {timeZone}</p>
            </section>
            <section className={weatherBlock}>
                <h3>73° F | 22° C  </h3>
                <div className={weatherBlockDetails}>
                    <p>Air quality Index:</p>
                    <p>Astronomy:</p>
                    <p>Weather Alerts:</p>
                </div>
            </section>
            {/* <h2>{city}</h2>
            <h3>{currentWeather}</h3> */}
        </div>
    );
};

export default ForeCastCard;