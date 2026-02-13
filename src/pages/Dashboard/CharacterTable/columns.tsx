import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CharacterTableDataModel } from "@/types/dashboard.model"
import { Column, ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

const useColSort = (name: string, column: Column<CharacterTableDataModel, unknown>) => {
	return (
		<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="group w-full flex justify-between hover:!bg-transparent">
			{name}
			<ArrowUpDown className="ml-2 h-4 w-4 invisible group-hover:visible" />
		</Button>
	)
}

export const characterCols: ColumnDef<CharacterTableDataModel>[] = [
	{
		accessorKey: "name",
		header: ({ column }) => useColSort("Name", column),
	},
	{
		accessorKey: "race",
		header: ({ column }) => useColSort("Race", column),
	},
	{
		accessorKey: "birth",
		header: ({ column }) => useColSort("Birth", column),
	},
	{
		accessorKey: "gender",
		header: ({ column }) => useColSort("Gender", column),
	},
	{
		accessorKey: "death",
		header: ({ column }) => useColSort("Death", column),
	},
	{
		accessorKey: "height",
		header: ({ column }) => useColSort("Height", column),
	},
	{
		accessorKey: "realm",
		header: ({ column }) => useColSort("Realm", column),
	},
	{
		accessorKey: "spouse",
		header: ({ column }) => useColSort("Spouse", column),
	},
]
