import { Routes, Route } from "react-router"
import "./App.css"
import { NavLinks } from "./types/nav.model"
import Dashboard from "./pages/Dashboard"
import ToDoList from "./pages/ToDoList"
import MenuNav from "./components/MenuNav"
import Browse from "./pages/Browse"
import StepperForm from "./pages/Stepper"
import Contact from "./pages/Contact"
import Practice from "./pages/Practice"
import TasksPage from "./pages/Tasks"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/tasks" element={<TasksPage />} />
				<Route path="/to-do-list" element={<ToDoList title="To Do List" />} />
				<Route path="/browse" element={<Browse />} />
				<Route path="/stepper" element={<StepperForm />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/practice" element={<Practice />} />
			</Routes>
		</>
	)
}

export default App
