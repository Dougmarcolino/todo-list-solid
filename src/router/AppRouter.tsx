import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { TodoView } from "../views";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/todo" />} />
        <Route path="/todo" element={<TodoView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
