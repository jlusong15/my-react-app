import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { StepperForm2 } from "@/types/stepper.model"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

const FormValues = z.object({
	streetAddress: z.string().min(1, { message: "" }),
	city: z.string().optional(),
	zipCode: z.string().optional(),
})
type FormData = z.infer<typeof FormValues>

export default function Step2() {
	const methods = useForm<FormData>({
		resolver: zodResolver(FormValues),
		defaultValues: {
			streetAddress: "",
			city: "",
			zipCode: "",
		} as StepperForm2,
	})
	const { control, watch, trigger, formState, handleSubmit } = methods
	const handleOnSubmit = (data: any) => {
		console.log("Form data:", data)
	}
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
