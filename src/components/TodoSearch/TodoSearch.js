import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoSearch.css'

const TodoSearch = () => {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)

    const onChangeValueChange = (event) =>{
         setSearchValue(event.target.value)
    };

    return(
        <input
            className='TodoSearch'
            placeholder='Escribe algo...'
            value={searchValue}
            onChange={onChangeValueChange}
        />
    );
}

export { TodoSearch };