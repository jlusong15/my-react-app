export interface NavModel {
	href: string;
	name: string;
	current?: boolean;
}

export const NavLinks: NavModel[] = [
	{
		href: "/",
		name: "Home",
	},
	{
		href: "/dashboard",
		name: "Dashboard",
	},
	{
		href: "/tasks",
		name: "My Tasks",
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
		href: "/to-do-list",
		name: "To Do",
	},
	{
		href: "/contact",
		name: "Contact Me",
	},
]