import * as React from "react";
import { IconType } from "react-icons";
import { BiRun } from "react-icons/bi";
import { CgPokemon } from "react-icons/cg";
import { FaCat, FaGamepad, FaKey, FaPaintBrush } from "react-icons/fa";
import { FiGithub, FiPackage, FiExternalLink } from "react-icons/fi";
import { GiConwayLifeGlider } from "react-icons/gi";
import { SiPostgresql, SiExpress, SiPython, SiMicrosoftazure, SiVisualstudiocode, SiNetlify, SiReact, SiMongodb, SiHtml5, SiCss3 } from "react-icons/si";
import { VscJson, VscGear } from "react-icons/vsc";


export interface oldProjectListProps {
  title: string,
  details: string[]
  skills: {
    icon: React.ComponentType<IconType>,
    color: string,
    label: string,
    delay: string,
  }[],
  links: {
    icon: React.ReactElement,
    href: string,
    delay: string,
  }[],
}

export const oldProjectList: oldProjectListProps[] = [
  {
    title: "Python of Life",
    details: [
      "Three-day sprint based on Conway's Game of Life",
      "Features four separate rulesets and built-in object creation tools",
    ],
    skills: [
      {
        icon: SiPython,
        color: "rgb(65,104,146)",
        label: "Python",
        delay: "80ms",
      },
      {
        icon: FaGamepad,
        color: "rgb(113,221,76)",
        label: "Pygame",
        delay: "120ms",
      },
    ],
    links: [
      {
        icon: <FiGithub />,
        href: "https://github.com/terryszhou/p4-python-of-life/",
        delay: "320ms",
      },
    ]
  },
  {
    title: "Totemize",
    details: [
      "Full-stack MERN mockup of a mobile festival locator app",
      "Utilized JWT tokens and hashes for user security",
    ],
    skills: [
      {
        icon: SiExpress,
        color: "rgb(42,42,42)",
        label: "Express",
        delay: "80ms",
      },
      {
        icon: SiReact,
        color: "rgb(142,210,139)",
        label: "React",
        delay: "120ms",
      },
      {
        icon: VscGear,
        color: "rgb(118,65,137)",
        label: "Axios",
        delay: "160ms",
      },
      {
        icon: SiMongodb,
        color: "rgb(72,142,76)",
        label: "MongoDB",
        delay: "200ms",
      },
      {
        icon: FaKey,
        color: "rgb(92,103,106)",
        label: "JWT",
        delay: "240ms",
      },
    ],
    links: [
      {
        icon: <FiExternalLink />,
        href: "https://friendly-sinoussi-f96db3.netlify.app/",
        delay: "320ms",
      },
      {
        icon: <FiGithub />,
        href: "https://github.com/terryszhou/MERN-Auth-Server/",
        delay: "320ms",
      },
      {
        icon: <FiGithub />,
        href: "https://github.com/terryszhou/P3-auth-client/",
        delay: "320ms",
      },
    ]
  },
  {
    title: "PokéMap",
    details: [
      "Full stack web app that makes API calls to pokeapi.co",
      "Uses Sequelize on the back end to store Pokemon data",
      "Allows users to explore and catch Pokémon in Kanto",
    ],
    skills: [
      {
        icon: SiExpress,
        color: "rgb(42,42,42)",
        label: "Express",
        delay: "80ms",
      },
      {
        icon: SiReact,
        color: "rgb(142,210,139)",
        label: "React",
        delay: "120ms",
      },
      {
        icon: VscGear,
        color: "rgb(118,65,137)",
        label: "Axios",
        delay: "160ms",
      },
      {
        icon: SiPostgresql,
        color: "rgb(61,97,135)",
        label: "SQL",
        delay: "200ms",
      },
    ],
    links: [
      {
        icon: <FiExternalLink />,
        href: "https://pokemap-kanto.herokuapp.com/",
        delay: "320ms",
      },
      {
        icon: <FiGithub />,
        href: "https://github.com/terryszhou/PokeMap/",
        delay: "320ms",
      },
    ]
  },
  {
    title: "Cat Crawler",
    details: [
      "Dungeon crawler-style video game coded in Canvas",
      "Features WASD controls and randomly generated enemies",
      "One-week sprint coded early on in my development career",
    ],
    skills: [
      {
        icon: SiHtml5,
        color: "rgb(200,85,51)",
        label: "HTML",
        delay: "80ms",
      },
      {
        icon: SiCss3,
        color: "rgb(51,106,168)",
        label: "CSS",
        delay: "120ms",
      },
      {
        icon: FaPaintBrush,
        color: "rgb(147,42,92)",
        label: "Canvas",
        delay: "160ms",
      },
    ],
    links: [
      {
        icon: <FiExternalLink />,
        href: "https://terryszhou.github.io/cat-crawler/",
        delay: "320ms",
      },
      {
        icon: <FiGithub />,
        href: "https://github.com/terryszhou/cat-crawler/",
        delay: "320ms",
      },
    ]
  },
];

export const wheelHexArray = [
  {
    id: 0,
    color: "",
    currentRotation: 330,
    left: "-14.7%",
    top: "-25%",
    transitionDelay: "0ms"
  },
  {
    id: 1,
    color: "linear-gradient(#1e1e1e 25%, #58c7a2)",
    currentRotation: 30,
    left: "14.7%",
    top: "-25%",
    icon: SiVisualstudiocode,
    image: "/cloudbank-desktop.png",
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
    color: "linear-gradient(rgb(193,98,204), rgb(208,112,56))",
    currentRotation: 150,
    left: "14.7%",
    top: "26%",
    icon: BiRun,
    image: "/totemize-mobile.png",
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
