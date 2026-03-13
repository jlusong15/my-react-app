import { CollapsibleSection } from "@/components/CollapsibleSection"
import { DatePicker } from "@/components/DatePicker"
import PageLayout from "@/components/PageLayout"
import { SelectDropdown } from "@/components/SelectDropdown"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CircleCheck } from "lucide-react"

export default function TasksPage() {
	const taskBreadcrumb = [
		{
			link: "#",
			name: "Task",
		},
		{
			link: "",
			name: "Create Task",
		},
	]
	const taskCategoryList = [
		{
			value: "story",
			display: "Story",
		},
		{
			value: "bug",
			display: "Bug",
		},
		{
			value: "support",
			display: "Support",
		},
	]
	const taskNameList = [
		{
			value: "planning",
			display: "Development Planning",
		},
		{
			value: "grooming",
			display: "Backlog Grooming",
		},
		{
			value: "review",
			display: "Sprint Review",
		},
	]
	const groupList = [
		{
			value: "dev",
			display: "Dev Team",
		},
		{
			value: "qa",
			display: "QA Team",
		},
		{
			value: "sr",
			display: "Senior/Lead",
		},
	]

	return (
		<PageLayout type="SIDEBAR" pageTitle="Add Task" breadcrumbList={taskBreadcrumb}>
			<div className="px-5">
				<p>Task Category</p>
				<div className="my-2">
					<SelectDropdown placeholder="Select a task category..." items={taskCategoryList} />
				</div>

				<div className="pt-5 grid gap-y-5">
					<CollapsibleSection
						triggerHeader={
							<span className="flex items-center text-sm">
								<CircleCheck className="mr-2.5 text-primary" /> Step1
							</span>
						}
					>
						<div className="px-10 mb-2.5 ml-3 border-l border-l-neutral-200">
							<div className="flex mx-5 pt-5 mb-5 gap-5">
								<div className="flex flex-col w-[50%]">
									<span className="mb-1 text-xs">Task Name</span>
									<SelectDropdown className="w-full" items={taskNameList} />
								</div>
								<div className="flex flex-col w-[50%]">
									<span className="mb-1 text-xs">Schedule</span>
									<DatePicker />
								</div>
							</div>
							<div className="flex mx-5 gap-5">
								<div className="flex flex-col w-[50%] pb-5 pr-5">
									<span className="mb-1 text-xs">Group</span>
									<SelectDropdown className="w-full" items={groupList} />
								</div>
							</div>
						</div>
					</CollapsibleSection>

					<CollapsibleSection triggerHeader={<span className="items-center text-sm">Step2</span>}>
						<div className="px-10 mb-2.5 ml-3 border-l border-l-neutral-200">
							<div className="flex mx-5 pt-5 mb-5 gap-5 pr-5">
								<div className="flex flex-col w-[50%]">
									<span className="mb-1 text-xs">Short Description</span>
									<Input />
								</div>
							</div>
							<div className="flex mx-5 w-full">
								<div className="flex flex-col w-full pb-5">
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
