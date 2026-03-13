import { Button } from "@/components/ui/button"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Child from "./child"
import PageLayout from "@/components/PageLayout"

export default function Practice() {
	const [testData, setTestData] = useState<string>("123")
	const [count, setCount] = useState<number>(0)
	const timerId = useRef<NodeJS.Timeout | null>(null)
	const inputRef = useRef<HTMLInputElement>(null)
	const ref1 = useRef<number>(0)
	const [ut1, setUt1] = useState<number>(0)
	const obj1 = useMemo(
		() => ({
			ref1,
			ut1: ut1 + 1,
			// test: ut1 === 1 ? 0 : 2
		}),
		[timerId],
	)
	const handleClick = useCallback(() => {
		console.log("Clicked with useCallback")
	}, [])
	// const handleClick = () => {
	// 	console.log("Clicked")
	// }

	useEffect(() => {
		inputRef.current?.focus()
		const { height, clientWidth } = inputRef.current as HTMLInputElement
		console.log(inputRef.current)
		console.log({ height, clientWidth })
	}, [])

	useEffect(() => {
		console.log("inputref", inputRef, inputRef.current)
		console.log("ref1", ref1, ref1?.current)
		console.log("obj1", obj1)
	}, [ref1?.current])

	useEffect(() => {
		console.log("ut1", ut1)
		console.log("obj1", obj1)
	}, [ut1])

	const handleTrigger1 = () => {
		setTestData((p) => p + p)
		triggerInputFocus()
		ref1.current++
	}

	const handleTrigger2 = useCallback(() => {
		triggerInputFocus()
		setUt1((p) => p + 1)
		setTestData((p) => p + p)
	}, [])

	const triggerInputFocus = () => {
		inputRef?.current?.focus()
	}

	const handleDestroy = () => {
		inputRef.current = null
	}

	console.log("obj1", obj1)

	return (
		<PageLayout>
			<div className="w-full px-5 mt-3">
				<h1 className="font-semibold p-3 text-xl w-full">Practice</h1>
				<hr className="mt-2 mb-4" />
				<div className="w-full mb-4 border-bottom ">
					<input ref={inputRef} type="text" className="border rounded p-2 text-md mr-1" placeholder="type here..." />
					<Button onClick={handleTrigger1} className="ml-1">
						Trigger Ref
					</Button>
					<Button onClick={handleTrigger2} className="ml-1">
						Trigger UseState
					</Button>
					<Button onClick={handleDestroy} className="ml-1">
						Destroy input
					</Button>
				</div>
				<div className="w-full">
					<Button onClick={() => setCount(count + 1)} className="mr-2">
						Count: {count}
					</Button>
					<Child
						data={testData}
						// onClick={handleClick}
					/>
				</div>
			</div>
		</PageLayout>
	)
}
