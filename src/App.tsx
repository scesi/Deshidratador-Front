import { BrowserRouter, Route, Routes } from "react-router";
import { useEffect } from "react";
import "./App.css";

import { SendSensorDataType, sensorsDataActions } from "./store/slices/sensorsData";

import NotificationsPage from "./pages/NotificationsPage/NotificationsPage";
import LayoutDashboard from "./pages/LayoutDashboard/LayoutDashboard";
import ReportsPage from "./pages/ReportsPage/ReportsPage";
import StatsPage from "./pages/StatsPage/StatsPage";
import HomePage from "./pages/HomePage/HomePage";
import { useAppDispatch } from "./hooks/store";

import { socket } from "./api/sockets";
import { SOCKET_CHANNELS } from "./types/sockets";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected');
    });
    
    socket.on('disconnect', () => {
      console.log('disconnected');
    });

    socket.on<SOCKET_CHANNELS>('send_sensor_data', (data: SendSensorDataType) => {
      console.log('sensor_data from server', data);
      dispatch(sensorsDataActions.setCurrentData(data))
    });

    socket.on<SOCKET_CHANNELS>('send_config_data', (data) => {
      console.log('config_data to server', data);
    });
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
