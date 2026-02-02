import React from "react"
import { buttonVariants, Button as UIButton } from "@/components/ui/button"
import { type VariantProps } from "class-variance-authority"
import { LoaderCircle } from "lucide-react"

const Button = ({
	children,
	isLoading,
	disabled,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
		isLoading?: boolean
	}) => {
	return (
		<UIButton {...props} disabled={isLoading || disabled}>
			{children} {isLoading && <LoaderCircle className="animate-spin"/>}
		</UIButton>
	)
}

export default Button
