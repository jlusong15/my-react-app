import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"

interface CollapsibleSectionProps {
	triggerHeader: React.ReactNode
	className?: string
	defaultOpen?: boolean
	[key: string]: any
}

export function CollapsibleSection({
	children,
	className,
	items,
	triggerHeader,
	defaultOpen = false,
	...props
}: CollapsibleSectionProps) {
	return (
		<>
			<Collapsible className={cn(className ?? "")} defaultOpen={defaultOpen}>
				<CollapsibleTrigger className="group w-full cursor-pointer">
					<div className="flex mb-2.5 justify-between items-center">
						<>{triggerHeader}</>
						<div>
							<ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180 size-4 text-neutral-500" />
						</div>
					</div>
				</CollapsibleTrigger>
				<CollapsibleContent>{children}</CollapsibleContent>
			</Collapsible>
		</>
	)
}
