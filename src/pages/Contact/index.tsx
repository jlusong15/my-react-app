import Button from "@/components/Button"
import PageLayout from "@/components/PageLayout"
import { useState } from "react"
import FroalaEditor from "react-froala-wysiwyg"
import { toast } from "sonner"

export default function Contact() {
	const froalaConfig = {
		height: 300,
		// minHeight: 200, // optional
		// maxHeight: 500, // optional
		// toolbarButtons: ['bold', 'italic', 'underline'],
		inlineMode: false, // important
	}
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [message, setMessage] = useState<string>("")

	const handleSend = () => {
		setIsLoading(true)
		setTimeout(() => {
			toast.success("Thank you for leaving a message, however this is only a test contact form.", {
				position: "bottom-center",
			})
			setIsLoading(false)
		}, 3000)
	}

	return (
		<PageLayout type="SIDEBAR" pageTitle="Send me a message">
			<div id="browse" className="w-full px-5 mt-3">
				<div className="w-full mb-4">
					<FroalaEditor tag="textarea" onModelChange={setMessage} config={froalaConfig} />
				</div>
				<div className="flex justify-end">
					<Button isLoading={isLoading} onClick={handleSend} disabled={!message}>
						Send
					</Button>
				</div>
			</div>
		</PageLayout>
	)
}
