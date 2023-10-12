import { useContext, useEffect } from "react";
import { TodoContext } from "../../providers/TodoProvider/TodoProvider";
import { useTodoQuery } from "..";
import { ITaskDTO } from "../../api/models";

export const useTodo = () => {
  const { setTasks, tasks } = useContext(TodoContext);
  const { useTasksList, createTask, removeTask, updateTask } = useTodoQuery();

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
    const changedTasks = tasks?.filter((task) => task.id !== taskId);

    setTasks && setTasks(changedTasks as ITaskDTO[]);
    removeTask.mutate(taskId);
  };

  const onCheckTask = (
    taskId: ITaskDTO["id"],
    isChecked: ITaskDTO["isTaskDone"]
  ) => {
    const changedTasks = tasks?.map((task) =>
      task.id === taskId ? { ...task, isTaskDone: isChecked } : task
    );

    setTasks && setTasks(changedTasks as ITaskDTO[]);
    updateTask.mutate({ taskId, isTaskDone: isChecked });
  };

  return {
    setTasks,
    tasks,
    onCreateTask,
    onRemoveTask,
    onCheckTask,
    isLoading,
  };
};
