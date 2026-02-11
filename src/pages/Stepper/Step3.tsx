import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { StepperForm3 } from "@/types/stepper.model"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

const FormValues = z.object({
	nameOnCard: z.string().min(1, { message: "" }),
	cardNumber: z.string().min(1, { message: "" }),
	expiry: z.string().min(1, { message: "" }),
	cvv: z.string().min(1, { message: "" }),
})
type FormData = z.infer<typeof FormValues>

export default function Step3() {
	const methods = useForm<FormData>({
		resolver: zodResolver(FormValues),
		defaultValues: {
			nameOnCard: "",
			cardNumber: "",
			expiry: "",
			cvv: "",
		} as StepperForm3,
	})
	const { control, watch, trigger, formState, handleSubmit } = methods
	const handleOnSubmit = (data: any) => {
		console.log("Form data:", data)
	}
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
					<Button onClick={handleSubmit(handleOnSubmit)} className="mt-2">
						Test Form
					</Button>
				</form>
			</FormProvider>
		</>
	)
}
