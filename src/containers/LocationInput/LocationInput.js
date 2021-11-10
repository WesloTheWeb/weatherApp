import React, { useContext, useEffect } from 'react';
import { QueryContext } from '../../context/QueryContext';
import classes from './LocationInput.module.css';

const { inputContainer } = classes;

const LocationInput = (props) => {

    const api = {
        apiKey: process.env.REACT_APP_WEATHER_KEY,
        baseURL: "http://api.weatherapi.com/v1/",
        q: 53222,
    }

    const currentWeather = `${api.baseURL}current.json?key=${api.apiKey}&q="San%20Francisco"&aqi=no`;

    const { setQuery, query, setWeather } = useContext(QueryContext);

    const handleQuery = (evnt) => {
        if (evnt.key === 'Enter') {
            fetch(`${api.baseURL}current.json?key=${api.apiKey}&q=${query}}&aqi=yes`)
                // fetch(currentWeather)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        }
    };

    return (
        <div className={inputContainer}>
            <input
                type="text"
                placeholder="city, zip, state, or country"
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={handleQuery} />
            <button>Get Forecast</button>
        </div>
    );
};

export default LocationInput;