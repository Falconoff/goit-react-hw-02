import { useState, useEffect } from 'react';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

import './App.css';

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacksObj = window.localStorage.getItem('saved-feedbacks');

    return (
      JSON.parse(savedFeedbacksObj) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });

  useEffect(() => {
    window.localStorage.setItem('saved-feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  function updateFeedback(feedbackType) {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  }

  function resetFeedbacks() {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedbacks={resetFeedbacks}
      />

      {totalFeedback > 0 ? (
        <Feedback {...feedbacks} total={totalFeedback} />
      ) : (
        <Notification text={'No feedback yet'} />
      )}
    </>
  );
}

export default App;
