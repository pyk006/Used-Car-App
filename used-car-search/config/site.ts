export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Used Car Search",
	description: "Search through over 450000 used car sale posts",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Search",
			href: "/search"
		},
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/pyk006",
	},
};
