import { render, screen } from "@testing-library/react"
import Button from "./"

describe("Button", () => {
	it("renders button text", () => {
		// render(<Button label="Click me" isLoading={true} />)
		render(<Button isLoading={true}>Click me</Button>)

		const btn = screen.getByText("Click me")

		expect(btn).toBeInTheDocument()
	})
})
