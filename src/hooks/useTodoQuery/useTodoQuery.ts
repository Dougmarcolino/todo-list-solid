import { useQuery } from "@tanstack/react-query";
import { API } from "../../api";

export const useTodoQuery = () => {
  const useTasksList = () =>
    useQuery(
      ["useTasksList"],
      ({ signal }) => API.Task.list({ signal }).response
    );

  return {
    useTasksList,
  };
};
