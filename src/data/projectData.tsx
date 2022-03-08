import { BiRun } from "react-icons/bi";
import { CgPokemon } from "react-icons/cg";
import { FaCat } from "react-icons/fa";
import { GiConwayLifeGlider } from "react-icons/gi";
import { SiVisualstudiocode } from "react-icons/si";

interface listArrayProps {
  id: number,
  title: string,
  details: string[]
  skillSet: string[],
  links: {
    link: string,
    linkText: string,
  }[],
}

export const listArray: listArrayProps[] = [
  {
    id: 0,
    title: "Try selecting a hexagon!",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
      "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
    ],
    skillSet: ["Test", "Test"],
    links: [
      {
        link: "https://github.com/blakedong/demo-studio",
        linkText: "Github Repo",
      }
    ],
  },
  {
    id: 1,
    title: "Coming Soon!",
    details: [

    ],
    skillSet: [],
    links: [
      
    ],
  },
  {
    id: 2,
    title: "Cloudbank",
    details: [
      "Free custom color theme for Visual Studio Code editor",
      "Dark but vibrant cyberpunk/art deco aesthetic ",
      "Inspired by 'Transistor' by SuperGiant Games",
    ],
    skillSet: ["JSON", "Microsoft Azure", "Netlify", "Package Bundling",],
    links: [
      {
        link: "https://cloudbank-theme.netlify.app/",
        linkText: "Demo on Netlify"
      },
      {
        link: "https://marketplace.visualstudio.com/items?itemName=terryszhou.cloudbank",
        linkText: "Visual Studio Marketplace"
      },
      {
        link: "https://github.com/terryszhou/cloudbank",
        linkText: "Github Repo"
      },
    ]
  },
  {
    id: 3,
    title: "Python of Life",
    details: [
      "Three-day sprint based on Conway's Game of Life",
      "Features four separate rulesets and built-in object creation tools",
    ],
    skillSet: ["Python", "Pygame"],
    links: [
      {
        link: "https://github.com/terryszhou/p4-python-of-life/",
        linkText: "Github Repo"
      },
    ]
  },
  {
    id: 4,
    title: "Totemize",
    details: [
      "Full-stack MERN mockup of a festival locator app coded in collaboration with a UI/UX team with a mobile-based design philosophy",
      "Utilized JWT tokens and hashes for user security",
    ],
    skillSet: ["Express", "React", "Axios", "MongoDB", "JWT"],
    links: [
      {
        link: "https://friendly-sinoussi-f96db3.netlify.app/",
        linkText: "Live Site"
      },
      {
        link: "https://github.com/terryszhou/MERN-Auth-Server/",
        linkText: "Back End"
      },
      {
        link: "https://github.com/terryszhou/P3-auth-client/",
        linkText: "Front End"
      },
    ]
  },
  {
    id: 5,
    title: "PokéMap",
    details: [
      "Full stack web application using Express/Axios to make RESTful API calls to pokeapi.co and serebii.net and Sequelize to store Pokemon data",
      "Renders a map of the Kanto region + Pokedex on the front-end, allowing users to explore and add wild Pokemon to their party",
    ],
    skillSet: ["Express", "React", "Axios", "SQL"],
    links: [
      {
        link: "https://pokemap-kanto.herokuapp.com/",
        linkText: "Live Site"
      },
      {
        link: "https://github.com/terryszhou/PokeMap/",
        linkText: "Github Repo"
      },
    ]
  },
  {
    id: 6,
    title: "Cat Crawler",
    details: [
      "Dungeon crawler-style video game featuring WASD controls and randomly generated enemies",
      "One-week sprint coded early on in my development career",
    ],
    skillSet: ["Canvas", "JavaScript", "CSS"],
    links: [
      {
        link: "https://terryszhou.github.io/cat-crawler/",
        linkText: "Live Site"
      },
      {
        link: "https://github.com/terryszhou/cat-crawler/",
        linkText: "Github Repo"
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
