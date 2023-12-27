import { useEffect } from "react";
import { useState } from "react";

function DemoApp() {
  const [todos, setTodos] = useState([]);

  /* Using then Syntax */
  /*   const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }; */

  /* Using async/await Syntax */
  const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      {todos.map((todo) => (
        <h1 key={todo.id}>{todo.title}</h1>
      ))}
    </div>
  );
}

export default DemoApp;
