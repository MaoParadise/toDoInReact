import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoCounter.css'

const TodoCounter = ()=>{
   const {totalTodos, completedTodos} = React.useContext(TodoContext)

   return(
   <h2 className='TodoCounter' > Haz completado {completedTodos} de {totalTodos} ToDo's </h2>
   ) 
}

export { TodoCounter };