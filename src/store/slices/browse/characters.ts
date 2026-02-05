import { RootState } from "@/store"
import { CharacterDocsModel } from "@/types/browse.model"
import { createSlice } from "@reduxjs/toolkit"

const charactersSlice = createSlice({
	name: "characters",
	initialState: {
		list: [] as CharacterDocsModel[]
	},
	reducers: {
		setCharacterList: (state, action) => {
			state.list = action?.payload || []
		},
	},
})

export const { setCharacterList } = charactersSlice.actions
export const booksSelector = (state: RootState) => state.browse.characters

export default charactersSlice.reducer
