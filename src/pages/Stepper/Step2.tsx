import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Step2() {
	return (
		<>
			<h2 className="mb-4">Address</h2>
			<form>
				<div className="flex flex-col gap-2 mb-4">
					<Label htmlFor="streetAddress">Street Address</Label>
					<Input id="streetAddress" type="text" required />
				</div>
				<div className="flex gap-3 mb-4">
					<div className="w-1/2 flex flex-col gap-2">
						<Label htmlFor="city" className="w-full">
							City
						</Label>
						<Input id="city" type="text" />
					</div>
					<div className="w-1/2 flex flex-col gap-2">
						<Label htmlFor="zipCode" className="w-full">
							Zip Code
						</Label>
						<Input id="zipCode" type="text" />
					</div>
				</div>
			</form>
		</>
	)
}
