import React from "react";
import { TodoContext } from "../../TodoContext";

import "./CreateTodoButton.css";

function CreateTodoButton() {

    const {openModal, setOpenModal}  = React.useContext(TodoContext)

    const onClickButton = () => {
        setOpenModal(!openModal);
    };

    return (
        <div className="CreateTodoButton">
            <button
                className="CreateTodoButton__button"
                onClick={onClickButton}
            >
                +
            </button>
        </div>
    );
}

export { CreateTodoButton };
