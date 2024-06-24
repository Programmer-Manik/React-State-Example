import { createContext } from "react";

type TodoProviderProps = {
    children: React.ReactNode;
}

export const TodoContext = createContext(undefined)

const TodoProvider = ({children}:TodoProviderProps) => {
    const values = {
        todoTitle: "Todo Title",
    }
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
};

export default TodoProvider;