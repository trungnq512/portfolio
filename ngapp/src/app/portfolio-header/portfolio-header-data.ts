import { NavItem } from "./portfolio-header-nav-item/nav-item";

export const navItems: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'Home',
      route: './home'
    },
    {
        displayName: 'Resume',
        iconName: 'file-cv',
        route: './resume'
    },
    {
        displayName: 'Projects',
        iconName: 'brand-github',
        route: './projects'
    },
    {
        displayName: 'Contact Me',
        iconName: 'brand-line',
        route: './contact'
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