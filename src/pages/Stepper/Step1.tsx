import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAppDispatch } from "@/store/hooks"
import { setStep1Form, setStep1Validity } from "@/store/slices/stepper/step1"
import { StepperForm1 } from "@/types/stepper.model"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

const FormValues = z.object({
	firstName: z.string().min(1, { message: "" }),
	lastName: z.string().min(1, { message: "" }),
	email: z.email("Invalid email"),
})
type FormData = z.infer<typeof FormValues>

export default function Step1({ onReset }: { onReset?: number }) {
	const methods = useForm<FormData>({
		mode: "onChange",
		resolver: zodResolver(FormValues),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
		} as StepperForm1,
	})
	const { control, watch, formState, reset } = methods
	const dispatch = useAppDispatch()

	useEffect(() => {
		const subscription = watch((value) => {
			dispatch(setStep1Form(value as StepperForm1))
		})
		return () => subscription.unsubscribe()
	}, [watch])

	useEffect(() => {
		dispatch(setStep1Validity(formState?.isValid as boolean))
	}, [formState?.isValid])

	useEffect(() => {
		reset()
	}, [onReset])

	return (
		<>
			<h2 className="mb-4">Personal Information</h2>
			<FormProvider {...methods}>
				<form>
					<div className="flex gap-3 mb-4">
						<div className="w-1/2 flex flex-col gap-2">
							<FormField
								control={control}
								name="firstName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>First Name</FormLabel>
										<FormControl>
											<Input {...field} id="firstName" type="text" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="w-1/2 flex flex-col gap-2">
							<FormField
								control={control}
								name="lastName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Last Name</FormLabel>
										<FormControl>
											<Input {...field} id="lastName" type="text" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<FormField
							control={control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input {...field} id="email" type="text" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</form>
			</FormProvider>
		</>
	)
}
