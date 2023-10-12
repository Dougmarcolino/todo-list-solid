import { AxiosRequestConfig } from "axios";
import { appAxios } from "../../axios";
import { ITaskDTO } from "../../models/dtos/ITaskDTO";

export const URLS = {
  create: "/tasks",
  list: "/tasks",
  update: (taskId: ITaskDTO["id"]) => `/tasks/${taskId}`,
  delete: (taskId: ITaskDTO["id"]) => `/tasks/${taskId}`,
};

export const list = (axiosRequestConfig?: AxiosRequestConfig) => {
  const aborter = new AbortController();

  const response = appAxios
    .get<ITaskDTO[]>(URLS.list, {
      signal: aborter.signal,
      ...axiosRequestConfig,
    })
    .then((res) => res);

  return {
    abort: () => aborter.abort(),
    response,
  };
};

export const create = (
  task: ITaskDTO,
  axiosRequestConfig?: AxiosRequestConfig
) => {
  const aborter = new AbortController();

  const response = appAxios
    .post<ITaskDTO>(URLS.create, task, {
      signal: aborter.signal,
      ...axiosRequestConfig,
    })
    .then((res) => res);

  return response;
};

export const remove = (
  taskId: ITaskDTO["id"],
  axiosRequestConfig?: AxiosRequestConfig
) => {
  const aborter = new AbortController();

  const response = appAxios
    .delete<ITaskDTO>(URLS.delete(taskId), {
      signal: aborter.signal,
      ...axiosRequestConfig,
    })
    .then((res) => res);

  return response;
};

export const update = (
  taskId: ITaskDTO["id"],
  isTaskDone: ITaskDTO["isTaskDone"],
  axiosRequestConfig?: AxiosRequestConfig
) => {
  const aborter = new AbortController();

  const response = appAxios
    .patch<ITaskDTO>(
      URLS.update(taskId),
      { isTaskDone },
      {
        signal: aborter.signal,
        ...axiosRequestConfig,
      }
    )
    .then((res) => res);

  return response;
};
