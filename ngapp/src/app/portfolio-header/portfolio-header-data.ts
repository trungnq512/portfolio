import { NavItem } from "./portfolio-header-nav-item/nav-item";

export const navItems: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'Home',
      route: '/home'
    },
    {
        displayName: 'Resume',
        iconName: 'file-cv',
        route: '/Resume'
    },
    {
        displayName: 'Projects',
        iconName: 'brand-github',
        route: '/Projects'
    },
    {
        displayName: 'Contact Me',
        iconName: 'brand-line',
        route: '/Contact'
    },
    {
        displayName: 'Language',
        iconName: 'language',
        route: '/',
        children: [
            {
                displayName: 'English'
            },
            {
                displayName: 'Vietnamese'
            },
            {
                displayName: 'German'
            }
        ]
    }
]