/* eslint-disable */
import * as moment from 'moment';

export const project = {
    githubIssues      : {
        overview: {
            'this-week': {
                'new-issues'   : 214,
                'closed-issues': 75,
                'fixed'        : 3,
                'wont-fix'     : 4,
                're-opened'    : 8,
                'needs-triage' : 6
            },
            'last-week': {
                'new-issues'   : 197,
                'closed-issues': 72,
                'fixed'        : 6,
                'wont-fix'     : 11,
                're-opened'    : 6,
                'needs-triage' : 5
            }
        },
        labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series  : {
            'this-week': [
                {
                    name: 'New issues',
                    type: 'line',
                    data: [42, 28, 43, 34, 20, 25, 22]
                },
                {
                    name: 'Closed issues',
                    type: 'column',
                    data: [11, 10, 8, 11, 8, 10, 17]
                }
            ],
            'last-week': [
                {
                    name: 'New issues',
                    type: 'line',
                    data: [37, 32, 39, 27, 18, 24, 20]
                },
                {
                    name: 'Closed issues',
                    type: 'column',
                    data: [9, 8, 10, 12, 7, 11, 15]
                }
            ]
        }
    },
    taskDistribution  : {
        overview: {
            'this-week': {
                'new'      : 594,
                'completed': 287
            },
            'last-week': {
                'new'      : 526,
                'completed': 260
            }
        },
        labels  : ['API', 'Backend', 'Frontend', 'Issues'],
        series  : {
            'this-week': [15, 20, 38, 27],
            'last-week': [19, 16, 42, 23]
        }
    },
    budgetDistribution: {
        categories: ['Продуктивность', 'Удобность', 'Легкость управление', 'Дизайн', 'Защита'],
        series    : [
            {
                name: 'Статистика',
                data: [89, 93, 96, 100, 100]
            }
        ]
    },
    teamMembers       : [
        {
            id    : '2bfa2be5-7688-48d5-b5ac-dc0d9ac97f14',
            avatar: 'assets/images/pages/школьник.jpg',
            name  : 'Оснаватель',
            email : 'test@gmail.com',
            phone : '+7-777-777-7777',
            title : 'Оснаватель'
        },
        {
            id    : '77a4383b-b5a5-4943-bc46-04c3431d1566',
            avatar: 'assets/images/pages/школьник2.webp',
            name  : 'Администратор',
            email : 'test@gmail.com',
            phone : '+7-777-777-7777',
            title : 'Администратор'
        },
        {
            id    : '8bb0f597-673a-47ca-8c77-2f83219cb9af',
            avatar: 'assets/images/pages/школьник.jpg',
            name  : 'Директор',
            email : 'test@gmail.com',
            phone : '+7-777-777-7777',
            title : 'Директор'
        }
    ]
};
