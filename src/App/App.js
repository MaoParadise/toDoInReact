import React from "react";
import { AppUI } from './AppUI'
import { TodoProvider } from "../TodoContext";

 const defaultTodos = [
   {
     text: 'cortar cebolla',
     completed: false
   },
   {
     text: 'tomar curso',
     completed: true
   },
   {
     text: 'hacer ejercicio',
     completed: false
   },
   {
     text: 'nuevo text0',
    completed: true
   }
 ];



function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
