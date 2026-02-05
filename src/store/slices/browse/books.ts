import { RootState } from "@/store"
import { BookDocsModel } from "@/types/browse.model"
import { createSlice } from "@reduxjs/toolkit"

const booksSlice = createSlice({
	name: "books",
	initialState: {
		list: [] as BookDocsModel[]
	},
	reducers: {
		setBookList: (state, action) => {
			state.list = action?.payload || []
		},
	},
})

export const { setBookList } = booksSlice.actions
export const booksSelector = (state: RootState) => state.browse.books

export default booksSlice.reducer
