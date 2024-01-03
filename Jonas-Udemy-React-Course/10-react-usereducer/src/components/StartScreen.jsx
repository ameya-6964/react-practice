const StartScreen = ({ numQuestions }) => {
  return (
    <div className="start">
      <h2>Welcome To The React Quiz!</h2>
      <h3>{numQuestions} question&apos;s To Test Your React Mastery</h3>
      <button className="btn btn-ui">Lets Start</button>
    </div>
  );
};

export default StartScreen;
