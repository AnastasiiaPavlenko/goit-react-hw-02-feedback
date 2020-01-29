import React, { Component } from 'react';
import Buttons from './Buttons/Buttons';
import Statistics from './Statistics/Statistics';
import NoFeedbackGiven from './NoFeedbackGiven/NoFeedbackGiven';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (value) => {
    if (value === "good") {
      this.setState({ good: this.state.good + 1 });
    } else if (value === "neutral") {
      this.setState({ neutral: this.state.neutral + 1 });
    } else if (value === "bad") {
      this.setState({ bad: this.state.bad + 1 });
    };
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let totalFeedbacksNum = good + neutral + bad;
    return totalFeedbacksNum;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    let positiveFeedbacks = this.state.good;
    let positiveFeedbackPercentage = positiveFeedbacks * 100 / total;
    const noFeedback = "No feedback is given";
    if (total > 0) {
      return `${Math.round(positiveFeedbackPercentage)} % of positive feedbacks`;
    } else {
      return noFeedback;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return <>
      <h1> Please Leave Feedback </h1>
      <Buttons state={this.state} addFeedback={this.addFeedback} />
      <Statistics good={good} neutral={neutral} bad={bad} totalFeedbacks={this.countTotalFeedback} />
      <NoFeedbackGiven feedbackInfo={this.countPositiveFeedbackPercentage} />
    </>
  }
};
export default App;
