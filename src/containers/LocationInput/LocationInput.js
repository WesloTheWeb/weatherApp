import React, { useContext, useEffect } from 'react';
import { QueryContext } from '../../context/QueryContext';
import classes from './LocationInput.module.css';

const { inputContainer } = classes;

const LocationInput = (props) => {

    const api = {
        apiKey: process.env.REACT_APP_WEATHER_KEY,
        baseURL: "https://api.weatherapi.com/v1/",
        q: 53222,
    }

    const { setQuery, query, setWeather, setLocation } = useContext(QueryContext);

    const handleQuery = (evnt) => {
        if (evnt.key === 'Enter') {
            fetch(`${api.baseURL}forecast.json?key=${api.apiKey}&q=${query}}&aqi=yes`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    // console.log(result);
                });
            fetch(`https://api.weatherapi.com/v1/astronomy.json?key=${api.apiKey}&q=${query}&dt=2022-08-20`)
                .then(res => res.json())
                .then(results => {
                    setLocation(results);
                    // console.log(results);
                });
        }
    };

    return (
        <div className={inputContainer}>
            <input
                type="text"
                placeholder="Search by a city name or zip code"
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={handleQuery} />
        </div>
    );
};

export default LocationInput;