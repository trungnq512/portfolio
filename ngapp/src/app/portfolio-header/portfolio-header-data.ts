import { NavItem } from "./portfolio-header-nav-item/nav-item";

const path = 'portfolio';

export const navItems: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'Home',
      route: path + '/home'
    },
    {
        displayName: 'Resume',
        iconName: 'file-cv',
        route: path + '/resume'
    },
    {
        displayName: 'Projects',
        iconName: 'brand-github',
        route: path + '/projects'
    },
    {
        displayName: 'Contact Me',
        iconName: 'brand-line',
        route: path + '/contact'
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