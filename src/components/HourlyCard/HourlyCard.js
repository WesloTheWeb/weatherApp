import React from 'react';
import classes from './HourlyCard.module.css';

const { CardContainer } = classes;

const HourlyCard = ({ cloud, convertTime, hour, icon, altIcon, celTemperature, fahTemperature, rain, snow, windDir, wind }) => {
    return (
        <div className={CardContainer}>
            <label>
                {convertTime(hour)}</label>
            <div>
                <p>
                    {fahTemperature} &deg;F
                    | {celTemperature} &deg;C
                </p>
                <img src={`${icon}`} alt={`${altIcon}`} />
            </div>
            <p>Chance of rain: {rain}%</p>
            <p>Chance of snow: {snow}%</p>
            <p>Wind-direction: {windDir}</p>
            <p>Wind mph: {wind}</p>
            <p>Cloud: {cloud}% coverage</p>
        </div>
    );
};

export default HourlyCard;