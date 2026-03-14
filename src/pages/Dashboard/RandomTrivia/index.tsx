"use client"

import { useMemo } from "react"
import { randomTriviaList } from "./data"

export default function RandomTrivia() {
	const randomTrivia = useMemo(() => {
		return randomTriviaList[Math.floor(Math.random() * randomTriviaList.length)]
	}, [])

	return (
		<div className="p-2 text-center">
			<h3 className="text-lg font-semibold mb-2">Random Trivia</h3>
			<p className="text-gray-700">{randomTrivia.fact}</p>
		</div>
	)
}
