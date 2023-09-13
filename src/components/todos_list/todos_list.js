import React from "react";
import style from './todosList.module.css';

const TodosList = ({todos, deleteTodo}) => {
    return(
        <div>
           <ul className={style.todos}>
            {todos.length > 0 && todos.map(todo => (
                <li key={todo.id}>
                <p>{todo.text}</p>
                <p>{todo.user}</p>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
            {todos.length === 0 && <div className={style.todo_text}>
                <p>The todo's with this name not found</p>
            </div>}
           </ul>
        </div>
    )
}

export default TodosList;