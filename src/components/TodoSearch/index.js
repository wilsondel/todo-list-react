import React from "react";
import { TodoContext } from "../../TodoContext";

import "./TodoSearch.css"

function TodoSearch() {
    const {searchValue,setSearchValue} = React.useContext(TodoContext)
    const onSearchValueChange = (event)=>{
        setSearchValue(event.target.value)
        console.log("Value: ", searchValue);
    }

    return (
        <div className="TodoSearch">
            <input 
            type="text" 
            placeholder="Search task" 
            className="TodoSearch__box" 
            onChange={onSearchValueChange}
            value={searchValue}
            />
            <div className="TodoSearch__icon">
                <span className="icon-search" title="Search" ></span>
            </div>
        </div>
    );
}

export {TodoSearch};