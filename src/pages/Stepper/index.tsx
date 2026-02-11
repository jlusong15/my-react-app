import Button from "@/components/Button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { resetStep1Form, step1Selector } from "@/store/slices/stepper/step1"
import { resetStep2Form, step2Selector } from "@/store/slices/stepper/step2"
import { resetStep3Form, step3Selector } from "@/store/slices/stepper/step3"
import { FormSteps } from "@/types/stepper.model"
import { Check, CreditCard, House, UserRoundPen } from "lucide-react"
import { ReactNode, useState } from "react"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"

export default function StepperForm() {
	const [currentStep, setCurrentStep] = useState<number>(0)
	const [resetKey, setResetKey] = useState(0)
	const dispatch = useAppDispatch()
	const step1FormValues = useAppSelector(step1Selector)
	const step2FormValues = useAppSelector(step2Selector)
	const step3FormValues = useAppSelector(step3Selector)
	const iconMapper: Record<string, ReactNode> = {
		info: <UserRoundPen />,
		address: <House />,
		pay: <CreditCard />,
		done: <Check />,
	}
	const resetForm = () => {
		dispatch(resetStep1Form())
		dispatch(resetStep2Form())
		dispatch(resetStep3Form())
		setResetKey((p) => p + 1)
		setCurrentStep(0)
	}
	const stepMapper: Record<number, ReactNode> = {
		0: <Step1 onReset={resetKey} />,
		1: <Step2 onReset={resetKey} />,
		2: <Step3 onReset={resetKey} />,
		3: <Step4 onStartOver={resetForm} />,
	}

	const disableNext = () => {
		const forms = [step1FormValues, step2FormValues, step3FormValues]
		return !forms[+currentStep]?.isValid
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
							{currentStep > 0 && currentStep < 3 && (
								<Button variant="outline" onClick={handleBack}>
									Back
								</Button>
							)}
							{currentStep < 3 && (
								<Button className="ml-auto" onClick={handleNext} disabled={disableNext()}>
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
