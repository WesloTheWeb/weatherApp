import React from 'react';
import classes from './ForeCastCard.module.css';

const { forecastCard } = classes;

const ForeCastCard = ({city, currentWeather, timeZone}) => {
    return (
        <div className={forecastCard}>
            <h2>{city}</h2>
            <h3>{currentWeather}</h3>
            <p>The local time for {city} is {timeZone}</p>
        </div>
    );
};

export default ForeCastCard;