import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { temperatureData } from "../../../types/temperatureData";
import { HumidityData } from "../../../types/humidityData";
import { NotificationsData } from "../../../types/notificationsData";

type SensorsDataSliceState = {
    tempData: temperatureData[]
    humiData: HumidityData[]
    notifications: NotificationsData[]
    isLoading: boolean;
    success: boolean;
    message: string | null
}

const initialState: SensorsDataSliceState = {
    tempData: [],
    humiData: [],
    notifications: [],
    isLoading:false,
    success: true,
    message: null
}

export const sensorsDailyDataSlice = createSlice({
    name: 'sensorsDailyData',
    initialState, 
    reducers: {
        setHumiData: (state, action: PayloadAction<HumidityData[]>) => {
            state.humiData = action.payload
        },
        setTempData: (state, action: PayloadAction<temperatureData[]>) => {
            state.tempData = action.payload
        },
        setNotificationsData: (state, action: PayloadAction<NotificationsData[]>) => {
            state.notifications = action.payload
        },
        setIsLoading: (state, action : PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }, 
        setMessage: (state, action: PayloadAction<string | null>) => {
            state.message = action.payload
        },
        clean: (state) => {
            state.isLoading = false   
            state.success = true
            state.message = null
        }
    }
})

export const sensorsDailyDataActions = sensorsDailyDataSlice.actions

export const sensorsDailyDataReducer = sensorsDailyDataSlice.reducer