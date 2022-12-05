import React, { useState } from "react";
import "./index.css";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

function App() {
  const [todos, setTodos] = useState([]);

  addTask = () => {};
  removeTask = () => {};
  handleToggle = () => {};

  return (
    <div className="App">
      <header>
        <h1>Todo List{todo.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            todo={todo}
          />
        );
      })}
    </div>
  );
}
export default App;
