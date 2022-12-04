import React from "react";

const ToDo = ({ toggleTask, todo, removeTask }) => {
  return (
    <div className="item-todo">
      <div  onClick={() => toggleTask(todo.id)}>{todo.task}</div>
      <div className="item-delete" onClick={() => removeTask(todo.id)}>X
      </div>
    </div>
  );
};

export default ToDo;
