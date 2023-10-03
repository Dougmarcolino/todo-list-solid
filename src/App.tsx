import { TodoProvider, ReactQueryProvider } from "./providers";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="bg-slate-800 w-full h-[100vh] flex items-center justify-center">
      <ReactQueryProvider>
        <TodoProvider>
          <AppRouter />
        </TodoProvider>
      </ReactQueryProvider>
    </div>
  );
}

export default App;
