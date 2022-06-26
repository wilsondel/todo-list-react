import React from "react";
import logo from "./images/error.svg"
import "./TodoError.css"

const TodoError = (props) => (
    <div className="error">
        <figure>
            <img src={logo} alt="error" />
            <figcaption>We're sorry we had a problem.</figcaption>
        </figure>
    </div>
);

export {TodoError};
