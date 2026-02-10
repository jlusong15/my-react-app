import Button from "@/components/Button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { FormSteps } from "@/types/stepper-form.model"
import { Check, CreditCard, House, UserRoundPen } from "lucide-react"
import { ReactNode, useState } from "react"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"

export default function StepperForm() {
	const [currentStep, setCurrentStep] = useState<number>(0)
	const iconMapper: Record<string, ReactNode> = {
		info: <UserRoundPen />,
		address: <House />,
		pay: <CreditCard />,
		done: <Check />,
	}
	const stepMapper: Record<number, ReactNode> = {
		0: <Step1 />,
		1: <Step2 />,
		2: <Step3 />,
		3: <Step4 />,
	}

	const handleBack = () => {
		setCurrentStep((p) => p - 1)
	}
	const handleNext = () => {
		setCurrentStep((p) => p + 1)
	}

	return (
		<div id="stepper-form" className="w-full px-5 mt-3">
			<div className="max-w-2xl mt-5 m-auto">
				<Card className="pt-0 border border-gray-6 rounded-xl overflow-hidden">
					<div className="flex justify-between bg-gray-50 border-b border-gray-6 p-5">
						{FormSteps?.map((step) => (
							<div
								className={cn(
									"rounded-full bg-gray-200 p-2.5 transition",
									"[&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-gray-500",
									{
										"bg-primary [&>svg]:text-white": currentStep === step.id,
									},
								)}
								key={step.id}
							>
								{iconMapper?.[`${step.icon}`]}
							</div>
						))}
					</div>
					<CardContent>{stepMapper?.[currentStep]}</CardContent>
					<CardFooter>
						<div className="flex justify-between w-full">
							{currentStep !== 0 && (
								<Button variant="outline" onClick={handleBack}>
									Back
								</Button>
							)}
							{currentStep < 3 && (
								<Button className="ml-auto" onClick={handleNext}>
									Next
								</Button>
							)}
						</div>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}
