import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import LayoutDashboard from "./pages/LayoutDashboard/LayoutDashboard";
import ReportsPage from "./pages/ReportsPage/ReportsPage";
import StatsPage from "./pages/StatsPage/StatsPage";
import NotificationsPage from "./pages/NotificationsPage/NotificationsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDashboard/>}>
          <Route index element={<HomePage/>}/>
          <Route path="reportes" element={<ReportsPage/>}/>
          <Route path="estadisticas" element={<StatsPage/>}/>
          <Route path="notificaciones" element={<NotificationsPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
