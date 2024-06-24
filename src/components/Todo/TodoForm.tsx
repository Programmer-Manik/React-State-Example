import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
    const {state, dispatch} = useContext(TodoContext)
    console.log(state)
    const [Task, setTask] = useState('')
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        // console.log(e.target)
        const todo = {
            id:Math.random().toString(35).substring(2, 7),
            title:Task,
            isComplete: false,
        }
        // console.log(todo)
        dispatch({type:'addTodo', payload:todo})
    };
  return (
    <div>
        <h1>Add Todo</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="Todo">Task</label>
            <input onBlur={(e) => setTask(e.target.value)} className="border border-purple-300 m-10" type="text" name="todo" id="dodo" placeholder="Enter Todo" />
            <button className="bg-purple-500 px-5 py-2 rounded-md"  type="submit">Add Todo</button>
        </form>
    </div>
  );
};

export default TodoForm;