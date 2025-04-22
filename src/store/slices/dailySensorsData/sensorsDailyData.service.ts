import { Dispatch } from "@reduxjs/toolkit";
import { temperatureData } from "../../../types/temperatureData";
import { formatTime } from "../../../utils";
import { sensorsDailyDataActions } from "./sensorsDailyData.slice";
import api from "../../../api/axios";
import { HumidityData } from "../../../types/humidityData";
import { NotificationsData } from "../../../types/notificationsData";

interface BackendSensorData {
  id: number;
  temperature: number;
  humidity: number;
  createdAt: string;
  updatedAt: string;
}
interface BackendNotificationData {
  id: number;
  detail: string;
  type: string;
  state: string;
  sensorRecordId: number;
  createdAt: string;
  updatedAt: string;
  sensor: BackendSensorData
}
interface BackendResponse<T> {
  data: T[];
  message: string;
  ok: boolean;
}

export const getTemperatureData = () => async (dispatch: Dispatch) => {
  try {
    // llamada a ep
    dispatch(sensorsDailyDataActions.clean())
    dispatch(sensorsDailyDataActions.setIsLoading(true));

    const response = await api.get("/sensors");
    const backendData: BackendResponse<BackendSensorData> = response.data;
    
    // const backendData = sensorData as BackendResponse;

    const transformedData: temperatureData[] = backendData.data.map((item) => ({
      hour: formatTime(item.createdAt),
      temperature: item.temperature,
    }));

    dispatch(sensorsDailyDataActions.setTempData(transformedData));
  } catch (error) {
    console.error("Error fetching sensor data:", error);
  } finally {
    dispatch(sensorsDailyDataActions.setIsLoading(false));
  }
};

export const getHumidityData = () => async (dispatch: Dispatch) => {
  try {
    // llamada a ep
    dispatch(sensorsDailyDataActions.clean())
    dispatch(sensorsDailyDataActions.setIsLoading(true));

    const response = await api.get("/sensors");
    const backendData: BackendResponse<BackendSensorData> = response.data;
    
    // const backendData = sensorData as BackendResponse;

    const transformedData: HumidityData[] = backendData.data.map((item) => ({
      hour: formatTime(item.createdAt),
      humidity: item.humidity,
    }));

    dispatch(sensorsDailyDataActions.setHumiData(transformedData));
  } catch (error) {
    console.error("Error fetching sensor data:", error);
  } finally {
    dispatch(sensorsDailyDataActions.setIsLoading(false));
  }
}

export const getAllNotifications = () => async (dispatch: Dispatch) => {
  try {
    dispatch(sensorsDailyDataActions.clean())
    dispatch(sensorsDailyDataActions.setIsLoading(true));

    const response = await api.get("/notificacion");
    const backendData: BackendResponse<BackendNotificationData> = response.data;
    
    const transformedData: NotificationsData[] = backendData.data.map((item) => ({
      id: item.id,
      detail: item.detail,
      type: item.type,
      state: item.state, 
      sensorRecordId: item.sensorRecordId,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    }));

    dispatch(sensorsDailyDataActions.setNotificationsData(transformedData))
  } catch (error) {
    console.error("Error fetching notifications data:", error);
  }finally{
    dispatch(sensorsDailyDataActions.setIsLoading(false))
  }
}