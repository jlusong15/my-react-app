import { configureStore } from "@reduxjs/toolkit"
import counter from "./slices/counter"
import browse from "./slices/browse"

export const store = configureStore({
	reducer: {
		counter,
		browse
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch