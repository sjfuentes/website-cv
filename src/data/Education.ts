interface IEducation { 
    id: number;
    languaje: string;
    level: string;
}

const Education: IEducation[] = [
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

export default Education