import { BookModel } from "@/types/books.model"
import { useEffect, useState } from "react"

export default function BrowseBooks() {
	const [books, setBooks] = useState<BookModel>()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch("https://the-one-api.dev/v2/book")

				if (!response.ok) {
					throw new Error("Failed to fetch books")
				}

				const data: BookModel = await response.json()
				setBooks(data)
			} catch (err) {
				setError((err as Error).message)
			} finally {
				setLoading(false)
			}
		}

		fetchUsers()
	}, [])

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error}</p>

	return (
		<div id="browse-book">
			<h1>Browse Books</h1>
			<ul>
				{books?.docs?.map((book) => (
					<li key={book.id}>
						<strong>{book.id}</strong> – {book.name}
					</li>
				))}
			</ul>
		</div>
	)
}
