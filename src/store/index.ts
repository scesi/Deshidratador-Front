import { configureStore } from "@reduxjs/toolkit";
import { sensorsDataReducer } from "./slices/sensorsData";
import { temperatureDataReducer } from "./slices/temperatureData/temperatureData.slice";

export const store = configureStore({
	reducer: {
		sensorsData: sensorsDataReducer,
		temperatureData: temperatureDataReducer,
	},
	
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;