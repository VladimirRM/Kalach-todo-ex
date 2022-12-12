import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import "./index.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTask = () => {};
  const removeTask = (id) => {
    setTodos([
      ...todos
    ])
  };
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo)=>{todo.id ?{...todo,complete: !todo.complete}:{...todo}})
    ])
  };
  return (
    <div className="App">
      <header>
        <h1>Todo List:{todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            removeTask={removeTask}
            toggleTask={handleToggle}
            key={todo.id}
          />
        );
      })}
    </div>
  );
};

export default App;
