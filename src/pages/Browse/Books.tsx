import { Spinner } from "@/components/ui/spinner"
import { useGetBooksQuery } from "@/services/browse.service"

export default function Books({ onLoad }: { onLoad?: (status: boolean) => void }) {
	const { data: books, error, isLoading, isFetching } = useGetBooksQuery()

	if (!onLoad) {
		if (isLoading || isFetching)
			return (
				<p>
					<Spinner className="float-left mr-2 mt-1" />
					Loading
				</p>
			)
		if (error) return <p>Error</p>
	}

	return (
		<div>
			<ul>
				{books?.map((b) => (
					<li key={b._id}>– {b.name}</li>
				))}
			</ul>
		</div>
	)
}
