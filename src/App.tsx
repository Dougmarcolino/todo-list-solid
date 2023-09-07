import "./App.css";
import Todo from "./components/Todo/Todo";
import { TodoProvider } from "./providers";

function App() {
  return (
    <div className="bg-slate-800 w-full h-[100vh] flex items-center justify-center">
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </div>
  );
}

export default App;
