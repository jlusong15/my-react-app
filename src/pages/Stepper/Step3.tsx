import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAppDispatch } from "@/store/hooks"
import { setStep3Form, setStep3Validity } from "@/store/slices/stepper/step3"
import { StepperForm3 } from "@/types/stepper.model"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

const FormValues = z.object({
	nameOnCard: z.string().min(1, { message: "" }),
	cardNumber: z.string().min(1, { message: "" }),
	expiry: z.string().min(1, { message: "" }),
	cvv: z.string().min(1, { message: "" }),
})
type FormData = z.infer<typeof FormValues>

export default function Step3({ onReset }: { onReset?: number }) {
	const methods = useForm<FormData>({
		mode: "onChange",
		resolver: zodResolver(FormValues),
		defaultValues: {
			nameOnCard: "",
			cardNumber: "",
			expiry: "",
			cvv: "",
		} as StepperForm3,
	})
	const { control, watch, formState, reset } = methods
	const dispatch = useAppDispatch()

	useEffect(() => {
		const subscription = watch((value) => {
			dispatch(setStep3Form(value as StepperForm3))
		})
		return () => subscription.unsubscribe()
	}, [watch])

	useEffect(() => {
		dispatch(setStep3Validity(formState?.isValid as boolean))
	}, [formState?.isValid])

	useEffect(() => {
		reset()
	}, [onReset])

	return (
		<>
			<h2 className="mb-4">Payment</h2>
			<FormProvider {...methods}>
				<form>
					<div className="flex flex-col gap-2 mb-4">
						<FormField
							control={control}
							name="nameOnCard"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name on Card</FormLabel>
									<FormControl>
										<Input {...field} id="nameOnCard" type="text" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="flex flex-col gap-2 mb-4">
						<FormField
							control={control}
							name="cardNumber"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Card Number</FormLabel>
									<FormControl>
										<Input {...field} id="cardNumber" type="text" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="flex gap-3 mb-4">
						<div className="w-1/2 flex flex-col gap-2">
							<FormField
								control={control}
								name="expiry"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Expiry</FormLabel>
										<FormControl>
											<Input {...field} id="expiry" type="text" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="w-1/2 flex flex-col gap-2">
							<FormField
								control={control}
								name="cvv"
								render={({ field }) => (
									<FormItem>
										<FormLabel>CVV</FormLabel>
										<FormControl>
											<Input {...field} id="cvv" type="text" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
				</form>
			</FormProvider>
		</>
	)
}
