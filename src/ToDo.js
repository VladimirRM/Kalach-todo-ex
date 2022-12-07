import React from 'react'

const ToDo = ({todo,removeTask,toggleTask}) => {
  return (
    <div className='item-todo' key={todo.id}>
      <div className={todo.id?'item-text strike':'item-text'} onClick={()=>toggleTask}></div>
      div
    </div>
  )
}

export default ToDo
