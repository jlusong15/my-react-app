import { ToDoListInitial, ToDoListModel } from "@/types/form.model"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ButtonLoader from "@/components/Button"
import { Ban, LoaderCircle, Pencil, Save, X } from "lucide-react"
import { cn } from "@/lib/utils"

const ToDoList = ({ title }: { title: string }) => {
	const [isLoading, setLoading] = useState<boolean>(false)
	const [isAdd, setIsAdd] = useState<boolean>(false)
	const [isEdit, setIsEdit] = useState<boolean>(false)
	const [showForm, setShowForm] = useState<boolean>(false)
	const [list, setToDoList] = useState(ToDoListInitial)
	const [form, setForm] = useState<ToDoListModel | null>(null)

	const saveItem = () => {
		const description = form?.description?.trim() ?? ""
		if (!description) {
			return
		}
		setLoading(true)
		const saveFn = () => {
			if (isAdd) {
				setToDoList((prev) => [...prev, { id: prev?.length ? prev.length + 1 : 0, description }])
			} else {
				setToDoList((prev) => [...prev]?.map((i) => (i?.id === form?.id ? { id: i?.id, description } : i)))
			}
			setForm(null)
			toggleShowForm(false)
			setLoading(false)
		}
		setTimeout(() => {
			saveFn()
		}, 6000)
	}

	const editItem = (id: number) => {
		const data = [...list]?.find((i) => i?.id === id)
		if (data) {
			setIsEdit(true)
			setForm(data)
		}
	}

	const removeItem = (id: number) => {
		const updatedList = list?.filter((item) => item.id !== id) || []
		setToDoList(updatedList)
		setForm(null)
	}

	const cancelEdit = () => {
		toggleShowForm(false)
		setIsEdit(false)
		setForm(null)
	}

	const handleDescriptionChange = (e: { target: { value: string } }) => {
		const value: string = e?.target?.value || ""
		setForm((prev) => (prev ? { id: prev?.id, description: value } : { id: 0, description: value }))
	}

	const toggleShowForm = (show: boolean) => {
		setForm(null)
		setShowForm(show)
		if (!show) {
			setIsAdd(false)
			setIsEdit(false)
		}
	}

	return (
		<div id="to-do-list" className="w-full px-5 mt-3">
			<h1 className="font-semibold p-3 text-xl w-full">{title}</h1>
			<hr className="mt-2" />

			<ul className="w-full mt-2">
				{list.map((ticket) => {
					return (
						<li
							key={ticket?.id}
							className={cn("flex flex-row justify-between items-center hover:bg-gray-50 rounded p-1", {
								"bg-gray-50": isEdit && form?.id === ticket.id,
							})}
						>
							<div>
								{isEdit && form?.id === ticket.id ? (
									<Input
										onChange={handleDescriptionChange}
										value={form?.description ?? ""}
										disabled={isLoading}
										className="bg-white w-sm"
									></Input>
								) : (
									<span className="px-3 py-2 inline-block">{ticket?.description}</span>
								)}
							</div>
							{isLoading && isEdit && form?.id === ticket.id ? (
								<LoaderCircle className="animate-spin" />
							) : isEdit && form?.id === ticket.id ? (
								<div>
									<Button
										onClick={saveItem}
										size="icon-sm"
										variant="ghost"
										className="p-0"
										disabled={showForm || isLoading}
									>
										<Save />
									</Button>
									<Button onClick={cancelEdit} size="icon-sm" variant="ghost" disabled={showForm || isLoading}>
										<Ban />
									</Button>
								</div>
							) : (
								<div>
									<Button
										onClick={(e) => editItem(ticket?.id)}
										size="icon-sm"
										variant="ghost"
										disabled={showForm || isEdit}
									>
										<Pencil />
									</Button>
									<Button
										onClick={(e) => removeItem(ticket?.id)}
										size="icon-sm"
										variant="ghost"
										className="p-0"
										disabled={showForm || isEdit}
									>
										<X />
									</Button>
								</div>
							)}
						</li>
					)
				})}
			</ul>

			{showForm && (
				<div id="to-do-form" className="w-full flex flex-col p-3 rounded border gap-3 mt-3">
					<span>
						Description:
						<Input onChange={handleDescriptionChange} value={form?.description ?? ""} disabled={isLoading}></Input>
					</span>
					<div className="flex flex-row gap-1 my-1">
						<ButtonLoader onClick={saveItem} className="w-1/2" isLoading={isLoading}>
							{isAdd ? "Add" : "Save"}
						</ButtonLoader>
						<Button onClick={() => toggleShowForm(false)} className="w-1/2" variant="outline" disabled={isLoading}>
							Cancel
						</Button>
					</div>
				</div>
			)}

			{!showForm && !isEdit && (
				<Button
					onClick={() => {
						toggleShowForm(true)
						setIsAdd(true)
					}}
					className="mt-2 float-right"
				>
					Add Item
				</Button>
			)}
		</div>
	)
}

export default ToDoList
