import React, { useEffect } from 'react';
import classes from './ForeCast.module.css';
import ForeCastCard from '../../components/ForecastCard/ForecastCard';
import UpcomingForeCastCard from '../../components/UpcomingForceCastCard/UpcomingForeCastCard';

const { forecastContainer, upcomingGrid } = classes;

const Forecast = (props) => {

    const params = {
        apiKey: process.env.REACT_APP_WEATHER_KEY,
        baseURL: "http://api.weatherapi.com/v1/",
        q: 53222,
    }
    const currentWeather = `${params.baseURL}current.json?key=${params.apiKey}&q="San%20Francisco"&aqi=no`;
    const forecastWeather = `${params.baseURL}forecast.json?key=${params.apiKey}&q="San%20Francisco"&aqi=no`;
    useEffect(() => {
        fetch(forecastWeather)
            .then(res => res.json())
            .then(result => console.log(result))
    });

    return (
        <section className={forecastContainer}>
            <ForeCastCard />
            <div className={upcomingGrid}>
                <UpcomingForeCastCard />
                <UpcomingForeCastCard />
                <UpcomingForeCastCard />
                <UpcomingForeCastCard />
                <UpcomingForeCastCard />
                <UpcomingForeCastCard />
                <UpcomingForeCastCard />
                <UpcomingForeCastCard />
                <UpcomingForeCastCard />
                <UpcomingForeCastCard />
                <UpcomingForeCastCard />
                <UpcomingForeCastCard />
                <UpcomingForeCastCard />
                <UpcomingForeCastCard />

            </div>
        </section>
    );
};

export default Forecast;