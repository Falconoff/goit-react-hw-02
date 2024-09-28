const Feedback = ({ good, neutral, bad }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: 5</li>
      <li>Positive: 80%</li>
    </ul>
  );
};

export default Feedback;
