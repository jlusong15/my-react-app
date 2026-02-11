import { RootState } from "@/store"
import { StepperForm2 } from "@/types/stepper.model"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const step2Slice = createSlice({
	name: "step2",
	initialState: {},
	reducers: {
		setStep2Form: (state, action: PayloadAction<StepperForm2>) => {
			state = action?.payload
		},
	},
})

export const { setStep2Form } = step2Slice.actions
export const step2Selector = (state: RootState) => state.stepper.step2

export default step2Slice.reducer
