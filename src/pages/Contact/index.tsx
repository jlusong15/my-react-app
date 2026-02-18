import Button from "@/components/Button"
import { useState } from "react"
import FroalaEditor from "react-froala-wysiwyg"
import { toast } from "sonner"

export default function Contact() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [message, setMessage] = useState<string>("")

	const handleSend = () => {
		console.log("handleSend", message)
		setIsLoading(true)
		setTimeout(() => {
			toast.success("Thank you for leave a message, however this is only a test contact form.", {
				position: "bottom-center",
			})
			setIsLoading(false)
		}, 3000)
	}

	return (
		<div id="browse" className="w-full px-5 mt-3">
			<h1 className="font-semibold p-3 text-xl w-full">Send me a message</h1>
			<hr className="mt-2 mb-4" />
			<div className="w-[50%] mb-4">
				<FroalaEditor tag="textarea" onModelChange={setMessage} />
			</div>
			<Button isLoading={isLoading} onClick={handleSend} disabled={!message}>
				Send
			</Button>
		</div>
	)
}
