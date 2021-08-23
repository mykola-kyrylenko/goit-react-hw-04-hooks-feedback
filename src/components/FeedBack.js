// import React, { Component } from 'react';
import {useState} from 'react';
import Statistics from './Statistics/Statistics.js';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.js';
import Section from './Section/Section.js';
import Notification from './Notification/Notification.js';
import s from './FeedBack.module.css'

const FeedBack = () => {

  // const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countPercentage () {
    const total = countTotalFeedback();
    return total ? Math.ceil((100 / total) * good) : 0;
  };

  function handleFeedback ({ target }) {

    const { name } = target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default: 
    }
  };

  function countTotalFeedback () {
      return good + neutral + bad;
  };


  const totalFn = countTotalFeedback();
  const percentFn = countPercentage();


  
    return (
      <div className={s.wrapper}>
        <Section title="Please leave feedback" flag={true}>
          <FeedbackOptions onClick={handleFeedback} feedbacks={{ good: good, bad: bad, neutral: neutral }} />
        </Section>
        <Section title="Statistics" flag={false}>
          {totalFn > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFn}
              percentage={percentFn}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </div>
    );
}

export default FeedBack;



 
