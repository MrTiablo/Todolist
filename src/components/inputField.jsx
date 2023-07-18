// import React from 'react'

import { useState } from "react"
import Addtask from "./Addtask"
import Listtask from "./Listtask"


const Input = () => {
    const [task,setTask]=useState([])

     const addTask =(title) =>  {
        const newTask = [...task,{title}]
        setTask(newTask)
     }

     const removeTask =(index) =>{
      const newTask = [...task]
      newTask.splice(index,1)
      setTask(newTask)
     }
  return (
    <>
    <div className="bg-dark text-white">
       <h1>ToDo List</h1> 
       <div>
       <Addtask addTask={addTask}/>
       </div>
       
        {
            task.map((todo,index) => 
                (
            <div key={todo.id}>

                    <Listtask todo= {todo} removeTask={removeTask} index={index}/> 
            </div>
                ))
        }
        
       
    </div>
    </>
  )
}

export default Input