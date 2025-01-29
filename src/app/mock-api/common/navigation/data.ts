/* eslint-disable */
import { FuseNavigationItem } from '../../../../@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'main',
        title   : 'Главная',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'main.page',
                title: 'Главная',
                type : 'basic',
                icon : 'heroicons_outline:home',
                link : '/main/page'
            },
            {
                id   : 'main.about',
                title: 'О нас',
                type : 'basic',
                icon : 'heroicons_outline:identification',
                link : '/main/about'
            },
            {
                id   : 'main.subjects',
                title: 'Предметы',
                type : 'basic',
                icon : 'heroicons_outline:book-open',
                link : '/main/subjects'
            }
        ]
    },
    // {
    //     id      : 'subjects',
    //     title   : 'Предметы',
    //     type    : 'group',
    //     icon    : 'heroicons_outline:home',
    //     children: [
    //         {
    //             id   : 'subjects.physics',
    //             title: 'Физика',
    //             type : 'basic',
    //             icon : 'heroicons_outline:chip',
    //             link : '/subjects/physics'
    //         },
    //         {
    //             id   : 'subjects.chemistry',
    //             title: 'Химия',
    //             type : 'basic',
    //             icon : 'heroicons_outline:beaker',
    //             link : '/subjects/chemistry'
    //         },
    //         {
    //             id   : 'subjects.biology',
    //             title: 'Биология',
    //             type : 'basic',
    //             icon : 'heroicons_outline:finger-print',
    //             link : '/subjects/biology'
    //         },
    //         {
    //             id   : 'subjects.geography',
    //             title: 'География',
    //             type : 'basic',
    //             icon : 'heroicons_outline:globe',
    //             link : '/subjects/geography'
    //         }
    //     ]
    // },
    {
        id      : 'instruments',
        title   : 'Инструменты',
        type    : 'group',
        icon    : 'heroicons_outline:document',
        children: [
            {
                id   : 'instruments.news',
                title: 'Новости',
                type : 'basic',
                icon : 'heroicons_outline:newspaper',
                link : '/instruments/news'
            },
            {
                id   : 'instruments.setting',
                title: 'Настройка',
                type : 'basic',
                icon : 'heroicons_outline:cog',
                link : '/instruments/setting'
            },
            {
                id   : 'instruments.contacts',
                title: 'Контакты',
                type : 'basic',
                icon : 'heroicons_outline:annotation',
                link : '/instruments/contacts'
            }
        ]
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'main',
        title   : 'Главная',
        type    : 'aside',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'subjects',
        title   : 'Предметы',
        type    : 'aside',
        icon    : 'heroicons_outline:book-open',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'instruments',
        title   : 'Инструменты',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id      : 'main',
        title   : 'ГЛАВНАЯ',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'subjects',
        title   : 'ПРЕДМЕТЫ',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id   : 'others',
        title: 'ОСТАЛЬНЫЕ',
        type : 'group'
    },
    {
        id      : 'instruments',
        title   : 'ИНСТРУМЕНТЫ',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id      : 'main',
        title   : 'Главная',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'subjects',
        title   : 'Предметы',
        type    : 'group',
        icon    : 'heroicons_outline:book-open',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'instruments',
        title   : 'Инструменты',
        type    : 'group',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
