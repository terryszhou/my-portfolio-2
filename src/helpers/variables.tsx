import { BiRun } from "react-icons/bi";
import { GiWingfoot, GiConwayLifeGlider, GiVideoConference } from "react-icons/gi";
import { CgPokemon } from "react-icons/cg";
import { FaCat } from "react-icons/fa";

export const listArray = [
  {
    title: "Try selecting a hexagon!",
    itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
    itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
    skillSet: "Test",
    links: "Test"
  },
  {
    title: "Hipdemo",
    itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
    itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
    skillSet: "Next, Vercel, Firebase, VideoJS,",
    links: "Github Repo"
  },
  {
    title: "Restoic",
    itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
    itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
    skillSet: "React Native, XCode, Android Studio",
    links: "App Store | Google Play Store"
  },
  {
    title: "Python of Life",
    itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
    itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
    skillSet: "Python, Pygame",
    links: "Github Repo"
  },
  {
    title: "Pixel Runner",
    itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
    itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
    skillSet: "Python, Pygame",
    links: "Github Repo"
  },
  {
    title: "PokéMap",
    itemOne: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    itemTwo: "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
    itemThree: "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
    skillSet: "Express, React, Axios, SQL",
    links: "Live Site | Github Repo"
  },
  {
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
    color: "linear-gradient(rgb(130,104,235), rgb(237,128,93) 90%)",
    currentRotation: 330,
    left: "-14.7%",
    top: "-25%",
    icon: GiVideoConference,
    transitionDelay: "0ms"
  },
  {
    color: "linear-gradient(rgb(230,60,42), rgb(170,170,170) 90%)",
    currentRotation: 30,
    left: "14.7%",
    top: "-25%",
    icon: GiWingfoot,
    image: "/restoic-app.png",
    transitionDelay: "40ms"
  },
  {
    color: "linear-gradient(rgb(108,37,152), rgb(189,54,54))",
    currentRotation: 90,
    left: "29.4%",
    top: "0.5%",
    icon: GiConwayLifeGlider,
    image: "/game-of-life-desktop.png",
    transitionDelay: "80ms"
  },
  {
    color: "linear-gradient(rgb(193,98,204), rgb(142,232,232))",
    currentRotation: 150,
    left: "14.7%",
    top: "26%",
    icon: BiRun,
    image: "/pixel-runner-desktop.png",
    transitionDelay: "120ms"
  },
  {
    color: "linear-gradient(rgb(61,75,130), rgb(103, 194, 78))",
    currentRotation: 210,
    left: "-14.7%",
    top: "26%",
    icon: CgPokemon,
    image: "/pokemap-desktop.png",
    transitionDelay: "160ms"
  },
  {
    color: "linear-gradient(rgb(99,40,52), rgb(204, 124, 39))",
    currentRotation: 270,
    left: "-29.4%",
    top: "0.5%",
    icon: FaCat,
    image: "/cat-crawler-desktop.png",
    transitionDelay: "200ms"
  },
];