import { RootState } from "@/store"
import { StepperForm3 } from "@/types/stepper.model"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const step3Slice = createSlice({
	name: "step3",
	initialState: {} as StepperForm3,
	reducers: {
		setStep3Form: (state, action: PayloadAction<StepperForm3>) => {
			state = action?.payload
		},
	},
})

export const { setStep3Form } = step3Slice.actions
export const step3Selector = (state: RootState) => state.stepper.step3

export default step3Slice.reducer
