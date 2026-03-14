import { useMemo } from "react"
import { randomQuotesList } from "./data"

export default function RandomQuote() {
	const randomQuote = useMemo(() => {
		return randomQuotesList[Math.floor(Math.random() * randomQuotesList.length)]
	}, [])

	return (
		<div className="text-center p-6">
			<p className="text-xl italic">"{randomQuote.quote}"</p>
			<p className="mt-2 text-sm text-gray-500">— {randomQuote.author}</p>
		</div>
	)
}
