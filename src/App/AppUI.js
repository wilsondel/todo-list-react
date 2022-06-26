import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { HideTodoButton } from "../components/HideTodoButton";
import { TodoItem } from "../components/TodoItem";
import { Footer } from "../components/Footer";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";

import { TodoContext } from "../TodoContext";
import { MyLoader } from "../components/TodoLoading";
import { TodoError } from "../components/TodoError";
import { TodoEmpty } from "../components/TodoEmpty";

function AppUI() {
    const {
        error,
        loading,
        todosFiltered,
        onCompleteTodo,
        onDeleteTodo,
        openModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <TodoError />}
                {loading && [1,2,3].map((item,idx)=><MyLoader key={idx} />)}
                {!error && !loading && !todosFiltered.length && (
                    <TodoEmpty />
                )}

                {!error && todosFiltered.map((item, idx) => (
                    <TodoItem
                        key={idx}
                        text={item.text}
                        completed={item.completed}
                        onComplete={() => onCompleteTodo(item.text)}
                        onDelete={() => onDeleteTodo(item.text)}
                    />
                ))}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton />
            <HideTodoButton />
            <Footer />
        </React.Fragment>
    );
}

export { AppUI };
