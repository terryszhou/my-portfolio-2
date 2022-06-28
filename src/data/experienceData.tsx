import { useColorModeValue as colorMode } from "@chakra-ui/react"
import { IconType } from "react-icons";

import { BsSquareHalf } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { MdSell } from "react-icons/md";
import { GrStackOverflow } from "react-icons/gr";
import { HiDocumentText } from "react-icons/hi";
import { RiTeamFill, RiBugLine, RiAdvertisementFill } from "react-icons/ri";
import { SiAmazonaws, SiSlack, SiGooglecloud, SiPython, SiFlask, SiPandas, SiPostgresql, SiJquery,
        SiNextdotjs, SiMicrosoftexcel, SiChakraui, SiVercel, SiFirebase, SiReact, SiXcode, SiAndroidstudio,
        SiTheconversation, SiMicrosoftteams, SiGithub, SiMongodb } from "react-icons/si";

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
        color?: string,
        delay?: string,
        icon?: React.ComponentType<IconType>,
        label?: string,
        marginX?: number | string,
    }[],
    company: string,
    companyFull: string,
    companyLink: string,
    color: string,
    start: number,
    length: number
};

export const expArray: expArrayProps[] = [
    {
        title: "Sr. Analyst, Data Operations",
        details: [
            "Analyzed and visualized health policy data using Python and DataTables",
            "Developed and deployed data analysis tools with Python/AWS",
            "In charge of all web app front-end/API development with Flask/jQuery",
        ],
        dates: "April 2022 - Current",
        skills: [
            {
                icon: SiPython,
                color: "rgb(66,106,149)",
                label: "Python",
                delay: "0ms"
            },
            {
                icon: SiPandas,
                color: "rgb(202,42,128)",
                label: "Pandas",
                delay: "60ms"
            },
            {
                icon: SiMicrosoftexcel,
                color: "rgb(46,106,61)",
                label: "Excel",
                delay: "120ms"
            },
            {
                icon: SiMicrosoftteams,
                color: "rgb(119,124,216)",
                label: "Teams",
                delay: "180ms"
            },
            {
                icon: SiAmazonaws,
                color: "rgb(191,103,43)",
                label: "AWS",
                delay: "240ms"
            },
            {
                icon: SiJquery,
                color: "rgb(46,98,160)",
                label: "jQuery",
                delay: "300ms"
            },
            {
                icon: SiFlask,
                // color: colorMode("white", "black"),
                // color: "rgb(245,191,73)",
                label: "Flask",
                delay: "360ms"
            },
        ],
        company: "LMI",
        companyFull: "Logistics Management Institute",
        companyLink: "https://www.lmi.org/",
        color: "rgb(57,64,120)",
        start: 16.3,
        length: 1,
    },
    {
        title: "Software Engineering Consultant",
        details: [
            "Built an OOP-oriented async video editing/messaging SaaS web application from the ground up",
            "Designed app with emphasis on SEO and cross-browser accessibility and compatibility",
            "Utilized OAuth2 protocols and Google Cloud Functions for secure authentication and token storage",
        ],
        dates: "November 2021 - February 2022",
        skills: [
            {
                icon: SiNextdotjs,
                color: "rgb(137,201,199)",
                label: "Next.js",
                delay: "0ms"
            },
            {
                icon: SiChakraui,
                color: "rgb(89,178,170)",
                label: "Chakra UI",
                delay: "60ms"
            },
            {
                icon: SiVercel,
                color: "rgb(83,83,83)",
                label: "Vercel",
                delay: "120ms"
            },
            {
                icon: SiFirebase,
                color: "rgb(207,133,67)",
                label: "Google Firebase",
                delay: "180ms"
            },
            {
                icon: SiGooglecloud,
                color: "rgb(205,77,60)",
                label: "Google Cloud",
                delay: "240ms"
            },
            {
                icon: SiSlack,
                color: "rgb(88,48,95)",
                label: "Slack",
                delay: "300ms"
            },
        ],
        company: "Rake Health",
        companyFull: "Rake Health, LLC",
        companyLink: "https://www.rakehealth.com/",
        color: "rgb(200,186,100)",
        start: 11,
        length: 4,
    },
    {
        title: "Software Engineering Consultant",
        details: [
            "Worked with a dedicated startup team to create a SaaS health and mental training mobile application for professional athletes",
            "Implemented in-app and cloud messaging using Firebase and APN/FCM tokens",
            "Released mobile builds on iOS and Android app stores in a CI/CD environment",
        ],
        dates: "September - November 2021",
        skills: [
            {
                icon: SiReact,
                color: "rgb(96,206,238)",
                label: "React Native",
                delay: "0ms"
            },
            {
                icon: SiXcode,
                color: "rgb(64,135,215)",
                label: "Xcode",
                delay: "60ms"
            },
            {
                icon: SiAndroidstudio,
                color: "rgb(148,187,93)",
                label: "Android Studio",
                delay: "120ms"
            },
            {
                icon: FaMobileAlt,
                color: "rgb(206,44,46)",
                label: "Mobile Dev",
                delay: "180ms"
            },
            {
                icon: SiSlack,
                color: "rgb(88,48,95)",
                label: "Slack",
                delay: "240ms"
            },
        ],
        company: "Restoic",
        companyFull: "Restoic Inc.",
        companyLink: "https://restoic.com/",
        color: "rgb(185,120,65)",
        start: 9,
        length: 3,
    },
    {
        title: "Teacher Associate",
        details: [
            "Developed lesson plans for students during their 3-month intensive bootcamp",
            "Hosted supplementary debugging and troubleshooting sessions",
            "Offered personal tutoring lessons for students struggling with coursework",
        ],
        dates: "August - December 2021",
        skills: [
            {
                icon: RiTeamFill,
                color: "rgb(75,138,174)",
                label: "Team Management",
                delay: "0ms"
            },
            {
                icon: RiBugLine,
                color: "rgb(156,156,234)",
                label: "Debugging",
                delay: "60ms"
            },
            {
                icon: SiTheconversation,
                color: "rgb(144,213,192)",
                label: "Communications",
                delay: "120ms"
            },
        ],
        company: "GA (2)",
        companyFull: "General Assembly (2)",
        companyLink: "https://generalassemb.ly/",
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
                label: "Full-Stack Engineering",
                delay: "0ms"
            },
            {
                icon: SiGithub,
                color: "rgb(111,51,153)",
                label: "Git",
                delay: "60ms"
            },
            {
                icon: SiReact,
                color: "rgb(96,206,238)",
                label: "React",
                delay: "120ms"
            },
            {
                icon: SiPython,
                color: "rgb(66,106,149)",
                label: "Python",
                delay: "180ms"
            },
            {
                icon: SiPostgresql,
                color: "rgb(61,97,174)",
                label: "SQL",
                delay: "240ms"
            },
            {
                icon: SiMongodb,
                color: "rgb(100,160,83)",
                label: "Mongo",
                delay: "300ms"
            },
        ],
        company: "GA (1)",
        companyFull: "General Assembly (1)",
        companyLink: "https://generalassemb.ly/",
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
                label: "Sales",
                delay: "0ms"
            },
            {
                icon: HiDocumentText,
                color: "rgb(228,188,138)",
                label: "Contract Negotiations",
                delay: "60ms"
            },
            {
                icon: BsSquareHalf,
                color: "rgb(61,77,144)",
                label: "A/B Testing",
                delay: "120ms"
            },
            {
                icon: RiAdvertisementFill,
                color: "rgb(168,44,99)",
                label: "Ad Optimization",
                delay: "180ms"
            },
        ],
        company: "JPAR",
        companyFull: "JP & Associates Realtors",
        companyLink: "https://www.jpar.com/",
        color: "rgb(63,109,168)",
        start: 1,
        length: 5,
    },
];
