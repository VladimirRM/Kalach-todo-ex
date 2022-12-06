import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)
  };
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
