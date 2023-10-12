import { useContext, useEffect } from "react";
import { TodoContext } from "../../providers/TodoProvider/TodoProvider";
import { useTodoQuery } from "..";
import { ITaskDTO } from "../../api/models";

export const useTodo = () => {
  const { setTasks, tasks } = useContext(TodoContext);
  const { useTasksList, createTask, removeTask } = useTodoQuery();

  const { data, isLoading } = useTasksList();

  useEffect(() => {
    setTasks && setTasks(data?.data ?? []);
  }, [setTasks, data]);

  const onCreateTask = (taskName: string) => {
    const task: ITaskDTO = {
      taskDescription: taskName,
      isTaskDone: false,
      createdAt: new Date(),
      id: `taskId_${new Date().getTime()}`,
    };
    createTask.mutate(task);
  };

  const onRemoveTask = (taskId: ITaskDTO["id"]) => {
    removeTask.mutate(taskId);
  };

  return {
    setTasks,
    tasks,
    onCreateTask,
    onRemoveTask,
    isLoading,
  };
};
