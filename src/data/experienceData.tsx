export const monArr: string[] = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    "Jan", "Feb", "Mar", "Apr",
];

export const yearArr: string[] = [
    "", "", "2021", "", "", "", "", "", "", "", "", "", "", "", "2022", "", "", "",
];

interface expArrayProps {
    title: string,
    details: string[],
    dates: string,
    skills: string[],
    company: string,
    color: string,
    start: number,
    length: number
};

export const expArray: expArrayProps[] = [
    {
        title: "Sr. Analyst, Data Operations",
        details: [
            "Analized and visualized health policy data using Python and DataTables.",
            "Developed and deployed data analysis tools with Python/AWS",
            "In charge of all web app front-end/API development with Flask/jQuery",
        ],
        dates: "April 2022 - Current",
        skills: ["Python", "SQL", "AWS Lambda", "JavaScript", "jQuery", "DataTables"],
        company: "LMI",
        color: "rgb(57,64,120)",
        start: 16.3,
        length: 1,
    },
    {
        title: "Software Engineering Consultant",
        details: [
            "Built an OOP-oriented async video editing/messaging SaaS web application from the ground up",
            "Designed app with emphasis on SEO and cross-browser accessibility and compatibility.",
            "Utilized OAuth2 protocols and Google Cloud Functions for secure authentication and token storage.",
        ],
        dates: "November 2021 - February 2022",
        skills: ["Next.js", "Chakra UI", "Vercel", "Video.js", "FFMPEG", "Google Cloud", "Firebase"],
        company: "Rakehealth, LLC",
        color: "rgb(200,186,100)",
        start: 11,
        length: 4,
    },
    {
        title: "Software Engineering Consultant",
        details: [
            "Worked with a dedicated startup team to create a SaaS health and mental training mobile application for professional athletes",
            "Implemented in-app and cloud messaging using Firebase and APN/FCM tokens",
            "Released mobile builds on iOS and Android app stores in a CI/CD environment.",
        ],
        dates: "September - November 2021",
        skills: ["React Native", "XCode", "Android Studio", "Mobile Dev", "CI/CD", "SEO", "Data Analysis"],
        company: "Restoic Inc.",
        color: "rgb(185,120,65)",
        start: 9,
        length: 3,
    },
    {
        title: "Teacher Associate",
        details: [
            "Developed lesson plans for students during their 3-month intensive bootcamp.",
            "Hosted supplementary debugging and troubleshooting sessions.",
            "Offered personal tutoring lessons for students struggling with coursework.",
        ],
        dates: "August - December 2021",
        skills: ["Team Management", "Debugging", "Troubleshooting", "Communications"],
        company: "GA (2)",
        color: "rgb(75,133,97)",
        start: 8,
        length: 5,
    },
    {
        title: "Software Engineering Fellow",
        details: [
            "Attended an 80+ hours/weekly bootcamp focused on full-stack software development",
            "Developed a portfolio using HTML/CSS/JS, SQL, MongoDB, Axios, and Node",
            "Utilized Git version control and managed team repositories",
        ],
        dates: "Summer 2021",
        skills: ["Full Stack Engineering", "Git", "React", "Python", "SQL", "Mongo"],
        company: "GA (1)",
        color: "rgb(150,54,52)",
        start: 5,
        length: 3,
    },
    {
        title: "Licensed Realtor",
        details: [
            "Negotiated deals for buyers at 30-50% below asking price in a hot seller’s market",
            "Located homes and apartments for 6-10 renter clients per month",
            "Created a personal referral network with an 80% returning client rate",
        ],
        dates: "March 2020 - May 2021",
        skills: ["Sales", "Contract Negotiations", "A/B Testing", "Ad Optimization"],
        company: "JPAR",
        color: "rgb(63,109,168)",
        start: 1,
        length: 5,
    },
];