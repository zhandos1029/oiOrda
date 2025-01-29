export type OrganizationControlCard = {
    name_kz: string;
    name_ru: string;
    name_en: string;
    imgUrl: string;
    finished?: number;
    all?: number;
    route: string;
    minGrade?: number;
    maxGrade?: number;
};

export const OrganizationControlCards: OrganizationControlCard[] = [
    {
        name_kz: "Физика",
        name_ru: "Физика",
        name_en: "Physics",
        imgUrl: "./assets/images/subjects/физика.webp",
        finished: 14,
        all: 14,
        route: 'subjects/physics',
        minGrade: 7,
        maxGrade: 11
    },
    {
        name_kz: "Химия",
        name_ru: "Химия",
        name_en: "Chemistry",
        imgUrl: "./assets/images/subjects/химия.webp",
        finished: 16,
        all: 16,
        route: 'subjects/chemistry',
        minGrade: 8,
        maxGrade: 11
    },
    {
        name_kz: "Биология",
        name_ru: "Биология",
        name_en: "Biology",
        imgUrl: "./assets/images/subjects/биология.webp",
        finished: 10,
        all: 11,
        route: 'subjects/biology',
        minGrade: 7,
        maxGrade: 11
    },
    {
        name_kz: "География",
        name_ru: "География",
        name_en: "Geography",
        imgUrl: "./assets/images/subjects/география.webp",
        finished: 18,
        all: 19,
        route: 'subjects/geography',
        minGrade: 5,
        maxGrade: 11
    },
    {
        name_kz: "Қазақстан тарихы",
        name_ru: "История Казахстана",
        name_en: "History of Kazakhstan",
        imgUrl: "./assets/images/subjects/тарих.webp",
        finished: 13,
        all: 13,
        route: 'subjects/kazakhstan_history',
        minGrade: 5,
        maxGrade: 11
    },
    {
        name_kz: "Қазақ тілі",
        name_ru: "Казахский язык",
        name_en: "Kazakh Language",
        imgUrl: "./assets/images/subjects/казактили.webp",
        finished: 20,
        all: 20,
        route: 'subjects/kazakh_language',
        minGrade: 1,
        maxGrade: 11
    },
    {
        name_kz: "Орыс тілі",
        name_ru: "Русский язык",
        name_en: "Russian Language",
        imgUrl: "./assets/images/subjects/орыстили.webp",
        finished: 23,
        all: 23,
        route: 'subjects/russian_language',
        minGrade: 2,
        maxGrade: 11
    },
    {
        name_kz: "Алгебра",
        name_ru: "Алгебра",
        name_en: "Algebra",
        imgUrl: "./assets/images/subjects/алгебра.webp",
        finished: 22,
        all: 22,
        route: 'subjects/algebra',
        minGrade: 7,
        maxGrade: 9
    },
    {
        name_kz: "Геометрия",
        name_ru: "Геометрия",
        name_en: "Geometry",
        imgUrl: "./assets/images/subjects/геометрия.webp",
        finished: 18,
        all: 18,
        route: 'subjects/geometry',
        minGrade: 7,
        maxGrade: 11
    },
    {
        name_kz: "Ағылшын тілі",
        name_ru: "Английский язык",
        name_en: "English Language",
        imgUrl: "./assets/images/subjects/агылшынтили.webp",
        finished: 25,
        all: 30,
        route: 'subjects/english',
        minGrade: 2,
        maxGrade: 11
    },
    {
        name_kz: "Қазақ әдебиеті",
        name_ru: "Казахская литература",
        name_en: "Kazakh Literature",
        imgUrl: "./assets/images/subjects/казакадеб.webp",
        finished: 12,
        all: 14,
        route: 'subjects/kazakh_literature',
        minGrade: 5,
        maxGrade: 11
    },
    {
        name_kz: "Орыс әдебиеті",
        name_ru: "Русская литература",
        name_en: "Russian Literature",
        imgUrl: "./assets/images/subjects/орысадеб.webp",
        finished: 18,
        all: 20,
        route: 'subjects/russian_literature',
        minGrade: 5,
        maxGrade: 11
    },
    {
        name_kz: "Әлем тарихы",
        name_ru: "История мира",
        name_en: "World History",
        imgUrl: "./assets/images/subjects/алемтарих.webp",
        finished: 15,
        all: 16,
        route: 'subjects/world_history',
        minGrade: 5,
        maxGrade: 11
    },
    {
        name_kz: "Грамматиканы оқыту",
        name_ru: "Обучение грамматике",
        name_en: "Teaching Literacy",
        imgUrl: "./assets/images/subjects/обучение_грамматике.webp",
        finished: 11,
        all: 11,
        route: 'subjects/teaching_literacy',
        minGrade: 1,
        maxGrade: 1
    },
    {
        name_kz: "Математика",
        name_ru: "Математика",
        name_en: "Mathematics",
        imgUrl: "./assets/images/subjects/математика.webp",
        finished: 10,
        all: 12,
        route: 'subjects/mathematics',
        minGrade: 1,
        maxGrade: 6
    },
    {
        name_kz: "Жаратылыстану",
        name_ru: "Естествознание",
        name_en: "Natural Science",
        imgUrl: "./assets/images/subjects/естествознание.webp",
        finished: 5,
        all: 8,
        route: 'subjects/natural_science',
        minGrade: 1,
        maxGrade: 6
    },
    {
        name_kz: "Қоршаған әлем",
        name_ru: "Окружающий мир",
        name_en: "Surrounding World",
        imgUrl: "./assets/images/subjects/окружающий_мир.webp",
        finished: 7,
        all: 7,
        route: 'subjects/surrounding_world',
        minGrade: 1,
        maxGrade: 4
    },
    {
        name_kz: "Музыка",
        name_ru: "Музыка",
        name_en: "Music",
        imgUrl: "./assets/images/subjects/музыка.webp",
        finished: 12,
        all: 14,
        route: 'subjects/music',
        minGrade: 1,
        maxGrade: 6
    },
    {
        name_kz: "Өзін-өзі тану",
        name_ru: "Самопознание",
        name_en: "Self-Knowledge",
        imgUrl: "./assets/images/subjects/самопознание.webp",
        finished: 13,
        all: 15,
        route: 'subjects/self_knowledge',
        minGrade: 1,
        maxGrade: 11
    },
    {
        name_kz: "Технология",
        name_ru: "Технология",
        name_en: "Technology",
        imgUrl: "./assets/images/subjects/технология.webp",
        finished: 16,
        all: 19,
        route: 'subjects/technology',
        minGrade: 1,
        maxGrade: 11
    },
    {
        name_kz: "Әдеби оқу",
        name_ru: "Литературное чтение",
        name_en: "Literary Reading",
        imgUrl: "./assets/images/subjects/литературное_чтение.webp",
        finished: 14,
        all: 16,
        route: 'subjects/literary_reading',
        minGrade: 2,
        maxGrade: 4
    },
    {
        name_kz: "Информатика",
        name_ru: "Информатика",
        name_en: "Informatics",
        imgUrl: "./assets/images/subjects/информатика.webp",
        finished: 9,
        all: 12,
        route: 'subjects/informatics',
        minGrade: 7,
        maxGrade: 11
    },
    {
        name_kz: "Алгебра және анализ бастамалары",
        name_ru: "Алгебра и начала анализа",
        name_en: "Algebra and Analysis Basics",
        imgUrl: "./assets/images/subjects/алгебра_анализа.webp",
        finished: 11,
        all: 15,
        route: 'subjects/algebra_analysis',
        minGrade: 10,
        maxGrade: 11
    }
];

