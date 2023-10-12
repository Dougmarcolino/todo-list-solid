import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { API } from "../../api";
import { ITaskDTO } from "../../api/models";

export const useTodoQuery = () => {
  const queryClient = useQueryClient();

  const useTasksList = () =>
    useQuery(
      ["useTasksList"],
      ({ signal }) => API.Task.list({ signal }).response
    );

  const createTask = useMutation({
    mutationFn: (task: ITaskDTO) => {
      return API.Task.create(task);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["useTasksList"] });
    },
  });

  const removeTask = useMutation({
    mutationFn: (taskId: ITaskDTO["id"]) => {
      return API.Task.remove(taskId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["useTasksList"] });
    },
  });

  return {
    useTasksList,
    createTask,
    removeTask,
  };
};
