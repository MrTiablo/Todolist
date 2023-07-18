// import React from 'react'
import { useState } from "react";
import { Button } from "react-bootstrap"

const Addtask = (addTask) => {
  const [value,setValue]= useState("");

  const addItem=()=>{
  addTask.addTask(value)
  }
  return (

    <div>
       <input type="text" name="" id="" className="rounded border-warning" placeholder="Add a task"
       onChange={(e)=> {
        setValue(e.target.value)
       }} /> &nbsp; 
       <Button onClick={addItem}>Add Task</Button>
    </div>
  )
}

export default Addtask