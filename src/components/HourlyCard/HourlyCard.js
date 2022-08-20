import React from 'react';
import classes from './HourlyCard.module.css';

const { CardContainer } = classes;

const HourlyCard = ({ forecast, convertTime, temperature, day }) => {
    return (
        <div className={CardContainer}>
            <label>
                {convertTime(forecast[0].hour[5].time)}</label>
            <div>
                <p>
                    {forecast[0].hour[5].temp_f} &deg;F
                    | {forecast[0].hour[5].temp_c} &deg;C
                </p>
                <img src={`${forecast[0].hour[5].condition.icon}`} alt={`${forecast[0].hour[5].condition.text}`} />

            </div>
            <p>Chance of rain: {forecast[0].hour[5].chance_of_rain}%</p>
            <p>Chance of snow: {forecast[0].hour[5].chance_of_snow}%</p>
            <p>Wind-direction: {forecast[0].hour[5].wind_dir}</p>
            <p>Wind mph: {forecast[0].hour[5].wind_mph}</p>
            <p>Cloud: {forecast[0].hour[5].cloud}% coverage</p>
        </div>
    );
};

export default HourlyCard;