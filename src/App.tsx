import { Routes, Route } from "react-router"
import "./App.css"
import { NavLinks } from "./types/nav.model"
import Dashboard from "./pages/Dashboard"
import ToDoList from "./pages/ToDoList"
import MenuNav from "./components/MenuNav"
import Browse from "./pages/Browse"
import StepperForm from "./pages/Stepper"
import Contact from "./pages/Contact"

function App() {
	return (
		<>
			<MenuNav navigation={NavLinks} />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/to-do-list" element={<ToDoList title="To Do List" />} />
				<Route path="/browse" element={<Browse />} />
				<Route path="/stepper" element={<StepperForm />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	)
}

export default App
