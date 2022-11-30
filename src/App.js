import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = () => {};
  const removeTask = () => {};
  const handleToggle = () => {};

  return (
    <div className="App">
      <header>
        <h1>Todo List{todos.length}</h1>
      </header>
      <ToDoForm/>
      {todos.map((todo)=>{
        return(
          <ToDo
          key={todo.id}
          todo={todo}
          toggleTask={handleToggle}
          removeTask={removeTask}
          />
        )
      })}

    </div>
  );
}

export default App;
