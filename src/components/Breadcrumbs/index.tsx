import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { cn } from "@/lib/utils"
import { Fragment } from "react/jsx-runtime"

export interface BreadcrumbBasicItemModel {
	link?: string
	class?: string
	name: string
}

type BreadcrumbBasicListModel = BreadcrumbBasicItemModel[]

interface BreadcrumbBasicProps {
	className?: string
	items: BreadcrumbBasicListModel // your array of items
	[key: string]: any // for ...props if you want to allow any extra props
}

export function BreadcrumbBasic({ className, items, ...props }: BreadcrumbBasicProps) {
	return (
		<Breadcrumb className={className} {...props}>
			<BreadcrumbList>
				{items.map((item, index) => (
					<Fragment key={index}>
						<BreadcrumbItem className={cn("text-xs", item.class ?? "")}>
							{item.link && item.link !== "" ? (
								<BreadcrumbLink href={item.link}>{item.name}</BreadcrumbLink>
							) : (
								<BreadcrumbPage>{item.name}</BreadcrumbPage>
							)}
						</BreadcrumbItem>
						{index < items.length - 1 && <BreadcrumbSeparator />}
					</Fragment>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	)
}
