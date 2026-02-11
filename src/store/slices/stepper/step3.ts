import { RootState } from "@/store"
import { StepperForm3 } from "@/types/stepper.model"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const step3Slice = createSlice({
	name: "step3",
	initialState: {
		formValue: {} as StepperForm3,
		isValid: false
	},
	reducers: {
		setStep3Form: (state, action: PayloadAction<StepperForm3>) => {
			state.formValue = action?.payload
		},
		setStep3Validity: (state, action: PayloadAction<boolean>) => {
			state.isValid = action?.payload ?? false
		},
		resetStep3Form: (state) => {
			state = {
				formValue: {} as StepperForm3,
				isValid: false
			}
		},
	},
})

export const { setStep3Form, setStep3Validity, resetStep3Form } = step3Slice.actions
export const step3Selector = (state: RootState) => state.stepper.step3

export default step3Slice.reducer
