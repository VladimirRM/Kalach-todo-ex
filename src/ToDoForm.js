import React, { useState } from "react";

const ToDoForm = () => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit =()=>{
    
  }
  const handleChange =()=>{

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
