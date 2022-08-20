import React from 'react';
import classes from './HourlyCard.module.css';

const { CardContainer } = classes;

const HourlyCard = ({ chance, time, temperature, day }) => {
    return (
        <div className={CardContainer}>
            <label>{time} | {temperature}</label>
            <h2>69°F</h2>
            <p>Chance of rain: {chance[0].hour[5].chance_of_rain}</p>
            <p>cloud: {chance[0].hour[5].cloud}</p>

        </div>
    );
};


export default HourlyCard;