interface ILanguajes { 
    id: number;
    languaje: string;
    level: string;
}

const Languajes: ILanguajes[] = [
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

export default Languajes