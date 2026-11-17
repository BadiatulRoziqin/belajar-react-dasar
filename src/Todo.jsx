import "./App.css";
import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState(["Belajar React", "Belajar JSX"]);

  const addTodo = () => {
    setTodos([...todos, "Belajar State"]);
  };

  return (
    <div>
      <h1>Daftar Todo:</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Tambah Todo</button>
    </div>
  );
}

export default Todo;