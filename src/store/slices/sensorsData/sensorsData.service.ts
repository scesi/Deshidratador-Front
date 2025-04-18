import { Dispatch } from "@reduxjs/toolkit";
import { sensorsDataActions } from "./sensorsData.slice";
import { sensorsData } from "../../../types/SensorsData";
import sensorData from '../../../assets/data/sensors.json';

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

// Función para formatear la fecha
const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short', // "Jan", "Feb", etc.
      day: 'numeric'  // "1", "2", ..., "31"
    }).format(date);
  };
  
export const getAllData = () => async (dispatch: Dispatch) => {
    try {
        // llamada a ep
        dispatch(sensorsDataActions.setIsLoading(true));
        
        const backendData = sensorData as BackendResponse;        
        // Transformación de datos
        const transformedData: sensorsData[] = backendData.data.splice(0, 350).map(item => ({
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