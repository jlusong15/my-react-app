import { ToDoListState } from "@/types/form.model"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const ToDoList = ({ title }: { title: string }) => {
	const [showForm, setShowForm] = useState<boolean>(false)
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

	const saveItem = () => {
		setToDoList((prev) => [...prev, { id: prev?.length ? prev.length++ : 0, description: form?.description ?? "" }])
		setForm(null)
		toggleShowForm(false)
	}

	const editItem = (_index: number) => {
		// @@@TODO
		setToDoList((prev) => [...prev, { id: 4, description: "TCKT-4" }])
	}

	const removeItem = (index: number) => {
		const updatedList = list.filter((item) => item.id !== index)
		setToDoList(updatedList)
		setForm(null)
	}

	const handleDescriptionChange = (e: { target: { value: string } }) => {
		const value: string = e?.target?.value || ""
		if (value) {
			setForm((prev) => (prev ? { id: prev?.id, description: value } : { id: 0, description: value }))
		}
	}

	const toggleShowForm = (show: boolean) => {
		setForm(null)
		setShowForm(show)
	}

	return (
		<div id="to-do-list">
			<h2 className="font-semibold">{title}</h2>

			{showForm && (
				<div id="to-do-form" className="flex flex-col m-3 p-3 pb-4 rounded border gap-3">
					<span>
						Description:
						<Input onChange={handleDescriptionChange} value={form?.description ?? ""}></Input>
					</span>
					<div className="flex flex-row gap-1">
						<Button onClick={saveItem} className="w-1/2">Add</Button>
						<Button onClick={() => toggleShowForm(false)} className="w-1/2" variant="outline">Cancel</Button>
					</div>
				</div>
			)}

			<ul>
				{list.map((tickets) => {
					return (
						<li key={tickets?.id}>
							{tickets?.description} <i onClick={(e) => removeItem(tickets?.id)}>x</i>
						</li>
					)
				})}
			</ul>

			{!showForm && (
				<Button onClick={() => toggleShowForm(true)} className="mt-2">
					Add new Item
				</Button>
			)}
		</div>
	)
}

export default ToDoList
