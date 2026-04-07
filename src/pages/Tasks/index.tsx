import { Route, Routes } from "react-router-dom"
import TaskForm from "./TaskForm"

export default function TasksPage() {
	return (
		<Routes>
			<Route index element={<TaskForm pageTitle="Add Task" />} />
			<Route path=":id/info" element={<TaskForm pageTitle="Edit Task" />} />
		</Routes>
	)
}
