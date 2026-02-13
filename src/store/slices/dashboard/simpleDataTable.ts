import { dashboardApi } from "@/services/dashboard.service"
import { RootState } from "@/store"
import { CharacterDocsModel } from "@/types/browse.model"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const simpleDataTable = createSlice({
	name: "simpleDataTable",
	initialState: {
		list: [] as CharacterDocsModel[]
	},
	reducers: {
		setSimpleDataTableList: (state, action: PayloadAction<CharacterDocsModel[]>) => {
			state.list = action?.payload || []
		},
	},
	extraReducers: (builder) => {
		return builder.addMatcher(dashboardApi.endpoints.getSimpleDataTableList.matchFulfilled, (state, { payload }) => {
			state.list = payload || []
		})
	}
})

export const { setSimpleDataTableList } = simpleDataTable.actions
export const simpleDataTableSelector = (state: RootState) => state.browse.characters

export default simpleDataTable.reducer
