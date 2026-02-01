import { ToDoListState } from "@/types/form.model"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const ToDoList = ({ title }: { title: string }) => {
	const [list, setToDoList] = useState([
		{
			id: 1,
			description: "TCKT-1",
		},
		{
			id: 2,
			description: "TCKT-2",
		},
		{
			id: 3,
			description: "TCKT-3",
		},
	])
	const [form, setForm] = useState<ToDoListState | null>(null)

	const addItem = () => {
		setToDoList((prev) => [...prev, { id: prev?.length ? prev.length++ : 0, description: form?.description ?? "" }])
		setForm(null)
	}

	const editItem = (_index: number) => {
		// @@@TODO
		setToDoList((prev) => [...prev, { id: 4, description: "TCKT-4" }])
	}

	const removeItem = (index: number) => {
		const updatedList = list.filter((item) => item.id !== index)
		setToDoList(updatedList)
	}

	const handleDescriptionChange = (e: { target: { value: string } }) => {
		const value: string = e?.target?.value || ""
		if (value) {
			setForm((prev) => (prev ? { id: prev?.id, description: value } : { id: 0, description: value }))
		}
	}

	return (
		<div id="to-do-list">
			<h2>{title}</h2>

			<div id="to-do-form" className="flex flex-col m-3 border p-3 rounded border-gray-600 gap-3">
				<span>
					Description:
					<Input onChange={handleDescriptionChange} value={form?.description ?? ""}></Input>
				</span>
				<Button onClick={addItem}>Add</Button>
			</div>

			<ul>
				{list.map((tickets) => {
					return (
						<li key={tickets?.id}>
							{tickets?.description} <i onClick={(e) => removeItem(tickets?.id)}>x</i>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default ToDoList
