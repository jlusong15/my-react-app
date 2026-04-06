import { lazy } from "react"
import { Route, Routes } from "react-router"
import "./App.css"

const Home = lazy(() => import("./pages/Home"))
const Dashboard = lazy(() => import("./pages/Dashboard"))
const TasksPage = lazy(() => import("./pages/Tasks"))
const ToDoList = lazy(() => import("./pages/ToDoList"))
const Browse = lazy(() => import("./pages/Browse"))
const StepperForm = lazy(() => import("./pages/Stepper"))
const Contact = lazy(() => import("./pages/Contact"))
const Practice = lazy(() => import("./pages/Practice"))

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/tasks" element={<TasksPage />} />
			<Route path="/to-do-list" element={<ToDoList title="To Do List" />} />
			<Route path="/browse" element={<Browse />} />
			<Route path="/stepper" element={<StepperForm />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/practice" element={<Practice />} />
		</Routes>
	)
}

export default App
