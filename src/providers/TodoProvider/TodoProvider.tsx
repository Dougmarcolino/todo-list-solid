import { ReactNode, createContext, useState } from "react";

type ITodoContext = {
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};

type ITodoProviderProps = {
  children: ReactNode;
};

export const TodoContext = createContext<ITodoContext>({});

export const TodoProvider = ({ children }: ITodoProviderProps) => {
  const [value, setValue] = useState<string>("");

  return (
    <TodoContext.Provider value={{ value, setValue }}>
      {children}
    </TodoContext.Provider>
  );
};
