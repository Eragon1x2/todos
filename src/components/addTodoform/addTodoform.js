import React,{useState} from "react";

const shortid = require('shortid');
const AddTodoForm = ({addTodo}) => {
    const [text, settext] = useState('');
    const [name, setname] = useState('');
    const onName = (e) => {
       setname(e.currentTarget.value);
      };
    const onText = (e) => {
        settext(e.currentTarget.value);
       };
       const onSubmits = (e) => {
        e.preventDefault();
        const todo = {
            text,
            user: name,
            id: shortid.generate()
        }
        
        addTodo(todo)
       }
    return(
    <form onSubmit={(e) => onSubmits(e)}>
    <input value={text} onChange={onText} placeholder="text"></input>
    <input value={name} onChange={onName} placeholder="todo name"></input>
    <button type="submit">Submit</button>
    </form>
) 
}

export default AddTodoForm;