import React, { useState } from "react";
import ToDo from "./ToDo";
import './index.css'
import ToDoForm from "./ToDoForm";

function App() {
  const [todos, setTodos] = useState([]);
  addTask = () => {};
  removeTask = () => {};
  handleToggle = () => {};

  return (
    <div className="App">
      <header>
        <h1>Todo List:{todos.length}</h1>
      </header>
      <ToDoForm />
      {todos.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
            removeTask={removeTask}
            toggleTask={handleToggle}
          />
        );
      })}
    </div>
  );
}
