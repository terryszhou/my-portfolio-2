import { BiRun } from "react-icons/bi";
import { GiWingfoot, GiConwayLifeGlider, GiVideoConference } from "react-icons/gi";
import { CgPokemon } from "react-icons/cg";
import { FaCat } from "react-icons/fa";

export const listArray = [
  {
    id: 0,
    title: "Try selecting a hexagon!",
    itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
    itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
    skillSet: "Test",
    links: "Test"
  },
  {
    id: 1,
    title: "Hipdemo",
    itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
    itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
    skillSet: "Next, Vercel, Firebase, VideoJS,",
    links: "Github Repo"
  },
  {
    id: 2,
    title: "Restoic",
    itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
    itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
    skillSet: "React Native, XCode, Android Studio",
    links: "App Store | Google Play Store"
  },
  {
    id: 3,
    title: "Python of Life",
    itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
    itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
    skillSet: "Python, Pygame",
    links: "Github Repo"
  },
  {
    id: 4,
    title: "Pixel Runner",
    itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
    itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
    skillSet: "Python, Pygame",
    links: "Github Repo"
  },
  {
    id: 5,
    title: "PokéMap",
    itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
    itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
    skillSet: "Express, React, Axios, SQL",
    links: "Live Site | Github Repo"
  },
  {
    id: 6,
    title: "Cat Crawler",
    itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
    itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
    skillSet: "Canvas, JavaScript, CSS",
    links: "Live Site | Github Repo"
  },
];

export const wheelHexArray = [
  {
    id: 0,
    color: "linear-gradient(rgb(130,104,235), rgb(237,128,93) 90%)",
    currentRotation: 330,
    left: "-14.7%",
    top: "-25%",
    icon: GiVideoConference,
    transitionDelay: "0ms"
  },
  {
    id: 1,
    color: "linear-gradient(rgb(230,60,42), rgb(170,170,170) 90%)",
    currentRotation: 30,
    left: "14.7%",
    top: "-25%",
    icon: GiWingfoot,
    image: "/restoic-app.png",
    transitionDelay: "40ms"
  },
  {
    id: 2,
    color: "linear-gradient(rgb(108,37,152), rgb(189,54,54))",
    currentRotation: 90,
    left: "29.4%",
    top: "0.5%",
    icon: GiConwayLifeGlider,
    image: "/game-of-life-desktop.png",
    transitionDelay: "80ms"
  },
  {
    id: 3,
    color: "linear-gradient(rgb(193,98,204), rgb(142,232,232))",
    currentRotation: 150,
    left: "14.7%",
    top: "26%",
    icon: BiRun,
    image: "/pixel-runner-desktop.png",
    transitionDelay: "120ms"
  },
  {
    id: 4,
    color: "linear-gradient(rgb(61,75,130), rgb(103, 194, 78))",
    currentRotation: 210,
    left: "-14.7%",
    top: "26%",
    icon: CgPokemon,
    image: "/pokemap-desktop.png",
    transitionDelay: "160ms"
  },
  {
    id: 5,
    color: "linear-gradient(rgb(99,40,52), rgb(204, 124, 39))",
    currentRotation: 270,
    left: "-29.4%",
    top: "0.5%",
    icon: FaCat,
    image: "/cat-crawler-desktop.png",
    transitionDelay: "200ms"
  },
];

export const monArr: string[] = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  "Jan", "Feb",
];

export const yearArr: string[] = [
  "2021", "", "", "", "", "", "", "", "", "", "", "", "2022", "",
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
    title: "Licensed Realtor",
    details: [
      "Negotiated deals for buyers at 30-50% below asking price in a hot seller’s market.",
      "Located homes and apartments for 6-10 renter clients per month.",
      "Created a personal referral network with an 80% returning client rate.",
    ],
    dates: "Mar 2020 - May 2021",
    skills: ["Sales", "Contract Negotiations", "A/B Testing", "Ad Optimization"],
    company: "JPAR",
    color: "blue.500",
    start: 1,
    length: 5,
  },
  {
    title: "Software Engineering Fellow",
    details: [
      "Attended an 80+ hours/weekly software development bootcamp focused on product development fundamentals, object-oriented programming, MVC frameworks, and data modeling.",
      "Developed a portfolio of individual projects and learned full stack technologies & frameworks, including HTML/CSS/JavaScript, SQL, MongoDB, Axios, and Node.",
      "Experienced with Git and version control, including both managing and contributing to team projects, as well as team management softwares such as Slack and Microsoft Teams.",
    ],
    dates: "Summer 2021",
    skills: ["Full Stack Engineering", "Git", "React", "Python", "SQL", "Mongo"],
    company: "General Assembly (1)",
    color: "red.600",
    start: 5,
    length: 3,
  },
  {
    title: "Teacher Associate",
    details: [
      "Developed lesson plans for students during their 3-month intensive bootcamp.",
      "Hosted supplementary debugging and troubleshooting sessions.",
      "Offered personal tutoring lessons for students struggling with coursework.",
    ],
    dates: "Aug - Dec 2021",
    skills: ["Team Management", "Debugging", "Troubleshooting", "Communications"],
    company: "General Assembly (2)",
    color: "green.500",
    start: 8,
    length: 5,
  },
  {
    title: "Software Engineering Consultant",
    details: [
      "Worked with a small and dedicated startup team to create a SaaS health and mental training mobile application for professional athletes and teams using React Native/MUI as primary frameworks.",
      "Spearheaded front end development and UI/UX improvements for desktop.",
      "Implemented in-app and cloud messaging functionality for the mobile app using Firebase and APN/FCM tokens securely stored in a Django database.",
      "Released mobile builds on iOS and Android app stores in a CI/CD environment.",
    ],
    dates: "Sep - Nov 2021",
    skills: ["React Native", "Mobile Development", "CI/CD", "SEO", "Data Analysis"],
    company: "Restoic Inc.",
    color: "red.500",
    start: 9,
    length: 3,
  },
  {
    title: "Software Engineering Consultant",
    details: [
      "Designed and built an OOP-oriented async video editing/messaging SaaS web application from the ground up with Video.js/Nodemailer.",
      "Wrote and hosted front end using a Chakra UI/Next/Vercel-based tech stack with emphasis on SEO and cross-browser accessibility and compatibility.",
      "Utilized OAuth2 protocols and Google Cloud Functions for user-friendly authentication and secure personal token storage.",
    ],
    dates: "Nov 2021 - Feb 2022",
    skills: ["Next.js", "Chakra UI", "Vercel", "Google Cloud"],
    company: "Rakehealth, LLC",
    color: "yellow.300",
    start: 11,
    length: 4,
  },
];