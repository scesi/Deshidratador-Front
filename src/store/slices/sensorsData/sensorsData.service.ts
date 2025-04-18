import { Dispatch } from "@reduxjs/toolkit";
import { sensorsDataActions } from "./sensorsData.slice";
import { sensorsData } from "../../../types/sensorsData";
import { formatDate } from "../../../utils";
import api from "../../../api/axios";

interface BackendSensorData {
  id: number;
  temperature: number;
  humidity: number;
  createdAt: string;
  updatedAt: string;
}

interface BackendResponse {
  data: BackendSensorData[];
  message: string;
  ok: boolean;
}

export const getAllData = () => async (dispatch: Dispatch) => {
  try {
    // llamada a ep
    dispatch(sensorsDataActions.setIsLoading(true));

    const response = await api.get("/sensors");
    const backendData: BackendResponse = response.data;

    const transformedData: sensorsData[] = backendData.data.map((item) => ({
      temperature: item.temperature,
      humidity: item.humidity,
      date: formatDate(item.createdAt),
    }));

    dispatch(sensorsDataActions.setData(transformedData));
  } catch (error) {
    console.error("Error fetching sensor data:", error);
    dispatch(sensorsDataActions.setMessage("Failed to load sensor data"));
  } finally {
    dispatch(sensorsDataActions.setIsLoading(false));
  }
};
