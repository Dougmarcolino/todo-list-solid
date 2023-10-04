import { useContext, useEffect } from "react";
import { TodoContext } from "../../providers/TodoProvider/TodoProvider";
import { useTodoQuery } from "..";

export const useTodo = () => {
  const { setTasks, tasks } = useContext(TodoContext);

  const { useTasksList } = useTodoQuery();
  const { data, isLoading } = useTasksList();

  useEffect(() => {
    setTasks && setTasks(data?.data ?? []);
  }, [setTasks, data]);

  return {
    setTasks,
    tasks,
    isLoading,
  };
};
