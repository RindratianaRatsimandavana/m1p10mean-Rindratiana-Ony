import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        //text: 'CORE',
        items: ['dashboard'],
    },
    {
       // text: 'INTERFACE',
        items: ['charts'],
    },
    {
        //text: 'ADDONS',
        items: ['tables'],
    },
    {
        //text: 'ADDONS',
        items: ['ajout'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'DEMANDE DEPOT',
        link: '/dashboard',
    },
    layouts: {
        icon: 'columns',
        text: 'Layouts',
        submenu: [
            {
                text: 'Static Navigation',
                link: '/dashboard/static',
            },
            {
                text: 'Light Sidenav',
                link: '/dashboard/light',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                ],
            },
        ],
    },
    charts: {
        icon: 'chart-area',
        text: 'VOITURE EN GARAGE ',
        link: '/charts',
    },
    tables: {
        icon: 'table',
        text: 'LISTE REPARATION',
        link: '/dashboard/static',
    },
    ajout: {
        icon: 'book-open',
        text: 'AJOUT REPARATION',
        link: '/dashboard/ajout',
    },
};
