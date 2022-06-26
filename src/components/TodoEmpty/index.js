import React from "react";
import logo from "./images/create.svg"
import "./TodoEmpty.css"

const TodoEmpty = (props) => (
    <div className="empty">
        <figure>
            <img src={logo} alt="create" />
            <figcaption>Create your first TODO!</figcaption>
        </figure>
    </div>
);

export {TodoEmpty};
