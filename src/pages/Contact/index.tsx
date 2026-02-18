import Button from "@/components/Button"
import { useState } from "react"
import FroalaEditor from "react-froala-wysiwyg"
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView"

export default function Contact() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [message, setMessage] = useState<string>("")

	const handleModelChange = (event) => {
		setMessage(event)
	}

	const handleSend = () => {
		console.log("send", message)
		setIsLoading(true)
		setTimeout(() => {
			setIsLoading(false)
		}, 3000)
	}

	return (
		<div id="browse" className="w-full px-5 mt-3">
			<h1 className="font-semibold p-3 text-xl w-full">Send me a message</h1>
			<hr className="mt-2 mb-4" />
			<div className="w-[50%] mb-4">
				<FroalaEditor
					tag="textarea"
					onModelChange={handleModelChange}
					config={{
						placeholder: "Type here",
						events: {
							// focus: function (_e, editor) {
							// 	console.log(editor.selection.get())
							// },
							// onchange: setMessage
						},
					}}
				/>
			</div>
			<Button isLoading={isLoading} onClick={handleSend}>
				Send
			</Button>
			<div className="mt-5">
				<FroalaEditorView model={message} />
			</div>
		</div>
	)
}
