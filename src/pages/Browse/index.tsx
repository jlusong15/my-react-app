import PageLayout from "@/components/PageLayout"
import { RefreshCcw } from "lucide-react"
import { useState } from "react"
import Books from "./Books"
import Characters from "./Characters"

export default function Browse() {
	const [reload, setReload] = useState<number>(Math.random)
	const handleReload = () => {
		setReload(Math.random)
	}

	return (
		<PageLayout type="SIDEBAR" pageTitle="Browse">
			<div className="w-full px-5 mt-3">
				<h4 className="font-semibold mb-2 mt-3">Books</h4>
				<Books />
				<br />

				<div className="flex items-center mt-3">
					<h4 className="font-semibold mb-2 mt-1 inline-block">Characters</h4>{" "}
					<RefreshCcw
						className="ml-2 cursor-pointer size-3.5 inline-block text-gray-500 hover:text-gray-300 transition"
						onClick={handleReload}
					/>
				</div>
				<Characters reload={reload} />
			</div>
		</PageLayout>
	)
}
