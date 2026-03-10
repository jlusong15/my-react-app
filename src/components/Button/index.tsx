import React from "react"
import { buttonVariants, Button as UIButton } from "@/components/ui/button"
import { type VariantProps } from "class-variance-authority"
import { LoaderCircle } from "lucide-react"

export default function Button({
	children,
	label,
	isLoading,
	disabled,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
		isLoading?: boolean
		label?: string
	}) {
	return (
		<UIButton {...props} disabled={isLoading || disabled}>
			{label || children} {isLoading && <LoaderCircle className="animate-spin" />}
		</UIButton>
	)
}
