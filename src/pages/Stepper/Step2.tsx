import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAppDispatch } from "@/store/hooks"
import { setStep2Form, setStep2Validity } from "@/store/slices/stepper/step2"
import { StepperForm2 } from "@/types/stepper.model"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

const FormValues = z.object({
	streetAddress: z.string().min(1, { message: "" }),
	city: z.string().optional(),
	zipCode: z.string().optional(),
})
type FormData = z.infer<typeof FormValues>

export default function Step2({ onReset }: { onReset?: number }) {
	const methods = useForm<FormData>({
		mode: "onChange",
		resolver: zodResolver(FormValues),
		defaultValues: {
			streetAddress: "",
			city: "",
			zipCode: "",
		} as StepperForm2,
	})
	const { control, watch, formState, reset } = methods
	const dispatch = useAppDispatch()

	useEffect(() => {
		const subscription = watch((value) => {
			dispatch(setStep2Form(value as StepperForm2))
		})
		return () => subscription.unsubscribe()
	}, [watch])

	useEffect(() => {
		dispatch(setStep2Validity(formState?.isValid as boolean))
	}, [formState?.isValid])

	useEffect(() => {
		reset()
	}, [onReset])

	return (
		<>
			<h2 className="mb-4">Address</h2>
			<FormProvider {...methods}>
				<form>
					<div className="flex flex-col gap-2 mb-4">
						<FormField
							control={control}
							name="streetAddress"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Street Address</FormLabel>
									<FormControl>
										<Input {...field} id="streetAddress" type="text" />
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
								name="city"
								render={({ field }) => (
									<FormItem>
										<FormLabel>City</FormLabel>
										<FormControl>
											<Input {...field} id="city" type="text" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="w-1/2 flex flex-col gap-2">
							<FormField
								control={control}
								name="zipCode"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Zip Code</FormLabel>
										<FormControl>
											<Input {...field} id="zipCode" type="text" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
					{/* <Button onClick={handleSubmit(handleOnSubmit)} className="mt-2">Test Form</Button> */}
				</form>
			</FormProvider>
		</>
	)
}
