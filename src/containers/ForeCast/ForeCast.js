import React, { useContext } from 'react';
import { QueryContext } from '../../context/QueryContext';
import classes from './ForeCast.module.css';
import ForeCastCard from '../../components/ForecastCard/ForecastCard';
import UpcomingForeCastCard from '../../components/UpcomingForceCastCard/UpcomingForeCastCard';

const { forecastContainer, upcomingGrid } = classes;

const Forecast = (props) => {

    const { weather } = useContext(QueryContext);

    return (
        <section className={forecastContainer}>
            {(typeof weather.location != 'undefined') ? (
                <>
                    <ForeCastCard city={weather.location.name} />
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
                </>
            ) : ('')
            }

        </section>
    );
};

export default Forecast;