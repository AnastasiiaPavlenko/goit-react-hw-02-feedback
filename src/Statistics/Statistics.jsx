import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = (props) => (
    <>
        <span className={styles.title}> Statistics </span>
        <ul className={styles.statistics} >
            <li>Good: {props.good}</li>
            <li>Neutral: {props.neutral}</li>
            <li>Bad: {props.bad}</li>
            <li>Total: {props.totalFeedbacks}</li>
        </ul>
    </>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalFeedbacks: PropTypes.func.isRequired,
};

export default Statistics;
