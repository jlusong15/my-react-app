import { Button } from "@/components/ui/button"
import { CharacterTableDataDocsModel } from "@/types/dashboard.model"
import { Column, ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

const useColSort = (name: string, column: Column<CharacterTableDataDocsModel, unknown>) => {
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

export const simpleDataTableCols: ColumnDef<CharacterTableDataDocsModel>[] = [
	{
		accessorKey: "name",
		header: ({ column }) => useColSort("Name", column),
		size: 180,
	},
	{
		accessorKey: "race",
		header: ({ column }) => useColSort("Race", column),
		size: 80,
	},
	// {
	// 	accessorKey: "birth",
	// 	header: ({ column }) => useColSort("Birth", column),
	// },
	{
		accessorKey: "gender",
		header: "Gender",
	},
	// {
	// 	accessorKey: "death",
	// 	header: ({ column }) => useColSort("Death", column),
	// },
	// {
	// 	accessorKey: "height",
	// 	header: ({ column }) => useColSort("Height", column),
	// },
	// {
	// 	accessorKey: "realm",
	// 	header: ({ column }) => useColSort("Realm", column),
	// },
	// {
	// 	accessorKey: "spouse",
	// 	header: ({ column }) => useColSort("Spouse", column),
	// },
]
