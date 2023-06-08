import { useState, useEffect } from "react";
import Messages from "./Messages";
import Advice from "./Advice";
import "./index.css";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="container">
      <Advice advice={advice} />
      <button className="btn btn-one" onClick={getAdvice}>
        Get Advice
      </button>
      <Messages count={count} />
    </div>
  );
}
