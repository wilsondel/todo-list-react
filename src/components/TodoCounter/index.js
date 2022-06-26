import React from "react";
import { TodoContext } from "../../TodoContext";

import "./TodoCounter.css"

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return (
        <h2 className="todoCounter" > 
        You have accomplished {completedTodos} out of {totalTodos} tasks  
        </h2>
    );
}

export {TodoCounter};