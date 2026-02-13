import { useGetCharactersQuery } from "@/services/browse.service"
import SimpleDataTable from "./SimpleDataTable"
import { characterCols } from "./SimpleDataTable/columns"
import { Spinner } from "@/components/ui/spinner"

export default function Dashboard() {
	const { data: characters, isLoading: isListLoading, isFetching: isFetchingList } = useGetCharactersQuery()

	return (
		<div className="container p-5">
			<div className="rounded-md border p-5">
				<h2>Simple Data Table</h2>
				{!isListLoading && !isFetchingList ? (
					<SimpleDataTable columns={characterCols} data={characters || []} />
				) : (
					<Spinner className="mt-2" />
				)}
			</div>
		</div>
	)
}
