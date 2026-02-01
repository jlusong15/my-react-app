import { useState } from "react"

const ToDoList = ({ title }) => {
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
	const [form, setForm] = useState(null)

	const addItem = () => {
		setToDoList((prev) => [...prev, { id: prev?.length ? prev.length++ : 0, description: form?.description ?? "" }])
		setForm(null)
	}

	const editItem = (index) => {
		setToDoList((prev) => [...prev, { id: 4, description: "TCKT-4" }])
	}

	const removeItem = (index) => {
		const updatedList = list.filter((item) => item.id !== index)
		setToDoList(updatedList)
	}

	const handleIdChange = (e) => {
		setForm((prev) => ({ ...prev, id: e.target.value }))
	}
	const handleDescriptionChange = (e) => {
		setForm((prev) => ({ ...prev, description: e.target.value }))
	}

	console.log(form)

	return (
		<div id="to-do-list">
			<h2>{title}</h2>

			<div id="to-do-form" className="flex flex-col m-3 border p-3 rounded border-gray-600 gap-3">
				{/* <span>
					ID: <input onChange={handleIdChange} value={form?.id ?? ""} className="border rounded border-gray-600" />
				</span> */}
				<span>
					Description:
					<input
						onChange={handleDescriptionChange}
						value={form?.description ?? ""}
						className="border rounded border-gray-600 ml-1 p-2"
					/>
				</span>
				<button className="bg-green-300!" onClick={addItem}>
					ADD
				</button>
			</div>

			{/* <button onClick={() => addItem()}>Add TCKT-4</button> */}
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
