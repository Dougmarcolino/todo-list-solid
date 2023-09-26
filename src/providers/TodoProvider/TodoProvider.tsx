import { ReactNode, createContext, useState } from "react";

type ITask = {
  id: string;
  taskDescription: string;
  isTaskDone: boolean;
  createdAt: Date;
};

type ITodoContext = {
  tasks?: ITask[];
  setTasks?: React.Dispatch<React.SetStateAction<ITask[]>>;
};

type ITodoProviderProps = {
  children: ReactNode;
};

export const TodoContext = createContext<ITodoContext>({});

export const TodoProvider = ({ children }: ITodoProviderProps) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <TodoContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TodoContext.Provider>
  );
};
