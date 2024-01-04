const FinishScreen = ({ points, maxPossiblePoints, highscore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage >= 90) emoji = "🎖️";
  if (percentage >= 80 && percentage < 90) emoji = "🥇";
  if (percentage >= 60 && percentage < 80) emoji = "🥈";
  if (percentage >= 50 && percentage < 60) emoji = "🥉";
  if (percentage <= 50 && percentage > 35) emoji = "😃";
  if (percentage <= 35) emoji = "🤦🤦‍♀️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You Scored <strong>{points}</strong> out of
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} Points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Finish
      </button>
    </>
  );
};

export default FinishScreen;
