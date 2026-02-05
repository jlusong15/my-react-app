import { Spinner } from "@/components/ui/spinner"
import { mapDocs } from "@/lib/utils"
import { getCharacters } from "@/services/browse.service"
import { CharacterDocsModel } from "@/types/browse.model"
import { useEffect, useState } from "react"

export default function Characters({ onLoad }: { onLoad?: (status: boolean) => void }) {
	const [characters, setCharacters] = useState<CharacterDocsModel[]>()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	const handleLoading = (value: boolean) => {
		setLoading(value)
		onLoad && onLoad(value)
	}

	const fetchData = async () => {
		handleLoading(true)
		try {
			const data = await getCharacters()
			setCharacters(mapDocs(data))
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
				{characters?.map((c) => (
					<li key={c._id}>– {c.name}</li>
				))}
			</ul>
		</div>
	)
}
