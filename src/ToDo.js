import React from "react";

const ToDo = ({ toggleTask, todo, removeTask }) => {
  return (
<div className="item-todo" key={todo.id}>
<div className={todo.complete? 'item-text strike':'item-text'} onClick>{todo.task}</div>
<div className="item-delete">X</div>

</div>
  )

export default ToDo;
