import { RootState } from "@/store"
import { StepperForm2 } from "@/types/stepper.model"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const step2Slice = createSlice({
	name: "step2",
	initialState: {
		formValue: {} as StepperForm2,
		isValid: false
	},
	reducers: {
		setStep2Form: (state, action: PayloadAction<StepperForm2>) => {
			state.formValue = action?.payload
		},
		setStep2Validity: (state, action: PayloadAction<boolean>) => {
			state.isValid = action?.payload ?? false
		},
		resetStep2Form: (state) => {
			state = {
				formValue: {} as StepperForm2,
				isValid: false
			}
		},
	},
})

export const { setStep2Form, setStep2Validity, resetStep2Form } = step2Slice.actions
export const step2Selector = (state: RootState) => state.stepper.step2

export default step2Slice.reducer
