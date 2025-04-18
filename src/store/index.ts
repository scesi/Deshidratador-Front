import { configureStore } from "@reduxjs/toolkit";
import { sensorsDataReducer } from "./slices/sensorsData";

export const store = configureStore({
	reducer: {
		sensorsData: sensorsDataReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;