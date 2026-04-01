import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface SelectDropdownItemModel {
	value: string
	display: string
	className?: string
}

type SelectDropdownListModel = SelectDropdownItemModel[]

interface SelectDropdownProps {
	items: SelectDropdownListModel // your array of items
	onValueChange?: (value: string) => void
	placeholder?: string
	value?: string
	[key: string]: any
}

export function SelectDropdown({ className, items, placeholder, value, onValueChange, ...props }: SelectDropdownProps) {
	return (
		<>
			<Select value={value?.toString() ?? ""} onValueChange={onValueChange}>
				<SelectTrigger className="w-full rounded-sm sm:ml-auto sm:flex" aria-label="Select a value">
					<SelectValue placeholder={placeholder ?? "Select"} />
				</SelectTrigger>
				<SelectContent className="rounded-sm">
					{items?.map((item, index) => (
						<SelectItem value={item.value} className={cn("rounded-sm", item.className ?? "")} key={index}>
							{item.display || ""}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</>
	)
}
