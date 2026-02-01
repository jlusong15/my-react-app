import { Routes, Route } from "react-router"
import "./App.css"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import ToDoList from "./pages/ToDoList"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/to-do-list" element={<ToDoList title="To Do List" />} />
			</Routes>
		</>
	)
}

export default App
