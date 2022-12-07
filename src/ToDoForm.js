import React, { useState } from "react";

const ToDoForm = () => {
  const [userInput, setUserInput] = useState("");



  

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
