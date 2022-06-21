import { IconType } from "react-icons";

import { BsSquareHalf } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { MdSell } from "react-icons/md";
import { GrStackOverflow } from "react-icons/gr";
import { HiDocumentText } from "react-icons/hi";
import { RiTeamFill, RiBugLine, RiAdvertisementFill } from "react-icons/ri";
import { SiAmazonaws, SiGooglecloud, SiPython, SiFlask, SiPostgresql, SiJquery, SiNextdotjs, SiChakraui, SiVercel, SiFirebase, SiReact, SiXcode, SiAndroidstudio, SiTheconversation, SiGithub, SiMongodb } from "react-icons/si";

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
    skills: {
        icon?: React.ComponentType<IconType>,
        color?: string,
        label?: string,
        delay?: string,
    }[],
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
        skills: [
            {
                icon: SiPython,
                color: "rgb(66,106,149)",
                label: "Python",
            },
            {
                icon: SiPostgresql,
                color: "rgb(61,97,174)",
                label: "SQL"
            },
            {
                icon: SiAmazonaws,
                color: "rgb(191,103,43)",
                label: "AWS Lambda/S3"
            },
            {
                icon: SiJquery,
                color: "rgb(46,98,160)",
                label: "jQuery"
            },
            {
                icon: SiFlask,
                color: "rgb(245,191,73)",
                label: "Flask"
            },
        ],
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
        skills: [
            {
                icon: SiNextdotjs,
                color: "rgb(137,201,199)",
                label: "Next.js"
            },
            {
                icon: SiChakraui,
                color: "rgb(89,178,170)",
                label: "Chakra UI"
            },
            {
                icon: SiVercel,
                color: "rgb(83,83,83)",
                label: "Vercel"
            },
            {
                icon: SiFirebase,
                color: "rgb(207,133,67)",
                label: "Google Firebase"
            },
            {
                icon: SiGooglecloud,
                color: "rgb(205,77,60)",
                label: "Google Cloud"
            },
        ],
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
        skills: [
            {
                icon: SiReact,
                color: "rgb(96,206,238)",
                label: "React Native"
            },
            {
                icon: SiXcode,
                color: "rgb(64,135,215)",
                label: "Xcode"
            },
            {
                icon: SiAndroidstudio,
                color: "rgb(148,187,93)",
                label: "Android Studio"
            },
            {
                icon: FaMobileAlt,
                color: "rgb(206,44,46)",
                label: "Mobile Dev"
            },
        ],
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
        skills: [
            {
                icon: RiTeamFill,
                color: "rgb(75,138,174)",
                label: "Team Management"
            },
            {
                icon: RiBugLine,
                color: "rgb(156,156,234)",
                label: "Debugging"
            },
            {
                icon: SiTheconversation,
                color: "rgb(144,213,192)",
                label: "Communications"
            },
        ],
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
        skills: [
            {
                icon: GrStackOverflow,
                color: "rgb(234,200,88)",
                label: "Full-Stack Engineering"
            },
            {
                icon: SiGithub,
                color: "rgb(111,51,153)",
                label: "Git"
            },
            {
                icon: SiReact,
                color: "rgb(96,206,238)",
                label: "React"
            },
            {
                icon: SiPython,
                color: "rgb(66,106,149)",
                label: "Python",
            },
            {
                icon: SiPostgresql,
                color: "rgb(61,97,174)",
                label: "SQL"
            },
            {
                icon: SiMongodb,
                color: "rgb(100,160,83)",
                label: "Mongo"
            },
        ],
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
        skills: [
            {
                icon: MdSell,
                color: "rgb(89,148,67)",
                label: "Sales"
            },
            {
                icon: HiDocumentText,
                color: "rgb(228,188,138)",
                label: "Contract Negotiations"
            },
            {
                icon: BsSquareHalf,
                color: "rgb(61,77,144)",
                label: "A/B Testing"
            },
            {
                icon: RiAdvertisementFill,
                color: "rgb(168,44,99)",
                label: "Ad Optimization"
            },
        ],
        company: "JPAR",
        color: "rgb(63,109,168)",
        start: 1,
        length: 5,
    },
];