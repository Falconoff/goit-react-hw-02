import css from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total, positivePercent }) => {
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
