export const FormSteps = [
	{
		id: 0,
		name: 'Personal Information',
		icon: 'info',
	},
	{
		id: 1,
		name: 'Address',
		icon: 'address'
	},
	{
		id: 2,
		name: 'Payment',
		icon: 'pay'
	},
	{
		id: 3,
		name: 'Done',
		icon: 'done'
	},
]

export interface StepperForm1 {
	firstName: string;
	lastName: string;
	email: string;
}

export interface StepperForm2 {
	streetAddress: string;
	city: string;
	zipCode: string;
}

export interface StepperForm3 {
	nameOnCard: string;
	cardNumber: string;
	expiry: string;
	cvv: string;
}