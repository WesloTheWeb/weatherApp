import React from 'react';
import classes from './UpcomingForeCastCard.module.css';

const { CardContainer } = classes;

const UpcomingForeCastCard = ({temperature, day}) => {
    return (
        <div className={CardContainer}>
            <label>Day | date</label>
            <h2>69°F</h2>
        </div>
    );
};


export default UpcomingForeCastCard;