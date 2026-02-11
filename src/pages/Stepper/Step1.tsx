import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

const FormValues = z.object({
	firstName: z.string().min(1, { message: "First Name is required" }),
	lastName: z.string().min(1, { message: "Last Name is required" }),
	email: z.email("Invalid email"),
})
type FormData = z.infer<typeof FormValues>

export default function Step1() {
	const methods = useForm<FormData>({
		resolver: zodResolver(FormValues),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
		},
	})
	const { control, watch, trigger, formState, handleSubmit } = methods
	const handleOnSubmit = (data: any) => {
		console.log("Form data:", data)
	}
	// console.log(formState?.errors)
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
											<Input id="firstName" type="text" {...field} />
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
											<Input id="lastName" type="text" {...field} />
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
										<Input id="email" type="text" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					{/* <Button onClick={handleSubmit(handleOnSubmit)}>Test</Button> */}
				</form>
			</FormProvider>
		</>
	)
}
