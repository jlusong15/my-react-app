export interface NavModel {
	href: string;
	name: string;
	current?: boolean;
}

export const NavLinks: NavModel[] = [
	{
		href: "/",
		name: "Dashboard",
	},
	{
		href: "/to-do-list",
		name: "To Do List",
	},
	{
		href: "/browse",
		name: "Browse",
	},
	{
		href: "/stepper",
		name: "Stepper",
	},
	{
		href: "/contact",
		name: "Contact Me",
	},
]