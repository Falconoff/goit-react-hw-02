import { useState } from 'react';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

import './App.css';

function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  function updateFeedback(feedbackType) {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  }

  function resetFeedbacks() {
    // for (const key in feedbacks) {
    //   setFeedbacks({
    //     [key]: 0,
    //   });
    // }
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
        feedbacks={feedbacks}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedbacks={resetFeedbacks}
      />

      {/* {totalFeedback > 0 && <Feedback {...feedbacks} />}

      {totalFeedback === 0 && <Notification text={'No feedback yet'} />} */}

      {totalFeedback > 0 ? (
        <Feedback {...feedbacks} />
      ) : (
        <Notification text={'No feedback yet'} />
      )}
    </>
  );
}

export default App;
