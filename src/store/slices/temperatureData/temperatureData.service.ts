import { Dispatch } from "@reduxjs/toolkit";
import { temperatureDataActions } from "./temperatureData.slice";
import { temperatureData } from "../../../types/temperatureData";
import { formatTime } from "../../../utils";
import sensorData from "../../../assets/data/sensors.json";

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

export const getTemperatureData = () => async (dispatch: Dispatch) => {
  try {
    // llamada a ep
    dispatch(temperatureDataActions.setIsLoading(true));

    const backendData = sensorData as BackendResponse;

    const transformedData: temperatureData[] = backendData.data.map((item) => ({
      hour: formatTime(item.createdAt),
      temperature: item.temperature,
    }));

    console.log("transformedData", transformedData);
    dispatch(temperatureDataActions.setData(transformedData));
  } catch (error) {
    console.error("Error fetching sensor data:", error);
  } finally {
    dispatch(temperatureDataActions.setIsLoading(false));
  }
};
