import { Spinner } from "@/components/ui/spinner"
import { mapDocs } from "@/lib/utils"
import { getBooks } from "@/services/browse.service"
import { useAppDispatch } from "@/store/hooks"
import { setBookList } from "@/store/slices/browse/books"
import { BookDocsModel } from "@/types/browse.model"
import { useEffect, useState } from "react"

export default function Books({ onLoad }: { onLoad?: (status: boolean) => void }) {
	const [books, setBooks] = useState<BookDocsModel[]>()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const dispatch = useAppDispatch()

	//#region Requests
	const fetchData = async () => {
		handleLoading(true)
		try {
			const payload = await getBooks()
			const data = mapDocs(payload)
			setBooks(data)
			dispatch(setBookList(data))
		} catch (err) {
			setError((err as Error).message)
		} finally {
			handleLoading(false)
		}
	}
	//#endregion

	//#region Handlers
	const handleLoading = (value: boolean) => {
		setLoading(value)
		onLoad && onLoad(value)
	}
	//#endregion

	//#region Hooks
	useEffect(() => {
		fetchData()
	}, [])
	//#endregion

	//#region HTML
	if (!onLoad) {
		if (loading)
			return (
				<p>
					<Spinner className="float-left mr-2 mt-1" />
					Loading
				</p>
			)
		if (error) return <p>{error}</p>
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
	//#endregion
}
