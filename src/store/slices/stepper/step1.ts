import { RootState } from "@/store"
import { StepperForm1 } from "@/types/stepper.model"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const step1Slice = createSlice({
	name: "step1",
	initialState: {
		formValue: {} as StepperForm1,
		isValid: false
	},
	reducers: {
		setStep1Form: (state, action: PayloadAction<StepperForm1>) => {
			state.formValue = action?.payload
		},
		setStep1Validity: (state, action: PayloadAction<boolean>) => {
			state.isValid = action?.payload ?? false
		},
	},
})

export const { setStep1Form, setStep1Validity } = step1Slice.actions
export const step1Selector = (state: RootState) => state.stepper.step1

export default step1Slice.reducer
