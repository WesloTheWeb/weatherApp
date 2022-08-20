import React from 'react';
import classes from './HourlyCard.module.css';

const { CardContainer } = classes;

const HourlyCard = ({ chance, convertTime, temperature, day }) => {
    return (
        <div className={CardContainer}>
            <label>{convertTime(chance[0].hour[5].time)} | {temperature}</label>
            <img src={`${chance[0].hour[5].condition.icon}`} alt={`${chance[0].hour[5].condition.text}`} />
            <p>Chance of rain: {chance[0].hour[5].chance_of_rain}</p>
            <p>cloud: {chance[0].hour[5].cloud}</p>

        </div>
    );
};


export default HourlyCard;