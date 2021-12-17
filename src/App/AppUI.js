import React from "react";
import { TodoCounter } from '../components/TodoCounter/TodoCounter'
import { TodoSearch } from '../components/TodoSearch/TodoSearch'
import { TodoItem } from '../components/TodoItem/TodoItem'
import { TodoList } from '../components/TodoList/TodoList'
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton'
import { TodoContext } from "../TodoContext";
import { Modal } from "../components/modal/Modal";
import { TodoForm } from "../components/TodoForm/TodoForm";
import { LoadingTodos } from "../components/loadingTodos/LoadingTodos";

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
          {loading && 
            new Array(4).fill().map((item, index)=>(
              <LoadingTodos key={index} />
          ))}
          {(!loading && !searchedTodos.length) && <h2> CREA TU PRIMER TO DO </h2>}
  
  
  
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