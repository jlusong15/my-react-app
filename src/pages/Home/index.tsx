import { useState } from "react"
import viteLogo from "@/assets/vite.svg"
import reactLogo from "@assets/react.svg"
import { useNavigate } from "react-router"

const Home = () => {
	let navigate = useNavigate()
	const links = [
		{
			url: "/dashboard",
			pageName: "Dashboard",
		},
		{
			url: "/to-do-list",
			pageName: "To Do List",
		},
	]

	return (
		<div id="home">
			Powered by:
			<div className="flex justify-center gap-2">
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1 className="text-3xl font-bold">Vite + React + TypeScript</h1>

			{links.map((pages, index) => (
				<button
					key={index}
					onClick={() => {
						navigate(pages.url)
					}}
					className="bg-red-700/75! p-3 text-blue-50 font-semibold mt-4 flex justify-center cursor-pointer hover:bg-amber-600! hover:text-amber-950 transition-colors! border-0! w-full"
				>
					Go to {pages.pageName}
				</button>
			))}
		</div>
	)
}

export default Home
