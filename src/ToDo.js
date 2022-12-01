import React from "react";

const ToDo = ({ todo, toggleTask, removeTask }) => {
  return (
    <div className="item-id" key={todo.id}>
      <div className={todo.complete ? "item-text strike" : "item-text"
    } onClick={()=> toggleTask(todo.id)}>{todo.task}</div>
      <div className="item-delete" on onClick={() => removeTask(todo.id)}></div>
    </div>
  );
};

export default ToDo;
