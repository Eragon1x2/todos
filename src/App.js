import TodosList from "./components/todos_list/todos_list";
import React, {useEffect, useState} from "react";
import AddTodoForm from './components/addTodoform/addTodoform';
import style from './app.module.css';
function App() {
  const [todos, setTodos] = useState(localStorage
    .getItem('todos') ? JSON.parse(localStorage
      .getItem('todos')) : []);
const [filter, setfilter] = useState('');
const deleteTodo = (id) => {
  setTodos(todos.filter(a => a.id !== id))
};
const filterTodos = (e) => {
  setfilter(e.currentTarget.value);
};
const addTodos = (todo) => {
 setTodos([...todos,todo])
}

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])
const todos_filtered = todos && todos.filter(todo => todo.text.toLowerCase().includes(filter.toLowerCase()));
  return (
    <div className={style.app}>
    <h1>TODOS</h1>
   <div className={style.inputs}>
   <div className={style.inputs_div}>
   <AddTodoForm addTodo={addTodos}></AddTodoForm>
    <input value={filter} onChange={filterTodos} placeholder='Filter'></input>
   </div>
   </div>
    <TodosList todos={todos_filtered} deleteTodo={deleteTodo}></TodosList>
    </div>
  );
}

export default App;
