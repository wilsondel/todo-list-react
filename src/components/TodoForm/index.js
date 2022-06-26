import React from "react";
import { TodoContext } from "../../TodoContext";

import "./TodoForm.css"

function TodoForm() {
    const { addTodo, setOpenModal } = React.useContext(TodoContext);
    const [newTodo, setNewTodo] = React.useState("");

    const onChange = (event) => {
        setNewTodo(event.target.value);
    };

    const onCancel = () => {
        setOpenModal((prevState) => !prevState);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal((prevState) => !prevState);
        addTodo(newTodo);
    };

    return (
        <form onSubmit={onSubmit} className="form">
            <label for="todo" >New  <span className="form__todo">TODO</span> </label>
            <textarea
                id="todo"
                value={newTodo}
                onChange={onChange}
                cols="35"
                rows="10"
                placeholder="Write a todo"
            />
            <div className="form__buttons">
                <button className="form__button form__button--cancel" type="button" onClick={onCancel}>
                    Cancel
                </button>
                <button className="form__button form__button--add" type="submit">Add</button>
            </div>
        </form>
    );
}

export { TodoForm };
