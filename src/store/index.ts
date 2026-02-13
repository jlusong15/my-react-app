import { configureStore } from '@reduxjs/toolkit';
import api from '@/lib/api';
import browse from "./slices/browse"
import stepper from "./slices/stepper"
import dashboard from "./slices/dashboard"

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		browse,
		stepper,
		dashboard
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
