import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
    // const onComplete = () => {
    //     alert("Task completed");
    //     props.completed = !props.completed;
    // };

    // const onDelete = () => {
    //     alert("Task deleted");
    // };

    return (
        <li className="TodoItem">
            <span
                className={`icon-checkmark TodoItem__icon_check TodoItem__icon ${
                    props.completed && "TodoItem__icon--active"
                }`}
                onClick={props.onComplete}
            ></span>
            <p
                className={`${
                    props.completed && "TodoItem__paragraph--active"
                }`}
            >
                {props.text}
            </p>
            <span 
            className="icon-delete TodoItem__icon "
            onClick={props.onDelete}
            ></span>
        </li>
    );
}

export { TodoItem };
