import React, { useEffect } from 'react';
import classes from './ForeCast.module.css';
import ForeCastCard from '../../components/ForecastCard/ForecastCard';

const { forecastContainer } = classes;

const Forecast = (props) => {
    const params = {
        apiKey: process.env.REACT_APP_WEATHER_KEY,
        baseURL: "http://api.weatherapi.com/v1/",
        q: 53222
    }
    const weatherURL = `${params.baseURL}&appid=${params.apiKey}`;

    useEffect(() => {
        fetch(weatherURL)
            .then( res => res.json())
            .then(result => console.log(result))
    });

    return (
        <section className={forecastContainer}>
            <ForeCastCard />
        </section>
    );
};

export default Forecast;