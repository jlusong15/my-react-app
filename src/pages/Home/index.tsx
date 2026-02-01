import { useState } from "react"
import viteLogo from "../../assets/react.svg"
import reactLogo from "../../assets/vite.svg"
import { useNavigate } from "react-router"

const Home = () => {
	const [count, setCount] = useState(0)
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
			<div className="flex justify-center gap-2">
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1 className="text-3xl font-bold underline">Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>

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
