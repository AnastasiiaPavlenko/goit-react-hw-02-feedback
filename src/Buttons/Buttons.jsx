import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Buttons.module.css';

class Buttons extends Component {
    static propTypes = {
        state: PropTypes.object.isRequired,
        addFeedback: PropTypes.func.isRequired,
    }

    handleChange(value) {
        this.props.addFeedback(value);
    }

    render() {
        return <div className={styles.buttons}>
            <button className={styles.button} type="button" onClick={() => this.handleChange("good")}>good</button>
            <button className={styles.button} type="button" onClick={() => this.handleChange("neutral")}>neutral</button>
            <button className={styles.button} type="button" onClick={() => this.handleChange("bad")}>bad</button>
        </div>
    };
};

export default Buttons;
