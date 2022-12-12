import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {

  const [userInput, setUserInput] = useState("");


  const handleChange =(e)=>{
    setUserInput(e.currentTarget.value)
      
    
  }

  const handleSubmit =(e)=>{
        e.preventDefault()
        addTask(userInput)
  }

  const handleKeyPress =()=>{

  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Enter something"
      />
      <button>Save</button>
    </form>
  );
};

export default ToDoForm;
