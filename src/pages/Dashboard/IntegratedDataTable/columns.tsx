import { Button } from "@/components/ui/button"
import { IntegratedDataTableDocsModel } from "@/types/dashboard.model"
import { Column, ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

const useColSort = (name: string, column: Column<IntegratedDataTableDocsModel, unknown>) => {
	return (
		<Button
			variant="ghost"
			onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			className="group w-full flex justify-between hover:bg-transparent!"
		>
			{name}
			<ArrowUpDown className="ml-2 h-4 w-4 invisible group-hover:visible" />
		</Button>
	)
}

export const IntegratedDataTableCols: ColumnDef<IntegratedDataTableDocsModel>[] = [
	{
		accessorKey: "name",
		header: ({ column }) => useColSort("Name", column),
	},
	{
		accessorKey: "race",
		header: "Race",
	},
	{
		accessorKey: "birth",
		header: "Birth",
	},
	{
		accessorKey: "gender",
		header: "Gender",
	},
	{
		accessorKey: "death",
		header: "Death",
	},
	{
		accessorKey: "height",
		header: "Height",
	},
	{
		accessorKey: "realm",
		header: "Realm",
	},
	{
		accessorKey: "spouse",
		header: "Spouse",
	},
]
