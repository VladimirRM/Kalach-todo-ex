import React from 'react'

const ToDo = ({todo,removeTask,toggleTask}) => {
  return (
    <div className='item-todo' key={todo.id}>
      <div></div>
      <div className="item-delete" onClick={()=>removeTask(todo.id)}>X</div>
    </div>
  )
}

export default ToDo
