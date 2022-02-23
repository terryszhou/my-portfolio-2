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
    dates: "Mar 2020 - May 2021",
    skills: ["Sales", "A/B Testing", "Ad Optimization"],
    company: "JPAR",
    color: "blue.500",
    start: 0,
    length: 4,
  },
  {
    title: "Software Engineering Fellow",
    dates: "Summer 2021",
    skills: ["Full Stack Engineering", "Git", "React", "Python", "SQL", "Mongo"],
    company: "General Assembly",
    color: "red.600",
    start: 4,
    length: 3,
  },
  {
    title: "Teacher Associate",
    dates: "Aug - Dec 2021",
    skills: ["Team Management", "Debugging", "Troubleshooting", "Communications"],
    company: "General Assembly",
    color: "green.500",
    start: 7,
    length: 5,
  },
  {
    title: "Software Engineering Consultant",
    dates: "Sep - Nov 2021",
    skills: ["React Native", "Mobile Development", "CI/CD", "Data Analysis"],
    company: "Restoic Inc.",
    color: "red.500",
    start: 8,
    length: 3,
  },
  {
    title: "Software Engineering Consultant",
    dates: "Nov 2021 - Feb 2022",
    skills: ["Next.js", "Chakra UI", "Vercel", "Google Cloud"],
    company: "Rakehealth, LLC",
    color: "yellow.300",
    start: 10,
    length: 4,
  },
];