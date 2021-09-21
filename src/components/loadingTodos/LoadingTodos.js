import React from "react"
import './LoadingTodos.css'

const LoadingTodos = (props) => {
    return(
        <li className='TodoLoading'>
            <span
                className={`Icon Icon-check 'Icon-check--active'}`}
            >
                √
            </span>

            <p className={`TodoLoading-p 'TodoLoading-p--complete'}`}>
                Cargando TODO's ...
            </p> 

            <span
                className="Icon Icon-delete"
            >
                X
            </span>
        </li>
    )
}

  


export {LoadingTodos}