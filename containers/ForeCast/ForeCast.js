import React from 'react';
import classes from './ForeCast.module.css';
import ForeCastCard from '../../components/ForecastCard/ForecastCard';

const {forecastContainer} = classes;

const Forecast = (props) => {
    return (
        <section className={forecastContainer}>
            <ForeCastCard />
        </section>
    );
};

export default Forecast;