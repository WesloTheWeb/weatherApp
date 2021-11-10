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
                    <ForeCastCard 
                        city={weather.location.name} 
                        state={weather.location.region} 
                        country={weather.location.country}
                        weatherFahrenheight={weather.current.temp_f}
                        weatherCelsius={weather.current.temp_c} 
                        timeZone={weather.location.localtime}
                        aqCarbonLevels={weather.current.air_quality.co}
                        aqOxygenLevels={weather.current.air_quality.o3}
                        />
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