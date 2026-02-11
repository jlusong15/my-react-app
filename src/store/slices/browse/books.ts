import { browseApi } from "@/services/browse.service"
import { RootState } from "@/store"
import { BookDocsModel } from "@/types/browse.model"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const booksSlice = createSlice({
	name: "books",
	initialState: {
		list: [] as BookDocsModel[]
	},
	reducers: {
		setBookList: (state, action: PayloadAction<BookDocsModel[]>) => {
			state.list = action?.payload || []
		},
	},
	extraReducers: (builder) => {
		return builder.addMatcher(browseApi.endpoints.getBooks.matchFulfilled, (state, { payload }) => {
			state.list = payload || []
		})
	}
})

export const { setBookList } = booksSlice.actions
export const booksSelector = (state: RootState) => state.browse.books

export default booksSlice.reducer
