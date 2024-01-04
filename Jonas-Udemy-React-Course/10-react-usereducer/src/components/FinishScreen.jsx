const FinishScreen = ({ points, maxPossiblePoints, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage >= 90) emoji = "🎖️";
  if (percentage >= 80 && percentage < 90) emoji = "🥇";
  if (percentage >= 60 && percentage < 80) emoji = "🥈";
  if (percentage >= 50 && percentage < 60) emoji = "🥉";
  if (percentage <= 50 && percentage > 35) emoji = "😃";
  if (percentage <= 35) emoji = "🤦";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You Scored <strong>{points}</strong> out of&nbsp;
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>

      <br />
      <br />
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Try Again
      </button>
    </>
  );
};

export default FinishScreen;
