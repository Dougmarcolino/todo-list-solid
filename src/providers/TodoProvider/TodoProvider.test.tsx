import { fireEvent, render } from "@testing-library/react";
import { TodoContext, TodoProvider } from "./TodoProvider";
import { useContext } from "react";

describe("renders children correctly", () => {
  test("should render children properly", () => {
    const { getByText } = render(
      <TodoProvider>
        <div>Test Child</div>
      </TodoProvider>
    );

    const childElement = getByText("Test Child");
    expect(childElement).toBeInTheDocument();
  });
});

test("sets tasks state correctly when using setTasks", () => {
  const TestComponent = () => {
    const { tasks, setTasks } = useContext(TodoContext);
    if (setTasks === undefined) return false;
    if (tasks === undefined) return false;
    return (
      <div>
        <button
          onClick={() =>
            setTasks([
              {
                id: "1",
                taskDescription: "Test Task",
                isTaskDone: false,
                createdAt: new Date(),
              },
            ])
          }
        >
          Set Tasks
        </button>
        <span>{tasks.length}</span>
      </div>
    );
  };

  const { getByText } = render(
    <TodoProvider>
      <TestComponent />
    </TodoProvider>
  );

  const setTasksButton = getByText("Set Tasks");
  const tasksCount = getByText("0");

  expect(tasksCount).toHaveTextContent("0");

  fireEvent.click(setTasksButton);

  const updatedTasksCount = getByText("1");
  expect(updatedTasksCount).toHaveTextContent("1");
});
