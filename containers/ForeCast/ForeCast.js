import React, { useEffect } from 'react';
import classes from './ForeCast.module.css';
import ForeCastCard from '../../components/ForecastCard/ForecastCard';

const { forecastContainer } = classes;

const Forecast = (props) => {
    const weatherURL = `http://api.weatherapi.com/v1&appid=${params.apiKey}`;

    const params = {
        apiKey: `${process.env.REACT_APP_WEATHER_KEY}`,
        q: 53222
    }

    useEffect(() => {
        fetch('')
    });

    return (
        <section className={forecastContainer}>
            <ForeCastCard />
        </section>
    );
};

export default Forecast;