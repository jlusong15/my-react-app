import { Routes, Route } from "react-router"
import "./App.css"
import { NavLinks } from "./types/nav.model"
import Dashboard from "./pages/Dashboard"
import ToDoList from "./pages/ToDoList"
import MenuNav from "./components/MenuNav"
import BrowseBooks from "./pages/BrowseBooks"

function App() {
	return (
		<>
			<MenuNav navigation={NavLinks} />
			<Routes>
				<Route path="/" element={<Dashboard children={""} content={""} />} />
				<Route path="/to-do-list" element={<ToDoList title="To Do List" />} />
				<Route path="/browse-books" element={<BrowseBooks />} />
			</Routes>
		</>
	)
}

export default App
