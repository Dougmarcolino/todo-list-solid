import { ReactNode, createContext, useState } from "react";
import { ITaskDTO } from "../../api/models/dtos/ITaskDTO";

type ITodoContext = {
  tasks?: ITaskDTO[];
  setTasks?: React.Dispatch<React.SetStateAction<ITaskDTO[]>>;
};

type ITodoProviderProps = {
  children: ReactNode;
};

export const TodoContext = createContext<ITodoContext>({});

export const TodoProvider = ({ children }: ITodoProviderProps) => {
  const [tasks, setTasks] = useState<ITaskDTO[]>([]);

  return (
    <TodoContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TodoContext.Provider>
  );
};
