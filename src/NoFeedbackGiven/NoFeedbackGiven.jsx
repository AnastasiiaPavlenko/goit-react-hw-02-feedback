import React from 'react';
import PropTypes from 'prop-types';
import styles from './NoFeedbackGiven.module.css';

const NoFeedbackGiven = (props) => (
    <div className={styles.feedback}>{props.feedbackInfo()}</div>
);

NoFeedbackGiven.propTypes = {
    feedbackInfo: PropTypes.func.isRequired,
};

export default NoFeedbackGiven;