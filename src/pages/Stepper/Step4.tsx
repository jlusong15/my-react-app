import Button from "@/components/Button"

export default function Step4({ onStartOver }: { onStartOver: () => void }) {
	return (
		<>
			<div className="w-full text-center">
				<h2 className="mb-4">Done!</h2>
				<p className="text-sm text-gray-500 mb-6">Form submitted successfully.</p>
				<Button onClick={onStartOver}>Start Over</Button>
			</div>
		</>
	)
}
