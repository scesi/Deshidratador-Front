import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sensorsData } from "../../../types/SensorsData";

type SensorsDataSliceState = {
    data: Array<sensorsData>
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

export const SensorsDataSlice = createSlice({
    name: 'sensorsData',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<sensorsData[]>) => {
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

export const sensorsDataActions = SensorsDataSlice.actions

export const sensorsDataReducer = SensorsDataSlice.reducer