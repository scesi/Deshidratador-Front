import { Dispatch } from "@reduxjs/toolkit";
import { sensorsDataActions } from "./sensorsData.slice";
import { sensorsData } from "../../../types/sensorsData";
import sensorData from '../../../assets/data/sensors.json';
import { formatDate } from "../../../utils";

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
        const backendData = JSON.parse(JSON.stringify(sensorData)) as BackendResponse;

        const transformedData: sensorsData[] = await backendData.data.map(item => ({
          temperature: item.temperature,
          humidity: item.humidity,
          date: formatDate(item.createdAt)
        }));

        dispatch(sensorsDataActions.setData(transformedData));
    } catch (error) {
        console.error("Error fetching sensor data:", error);
    }finally{
        dispatch(sensorsDataActions.setIsLoading(false));
    }
}