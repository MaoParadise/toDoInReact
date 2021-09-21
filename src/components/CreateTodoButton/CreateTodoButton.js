import React from "react";
import './CreateTodoButton.css'

const CreateTodoButton = (props) =>{
    const onToggleButton = () => {
        // como lo hizo el profe...  props.setOpenModal(prevState =>!prevState)
        props.setOpenModal(!props.openModal);
    }

    return( 
    <button
        className='CreateTodoButton'
        onClick={ onToggleButton }
        // Cada vez que el evento lleve parentesis en la funcion, se tiene que
        // agregar una arrow functions!!! 
    > 
        + 
    </button>
    );
}

export {CreateTodoButton}