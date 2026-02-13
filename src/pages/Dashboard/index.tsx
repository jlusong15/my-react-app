import { useGetCharactersQuery } from "@/services/browse.service"
import CharacterDataTable from "./CharacterTable"
import { characterCols } from "./CharacterTable/columns"

export default function Dashboard() {
	const {
		data: characters,
		error: errorList,
		isLoading: isListLoading,
		refetch: refetchList,
		isFetching: isFetchingList,
	} = useGetCharactersQuery()

	return (
		<div className="container p-5">
			<div className="rounded-md border p-5">
				<h2>Data Table</h2>
				{!isListLoading && !isFetchingList && <CharacterDataTable columns={characterCols} data={characters || []} />}
			</div>
		</div>
	)
}
