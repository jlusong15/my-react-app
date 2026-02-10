import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Step1() {
	return (
		<>
			<h2 className="mb-4">Personal Information</h2>
			<form>
				<div className="flex gap-3 mb-4">
					<div className="w-1/2 flex flex-col gap-2">
						<Label htmlFor="firstName" className="w-full">
							First Name
						</Label>
						<Input id="firstName" type="text" required />
					</div>
					<div className="w-1/2 flex flex-col gap-2">
						<Label htmlFor="lastName" className="w-full">
							Last Name
						</Label>
						<Input id="lastName" type="text" required />
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" placeholder="m@example.com" required />
				</div>
			</form>
		</>
	)
}
