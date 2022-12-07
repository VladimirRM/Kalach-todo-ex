import React, { useState } from "react";

const ToDoForm = ({addTask}) => {
  const [userInput, setUserInput] = useState("");

  const handleChange =()=>{

  }
  const handleSubmit =()=>{
    
  }
  const handleKeyPress =()=>{

  }





  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={userInput}
        onKeyDown={handleKeyPress}
        placeholder="Enter something"
      />
    </form>
  );
};

export default ToDoForm;
