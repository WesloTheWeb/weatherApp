import React, { useContext } from 'react';
import { QueryContext } from '../../context/QueryContext';
import Instructions from '../../components/Instructions/Instructions';
import ForeCastCard from '../../components/ForeCastCard/ForeCastCard';
import classes from './ForeCast.module.css';

import UpcomingForeCastCard from '../../components/UpcomingForceCastCard/UpcomingForeCastCard';
import HourlyCard from '../../components/HourlyCard/HourlyCard';

const { forecastContainer, upcomingGrid } = classes;

const convertTime = (time) => {
    // TODO convert substring of first two element to convert from military time to regular
    return time.slice(10)
};

const convertPresentTime = (time) => {
    const newStr = time.split(' ');
    return newStr.slice(4, 5)
}


const ForeCast = (props) => {

    const { weather, location } = useContext(QueryContext);

    return (
        <section className={forecastContainer}>
            {(typeof weather.location != 'undefined') ? (
                <>
                    <ForeCastCard
                        city={weather.location.name}
                        conditions={weather.current.condition.text}
                        conditionImg={weather.current.condition.icon}
                        convertTime={convertTime}
                        state={weather.location.region}
                        sunrise={location.astronomy?.astro.sunrise}
                        sunset={location.astronomy?.astro.sunset}
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
                    <h3 className='text-center'>Hourly Breakdown</h3>
                    <div className={upcomingGrid}>
                        {weather.forecast.forecastday[0].hour.map((currentDay, idx) => {
                            console.log(convertTime(currentDay.time))
                            return (
                                // <div>
                                //     {console.log(currentDay.time)}
                                // </div>
                                <HourlyCard
                                    forecast={weather.forecast.forecastday}
                                    convertTime={convertTime}
                                    hour={currentDay.time}
                                    fahTemperature={currentDay.temp_f}
                                    celTemperature={currentDay.temp_c}
                                    rain={currentDay}
                                    key={idx}
                                />
                            )
                        })
                        }


                        {/* <UpcomingForeCastCard /> 
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
                        <UpcomingForeCastCard />  */}
                    </div>
                </>
            ) : (
                <Instructions />
            )
            }

        </section>
    );
};

export default ForeCast;