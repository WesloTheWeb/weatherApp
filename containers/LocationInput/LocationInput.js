import React from 'react';
import classes from './LocationInput.module.css';

const { inputContainer } = classes;

const LocationInput = (props) => {
    return (
        <form className={inputContainer}>
            <input placeholder="city, zip, state, or country" />
            <button>Get Forecast</button>
        </form>
    );
};

export default LocationInput;