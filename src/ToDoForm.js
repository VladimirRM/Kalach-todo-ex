import React, { useState } from "react";

const ToDoForm = () => {
  const [userInput, setUserInput] = useState("");
  const handleSubmit=()=>{

  }
  const handleChange=()=>{

  }
  return <form onSubmit={handleSubmit}>
    <input
     type="text" 
     value={userInput}
     onChange={handleChange}
     />
  </form>;
};

export default ToDoForm;
