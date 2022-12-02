import React, { useState } from "react";

const ToDoForm = () => {
  const [userInput,setUserInput]= useState('')
 const handleChange =()=>{
  
 }
 const handleSubmit =()=>{

 }
 



  return (
    <form  onSubmit={handleSubmit}>
      <input type="text"
      value={userInput}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      placeholder='Enter something...'
      
      />
    </form>
  )
};

export default ToDoForm;
