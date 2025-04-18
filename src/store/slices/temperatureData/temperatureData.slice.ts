import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { temperatureData } from "../../../types/temperatureData";

type SensorsDataSliceState = {
    data: temperatureData[]
    isLoading: boolean;
    success: boolean;
    message: string | null
}

const initialState: SensorsDataSliceState = {
    data: [],
    isLoading:false,
    success: true,
    message: null
}

export const TemperatureDataSlice = createSlice({
    name: 'temperatureData',
    initialState, 
    reducers: {
        setData: (state, action: PayloadAction<temperatureData[]>) => {
            state.data = action.payload
        },
        setIsLoading: (state, action : PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }, 
        setMessage: (state, action: PayloadAction<string | null>) => {
            state.message = action.payload
        }
    }
})

export const temperatureDataActions = TemperatureDataSlice.actions

export const temperatureDataReducer = TemperatureDataSlice.reducer