export interface NavBarItem {
	name: string
	to: string
}

export const NavBarItems: NavBarItem[] = [
	{
		name: 'Home',
		to: '/',
	},
	{
		name: 'About',
		to: '/about',
	},
	{
		name: 'Projects',
		to: '/projects',
	},
	{
		name: 'Contact',
		to: '/contact',
	},
]
