export interface GetCourses {
    courses: Course[];
}

interface Course {
    id: string;
    name: string;
    detail: string;
    price: number;
    tag: Tag;
    duration: string;
    order: number;
    difficulty: string;
    image: string;
}

interface Tag {
    title: string;
    subtitle: string[];
}
