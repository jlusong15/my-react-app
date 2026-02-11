import { combineReducers } from "@reduxjs/toolkit";
import step1 from './step1'
import step2 from './step2'
import step3 from './step3'

const stepperSlice = combineReducers({
	step1,
	step2,
	step3
})

export default stepperSlice