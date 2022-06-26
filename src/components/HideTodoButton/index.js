import React from "react";
import { TodoContext } from "../../TodoContext";
import "./HideTodoButton.css";

function HideTodoButton(props) {
    const { setHideButton } = React.useContext(TodoContext);

    const onClickButton = () => {
        setHideButton((prevState) => !prevState);
    };

    return (
        <div className="HideTodoButton">
            <button onClick={onClickButton}>
                <span
                    className="icon-eye-blocked"
                    title="Show completed tasks"
                ></span>
            </button>
        </div>
    );
}

export { HideTodoButton };
