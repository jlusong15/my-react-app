import { CollapsibleSection } from "@/components/CollapsibleSection"
import { DatePicker } from "@/components/DatePicker"
import PageLayout from "@/components/PageLayout"
import { SelectDropdown } from "@/components/SelectDropdown"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GroupList, TaskCategoryList, TaskNameList } from "@/types/tasks.model"
import { CircleCheck } from "lucide-react"
import { useParams } from "react-router-dom"

interface TaskFormPageProps {
	pageTitle: string
	[key: string]: any
}

export default function TaskForm({ pageTitle }: TaskFormPageProps) {
	const { id } = useParams()
	const title = id ? `${pageTitle} - ${id}` : pageTitle
	const taskBreadcrumb = [
		{
			link: "#",
			name: "Task",
		},
		{
			link: "",
			name: title,
		},
	]

	return (
		<PageLayout type="SIDEBAR" pageTitle={title} breadcrumbList={taskBreadcrumb}>
			<div className="px-5">
				<p>Task Category</p>
				<div className="my-2">
					<SelectDropdown placeholder="Select a task category..." items={TaskCategoryList} />
				</div>

				<div className="pt-5 grid gap-y-5">
					<CollapsibleSection
						defaultOpen={true}
						triggerHeader={
							<span className="flex items-center text-sm">
								<CircleCheck className="mr-2.5 text-primary" /> Step1
							</span>
						}
					>
						<div className="px-10 mb-2.5 ml-3 border-l border-l-neutral-200">
							<div className="flex flex-col md:flex-row mx-5 pt-5 mb-5 gap-5">
								<div className="flex flex-col w-full md:w-1/2">
									<span className="mb-1 text-xs">Task Name</span>
									<SelectDropdown className="w-full" items={TaskNameList} />
								</div>
								<div className="flex flex-col w-full md:w-1/2">
									<span className="mb-1 text-xs">Schedule</span>
									<DatePicker />
								</div>
							</div>

							<div className="flex flex-col md:flex-row mx-5 gap-5 pb-5">
								<div className="flex flex-col w-full md:w-1/2">
									<span className="mb-1 text-xs">Group</span>
									<SelectDropdown className="w-full" items={GroupList} />
								</div>
								<div className="flex flex-col w-full md:w-1/2"></div>
							</div>
						</div>
					</CollapsibleSection>

					<CollapsibleSection defaultOpen={true} triggerHeader={<span className="items-center text-sm">Step2</span>}>
						<div className="px-10 mb-2.5 ml-3 border-l border-l-neutral-200">
							<div className="flex flex-col md:flex-row mx-5 gap-5">
								<div className="flex flex-col w-full md:w-1/2 pb-5 pr-md-0">
									<span className="mb-1 text-xs">Short Description</span>
									<Input className="w-full md:w-auto bg-white" />
								</div>
							</div>
							<div className="flex flex-col md:flex-row mx-5 gap-5">
								<div className="flex flex-col w-full md:w-1/2 pb-5 pr-md-0">
									<span className="mb-1 text-xs">Other Notes</span>
									<Textarea />
								</div>
							</div>
						</div>
					</CollapsibleSection>
				</div>
			</div>
		</PageLayout>
	)
}
