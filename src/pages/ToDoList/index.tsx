import { ToDoListState } from "@/types/form.model"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Pencil, Save, X } from "lucide-react"

const ToDoList = ({ title }: { title: string }) => {
	const [isAdd, setIsAdd] = useState<boolean>(false)
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
		if (isAdd) {
			setToDoList((prev) => [...prev, { id: prev?.length ? prev.length+1 : 0, description: form?.description ?? "" }])
		} else {
			setToDoList((prev) =>
				[...prev]?.map((i) => (i?.id === form?.id ? { id: i?.id, description: form?.description ?? "" } : i)),
			)
		}
		setForm(null)
		toggleShowForm(false)
	}

	const editItem = (id: number) => {
		const data = [...list]?.find((i) => i?.id === id)
		if (data) {
			toggleShowForm(true)
			setForm(data)
		}
	}

	const removeItem = (id: number) => {
		const updatedList = list?.filter((item) => item.id !== id) || []
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
		if (!show) {
			setIsAdd(false)
		}
	}

	// console.log(form)
	// console.table(list)
	
	return (
		<div id="to-do-list" className="w-80">
			<h2 className="font-semibold">{title}</h2>

			{showForm && (
				<div id="to-do-form" className="w-full flex flex-col p-3 rounded border gap-3">
					<span>
						Description:
						<Input onChange={handleDescriptionChange} value={form?.description ?? ""}></Input>
					</span>
					<div className="flex flex-row gap-1 my-1">
						<Button onClick={saveItem} className="w-1/2">
							{isAdd ? "Add" : "Save"}
						</Button>
						<Button onClick={() => toggleShowForm(false)} className="w-1/2" variant="outline">
							Cancel
						</Button>
					</div>
				</div>
			)}

			<ul className="w-full mt-2">
				{list.map((ticket) => {
					return (
						<li key={ticket?.id} className="flex flex-row justify-between hover:bg-gray-100 rounded p-1">
							<div>{ticket?.description}</div>
							<div>
								<Button onClick={(e) => removeItem(ticket?.id)} size="icon-xs" variant="ghost" className="p-0">
									<X />
								</Button>
								<Button onClick={(e) => editItem(ticket?.id)} size="icon-xs" variant="ghost">
									<Pencil />
								</Button>
							</div>
						</li>
					)
				})}
			</ul>

			{!showForm && (
				<Button
					onClick={() => {
						toggleShowForm(true)
						setIsAdd(true)
					}}
					className="mt-2"
				>
					Add new Item
				</Button>
			)}
		</div>
	)
}

export default ToDoList
