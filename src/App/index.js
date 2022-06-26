import React from "react";
import { AppUI } from "./AppUI";
import {TodoProvider} from "../TodoContext"

import "./App.css";


// const defaultTodos = [
//     { text: "Cut onion", completed: true },
//     { text: "Undertake intro to react ", completed: true },
//     { text: "Django project", completed: false },
// ];

function App() {

    return (
        <TodoProvider>
            <AppUI  />
        </TodoProvider>
    );
}

export default App;
