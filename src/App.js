import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import NoFeedbackGiven from './NoFeedbackGiven/NoFeedbackGiven';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (value) => {
    switch (value) {
      case 'good':
        this.setState({ good: this.state.good + 1 });
        break;
      case 'neutral':
        this.setState({ neutral: this.state.neutral + 1 });
        break;
      case 'bad':
        this.setState({ bad: this.state.bad + 1 });
        break;
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
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
      <FeedbackOptions addFeedback={this.addFeedback} />
      <Statistics good={good} neutral={neutral} bad={bad} totalFeedbacks={this.countTotalFeedback()} />
      <NoFeedbackGiven feedbackInfo={this.countPositiveFeedbackPercentage} />
    </>
  }
};
export default App;
