import { Spinner } from "@/components/ui/spinner"
import { mapDocs } from "@/lib/utils"
import { getBooks } from "@/services/browse.service"
import { BookDocsModel } from "@/types/browse.model"
import { useEffect, useState } from "react"

export default function Books({ onLoad }: { onLoad?: (status: boolean) => void }) {
	const [books, setBooks] = useState<BookDocsModel[]>()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	const handleLoading = (value: boolean) => {
		setLoading(value)
		onLoad && onLoad(value)
	}

	const fetchData = async () => {
		handleLoading(true)
		try {
			const data = await getBooks()
			setBooks(mapDocs(data))
		} catch (err) {
			setError((err as Error).message)
		} finally {
			handleLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	if (!onLoad) {
  if (loading) return <p><Spinner className="float-left mr-2 mt-1"/>Loading</p>;
  if (error) return <p>{error}</p>;

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
