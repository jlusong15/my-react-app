import { combineReducers } from "@reduxjs/toolkit";
import books from './books'
import characters from './characters'

const browseSlice = combineReducers({
	books,
	characters
})

export default browseSlice