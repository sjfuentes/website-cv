interface ICertifications { 
    id: number;
    languaje: string;
    level: string;
}

const Certifications: ICertifications[] = [
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

export default Certifications