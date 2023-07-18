// import React from 'react'

import { Button } from "react-bootstrap"
import './Input.css'

const Listtask = ({todo,index,removeTask}) => {
  return (
    <>
    <div className="lita">
        {todo.title} &nbsp;
        <Button className="bg-danger" onClick={()=> {removeTask(index)}} >Delete</Button>
    </div>
    </>
  )
}

export default Listtask