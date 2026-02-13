import { combineReducers } from "@reduxjs/toolkit";
import simpleDataTable from './simpleDataTable'
import integratedDataTable from './integratedDataTable'

const dashboardSlice = combineReducers({
	simpleDataTable,
	integratedDataTable
})

export default dashboardSlice