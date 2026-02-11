import { browseApi } from "@/services/browse.service"
import { RootState } from "@/store"
import { CharacterDocsModel } from "@/types/browse.model"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const charactersSlice = createSlice({
	name: "characters",
	initialState: {
		list: [] as CharacterDocsModel[]
	},
	reducers: {
		setCharacterList: (state, action: PayloadAction<CharacterDocsModel[]>) => {
			state.list = action?.payload || []
		},
	},
	extraReducers: (builder) => {
		return builder.addMatcher(browseApi.endpoints.getCharacters.matchFulfilled, (state, { payload }) => {
			state.list = payload || []
		})
	}
})

export const { setCharacterList } = charactersSlice.actions
export const booksSelector = (state: RootState) => state.browse.characters

export default charactersSlice.reducer
