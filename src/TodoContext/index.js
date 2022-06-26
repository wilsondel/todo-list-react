import React from "react";

// Hooks
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage("TODOS_V1", []);
    const [openModal, setOpenModal] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");
    const [hideButton, setHideButton] = React.useState(false);

    const completedTodos = todos.filter((item) => item.completed).length;
    const totalTodos = todos.length;

    let todosFiltered = todos.filter((item) => {
        // console.log(item);
        if (!hideButton) {
            return item
                ? item.text.toLowerCase().includes(searchValue.toLowerCase())
                : false;
        } 
        return item.completed 
    });

    const addTodo = (text) => {
        const checkTodo = [...todos];
        text &&
            checkTodo.push({
                text: text,
                completed: false,
            });
        saveTodos(checkTodo);
    };

    const onCompleteTodo = (text) => {
        const checkTodoIndex = todos.findIndex((item) => item.text === text);
        const checkTodo = [...todos];
        checkTodo[checkTodoIndex].completed =
            !checkTodo[checkTodoIndex].completed;
        saveTodos(checkTodo);
    };

    const onDeleteTodo = (text) => {
        const checkTodoIndex = todos.findIndex((item) => item.text === text);
        const checkTodo = [...todos];
        checkTodo.splice(checkTodoIndex, 1);
        saveTodos(checkTodo);
    };

    return (
        <TodoContext.Provider
            value={{
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                todosFiltered,
                setHideButton,
                addTodo,
                onCompleteTodo,
                onDeleteTodo,
                openModal,
                setOpenModal,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
