import viteLogo from "@assets/vite.svg"
import reactLogo from "@assets/react.svg"
import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button"

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
			<span className="text-neutral-400 italic">Powered by:</span>
			<div className="flex justify-center gap-2">
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1 className="text-2xl! font-bold pb-3">Vite + React + TypeScript</h1>
			{links.map((pages, index) => (
				<Button
					key={index}
					onClick={() => {
						navigate(pages.url)
					}}
					className="flex w-full my-2"
				>
					Enter {pages.pageName}
				</Button>
			))}
		</div>
	)
}

export default Home
