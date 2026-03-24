import { Route, Routes } from "react-router"
import "./App.css"
import Browse from "./pages/Browse"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard"
import Practice from "./pages/Practice"
import StepperForm from "./pages/Stepper"
import TasksPage from "./pages/Tasks"
import ToDoList from "./pages/ToDoList"

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
