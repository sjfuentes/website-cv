interface ICertifications { 
    id: number;
    certification_provider: string;
    certification_name: string;
    certification_link: string;
}

const Certifications: ICertifications[] = [
    {
        id: 1,
        certification_provider: 'AWS',
        certification_name: 'Solutions Architect Associate',
        certification_link: 'https://www.credly.com/badges/87e8dfc5-46d3-4a21-8293-8f8a4fc697b7/public_url'
        
    },
    {
        id: 2,
        certification_provider: 'Microsoft',
        certification_name: 'Microsoft Azure Fundamentals AZ-900',
        certification_link: 'https://www.credly.com/badges/46dbc48e-fec3-472b-b06e-25c2fa035d42/public_url'
    },
        {
        id: 3,
        certification_provider: 'HashiCorp',
        certification_name: 'Terraform Associate',
        certification_link: 'https://www.credly.com/badges/465c8b93-b518-4930-adec-0324ac6e3427/public_url'
    },
    {
        id: 4,
        certification_provider: 'AWS',
        certification_name: 'AWS Partner: Accreditation (Technical)',
        certification_link: 'https://www.credly.com/badges/123bab1c-4874-4cd7-9bfb-5f2836fff359/public_url'
    },
    {
        id: 5,
        certification_provider: 'AWS',
        certification_name: 'AWS Partner: Cloud Economics Accreditation',
        certification_link: 'https://www.credly.com/badges/bc1a3b61-b57e-410c-94a6-946ef8855419/public_url'
    }
]

export default Certifications