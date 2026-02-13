import { dashboardApi } from "@/services/dashboard.service"
import { RootState } from "@/store"
import { CharacterModel } from "@/types/browse.model"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const integratedDataTable = createSlice({
	name: "integratedDataTable",
	initialState: {} as CharacterModel,
	reducers: {
		setIntegratedDataTableList: (state, action: PayloadAction<CharacterModel>) => {
			state = action.payload
		},
	},
	extraReducers: (builder) => {
		return builder.addMatcher(dashboardApi.endpoints.getIntegratedDataTableList.matchFulfilled, (state, { payload }) => {
			state = payload
		})
	}
})

export const { setIntegratedDataTableList } = integratedDataTable.actions
export const integratedDataTableSelector = (state: RootState) => state.browse.characters

export default integratedDataTable.reducer
