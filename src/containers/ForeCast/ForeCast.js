import React, { useContext } from 'react';
import { QueryContext } from '../../context/QueryContext';
import Instructions from '../../components/Instructions/Instructions';
import ForeCastCard from '../../components/ForeCastCard/ForeCastCard';
import classes from './ForeCast.module.css';

import UpcomingForeCastCard from '../../components/UpcomingForceCastCard/UpcomingForeCastCard';

const { forecastContainer, upcomingGrid } = classes;

const ForeCast = (props) => {

    const { weather, location } = useContext(QueryContext);

    console.log('###')
    return (
        <section className={forecastContainer}>
            {(typeof weather.location != 'undefined') ? (
                <>
                    <ForeCastCard
                        city={weather.location.name}
                        conditions={weather.current.condition.text}
                        conditionImg={weather.current.condition.icon}
                        state={weather.location.region}
                        // sunrise={location.astronomy.astro.sunrise}
                        // sunset={weather.astronomy.astro.sunset}
                        country={weather.location.country}
                        weatherFahrenheight={weather.current.temp_f}
                        weatherCelsius={weather.current.temp_c}
                        timeZone={weather.location.localtime}
                        aqCarbonLevels={weather.current.air_quality.co}
                        aqOxygenLevels={weather.current.air_quality.o3}
                        feelsLikeF={weather.current.feelslike_f}
                        feelsLikeC={weather.current.feelslike_c}
                        humidity={weather.current.humidity}
                        visMiles={weather.current.vis_miles}
                        visKM={weather.current.vis_km}
                    />
                    {/* <div className={upcomingGrid}>
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
                    </div> */}
                </>
            ) : (
                <Instructions />
            )
            }

        </section>
    );
};

export default ForeCast;