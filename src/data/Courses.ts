interface ICourses { 
    id: number;
    course_provider: string;
    course_name: string;
    course_url: string | null;
}

const Courses: ICourses[] = [
    {
        id: 1,
        course_provider: 'Cloud Guru',
        course_name: 'AWS Certified Solution Architect Associate',
        course_url: 'https://verify.acloud.guru/C9613DF5D134'
    },
    {
        id: 2,
        course_provider: 'Cloud Guru',
        course_name: 'HashiCorp Certified Terraform Associate',
        course_url: 'https://verify.acloud.guru/BA82DDE2CB98'
    },
    {
        id: 3,
        course_provider: 'Cloud Guru',
        course_name: 'DevOps Essentials',
        course_url: 'https://verify.acloud.guru/3E6C76DE595C'
    },
    {
        id: 4,
        course_provider: 'Cloud Guru',
        course_name: 'Introduction to Containers and Docker',
        course_url: 'https://verify.acloud.guru/5BC45DA4CBA3'
    },
    {
        id: 5,
        course_provider: 'Cloud Guru',
        course_name: 'Introduction to Kubernetes',
        course_url: 'https://verify.acloud.guru/DA2D7135B19A'
    },
    {
        id: 6,
        course_provider: 'Cloud Guru',
        course_name: 'Kubernetes Essentials',
        course_url: 'https://verify.acloud.guru/535F08C8B6E8'
    },
    {
        id: 7,
        course_provider: 'Udemy',
        course_name: 'AZ-900 Microsoft Azure Fundamentals',
        course_url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-96319b2c-cd0c-4f5d-b909-5ba584e67331.pdf'
    },
    {
        id: 8,
        course_provider: 'Udemy',
        course_name: 'Azure Basics for Business',
        course_url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-762dbc3e-5cf7-4edd-96b1-d5bb19e18c1f.pdf'
    },
    {
        id: 9,
        course_provider: 'Udemy',
        course_name: 'Terraform for AWS',
        course_url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-9992eec9-0405-4c97-86a3-34be096d14c5.pdf'
    },
    {
        id: 10,
        course_provider: 'Udemy',
        course_name: 'NodeJS Web development bootcamp',
        course_url: 'https://thoughtworks.udemy.com/certificate/UC-9d23932d-8a4b-458b-8a7a-bc47745219fd/'
    },
    {
        id: 11,
        course_provider: 'Udemy',
        course_name: 'React Front to Back ',
        course_url: 'https://thoughtworks.udemy.com/certificate/UC-13d61903-e02b-4fcb-81b3-15f8209844d4/'
    },
    {
        id: 12,
        course_provider: 'Udemy',
        course_name: 'Clean Code with Java',
        course_url: 'https://thoughtworks.udemy.com/certificate/UC-1aa528c1-89f8-4baa-8c6d-6ce7a8fae5d8/'
    },
    {
        id: 13,
        course_provider: 'Udemy',
        course_name: 'SOLID Principles',
        course_url: 'https://thoughtworks.udemy.com/certificate/UC-9fed53ae-5c50-4aed-a184-6404dd068114/'
    },
    {
        id: 14,
        course_provider: 'Cloud Guru',
        course_name: 'Introduction to Python Development',
        course_url: 'https://verify.acloud.guru/8AA585B6C6B5'
    }
]

export default Courses