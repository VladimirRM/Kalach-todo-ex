import React, { useState } from "react";
import ToDo from "./ToDo";
import "./index.css";
import ToDoForm from "./ToDoForm";

function App() {
  const [todos, setTodos] = useState([]);
  addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos,newItem])
    }
  };
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
