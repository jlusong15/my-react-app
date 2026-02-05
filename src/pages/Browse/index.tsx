import { RefreshCcw } from "lucide-react"
import Books from "./Books"
import Characters from "./Characters"
import { useState } from "react"

export default function Browse() {
	const [reload, setReload] = useState<number>(Math.random)
	const handleReload = () => {
		setReload(Math.random)
	}

	return (
		<div id="browse" className="w-full px-5 mt-3">
			<h1 className="font-semibold p-3 text-xl w-full">Browse</h1>
			<hr className="mt-2" />
			<h2 className="font-semibold mb-2 mt-3">Books</h2>
			<Books />
			<br />
			<h2 className="font-semibold mb-2 mt-3 inline-block">Characters</h2>{" "}
			<RefreshCcw
				className="ml-1 cursor-pointer size-4 inline-block text-gray-500 hover:text-gray-300 transition"
				onClick={handleReload}
			/>
			<Characters reload={reload} />
		</div>
	)
}
