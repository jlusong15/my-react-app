import Books from "./Books"
import Characters from "./Characters"

export default function Browse() {
	return (
		<div id="browse" className="w-full px-5 mt-3">
			<h1 className="font-semibold p-3 text-xl w-full">Browse</h1>
			<hr className="mt-2" />

			<h2 className="font-semibold mb-2 mt-3">Books</h2>
			<Books />

			<h2 className="font-semibold mb-2 mt-3">Characters</h2>
			<Characters />
		</div>
	)
}
