import { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
    const {todoTitle} = useContext(TodoContext)
    console.log(todoTitle)
  return (
    
  );
};

export default TodoForm;