import { useContext } from "react";
import { TodoContext } from "../../providers/TodoProvider/TodoProvider";

export const useTodo = () => useContext(TodoContext);
