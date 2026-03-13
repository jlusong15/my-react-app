import { Button } from "@/components/ui/button"
import {
	Popover,
	PopoverContent,
	PopoverDescription,
	PopoverHeader,
	PopoverTitle,
	PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { ListFilter } from "lucide-react"

interface PopoverBasicProps {
	titleContent: string
	popoverTrigger?: React.ReactNode
	contentClass?: string
	titleClass?: string
	[key: string]: any
}

export function PopoverBasic({
	children,
	titleContent,
	titleClass,
	contentClass,
	popoverTrigger,
	...props
}: PopoverBasicProps) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline" className="bg-white rounded-sm">{popoverTrigger ?? <ListFilter />}</Button>
			</PopoverTrigger>
			<PopoverContent>
				<PopoverHeader>
					<PopoverTitle className={cn(titleClass ?? "")}>{titleContent ?? ""}</PopoverTitle>
					<PopoverDescription className={cn(contentClass ?? "")}>{children}</PopoverDescription>
				</PopoverHeader>
			</PopoverContent>
		</Popover>
	)
}
