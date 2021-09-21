import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoForm.css'

const TodoForm = () => {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onCancel = () =>{
        setOpenModal(false);
    };

    const onChange = (event) =>{
        // TODO
        setNewTodoValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }


    return(
        <form onSubmit={onSubmit}>
            <label>..</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="coloque aqui su actividad que quiere agregar">
            </textarea>
            <div className='TodoForm-buttonContainer'>
                <button className='TodoForm-button TodoForm-button-cancel' onClick={onCancel} type="button">
                    Cancelar
                </button>
                <button className='TodoForm-button TodoForm-button-add' type="submit">
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm}