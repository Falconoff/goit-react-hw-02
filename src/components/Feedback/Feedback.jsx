import css from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total }) => {
  const positivePercent = Math.round((good / total) * 100);

  return (
    <ul className={css.feedbackList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positivePercent}%</li>
    </ul>
  );
};

export default Feedback;
