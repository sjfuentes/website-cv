interface ICourses { 
    id: number;
    languaje: string;
    level: string;
}

const Courses: ICourses[] = [
    {
        id: 1,
        languaje: 'Spanish',
        level: 'Native'
    },
    {
        id: 2,
        languaje: 'English',
        level: 'Advanced Professional'
    }
]

export default Courses