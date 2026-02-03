export interface NavModel {
	href: string;
	name: string;
	current?: boolean;
}

export const NavLinks: NavModel[] = [
	{
		href: "/dashboard",
		name: "Dashboard",
	},
	{
		href: "/to-do-list",
		name: "To Do List",
	},
]