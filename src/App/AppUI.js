import React from "react";
import { TodoCounter } from '../components/TodoCounter/TodoCounter'
import { TodoSearch } from '../components/TodoSearch/TodoSearch'
import { TodoItem } from '../components/TodoItem/TodoItem'
import { TodoList } from '../components/TodoList/TodoList'
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton'
import { TodoContext } from "../TodoContext";
import { Modal } from "../components/modal/Modal";
import { TodoForm } from "../components/TodoForm/TodoForm";

const AppUI = () =>{

    const { 
            error,
            loading,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
          } = React.useContext(TodoContext);

    return(
      <React.Fragment>
      
      <TodoCounter/> 
      
      <TodoSearch />
          <TodoList>

          {error && <p> Desesperate, hubo un error </p>}
          {loading && <p> Estamos cargando, no desesperes... </p>}
          {(!loading && !searchedTodos.length) && <p> CREA TU PRIMER TO DO </p>}
  
  
  
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
          </TodoList> 
        
        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      
      <CreateTodoButton 
        openModal={openModal}
        setOpenModal={setOpenModal}
      /> 
     
    </React.Fragment>
    );

}

export { AppUI };