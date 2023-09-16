import { TodoProvider } from "./providers";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="bg-slate-800 w-full h-[100vh] flex items-center justify-center">
      <TodoProvider>
        <AppRouter />
      </TodoProvider>
    </div>
  );
}

export default App;
