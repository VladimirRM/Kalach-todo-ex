import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const handleChange = () => {};
  const handleSubmit = () => {};
  const handleKeyPress = () => {};

  const [userInput, setUserInput] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={userInput}
        onKeyDown={handleKeyPress}
        placeholder="Enter something..."
      />
    </form>
  );
};

export default ToDoForm;
