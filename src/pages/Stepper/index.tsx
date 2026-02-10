import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, CreditCard, House, UserRoundPen } from "lucide-react"
import { FormSteps } from "@/types/stepper-form.model"
import { ReactNode, useState } from "react"
import { cn } from "@/lib/utils"
import Button from "@/components/Button"
import Step1 from "./step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"

export default function StepperForm() {
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
	const [currentStep, setCurrentStep] = useState<number>(0)

	return (
		<div id="stepper-form" className="w-full px-5 mt-3">
			<div className="max-w-2xl mt-5 m-auto">
				<Card className="pt-0 border border-gray-6 rounded-xl overflow-hidden">
					<div className="flex justify-center gap-20 bg-gray-50 border-b border-gray-6 py-5">
						{FormSteps?.map((step) => (
							<div
								className={cn("rounded-full bg-gray-200 p-2.5 transition", "[&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-gray-500", {
									"bg-gray-700 [&>svg]:text-white": currentStep === step.id,
								})}
								key={step.id}
							>
								{iconMapper?.[`${step.icon}`]}
							</div>
						))}
					</div>
					<CardContent>{stepMapper?.[currentStep]}</CardContent>
					<CardFooter>
						<div className="flex justify-between w-full">
							{currentStep !== 0 && <Button variant="outline" onClick={() => setCurrentStep((p) => p-1)}>Back</Button>}
							{currentStep < 3 && (
								<Button className="ml-auto" onClick={() => setCurrentStep((p) => p+1)}>
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
