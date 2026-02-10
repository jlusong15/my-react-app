import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Step3() {
	return (
		<>
			<h2 className="mb-4">Payment</h2>
			<form>
				<div className="flex flex-col gap-2 mb-4">
					<Label htmlFor="nameOnCard">Name on Card</Label>
					<Input id="nameOnCard" type="text" required />
				</div>
				<div className="flex flex-col gap-2 mb-4">
					<Label htmlFor="cardNumber">Card Number</Label>
					<Input id="cardNumber" type="text" required />
				</div>
				<div className="flex gap-3 mb-4">
					<div className="w-1/2 flex flex-col gap-2">
						<Label htmlFor="expiry" className="w-full">
							Expiry
						</Label>
						<Input id="expiry" type="text" required />
					</div>
					<div className="w-1/2 flex flex-col gap-2">
						<Label htmlFor="cvv" className="w-full">
							CVV
						</Label>
						<Input id="cvv" type="text" required />
					</div>
				</div>
			</form>
		</>
	)
}
