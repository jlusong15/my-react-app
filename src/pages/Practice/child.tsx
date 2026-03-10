import { Button } from "@/components/ui/button"
import { memo, useEffect } from "react"

function Child({ onClick, data }: { onClick?: () => void; data?: string }) {
	console.log("Child rendered", data)

	const test = () => {
		let x = 10
		var y = 10
		const z = 10

		if (true) {
			let x = 10
			var y = 10
			if (true) {
				let x = 10
				var y = 10
			}
		}
		// console.log(x);

		console.log(x)
		console.log(y)
		console.log(z)
	}

	const handleOnClick = () => {
		if (onClick) {
			onClick()
		}
	}

	useEffect(() => {
		console.log('child useEffect triggered')
	}, [])

	return <Button onClick={handleOnClick}>Child Button</Button>
}

export default memo(Child)
