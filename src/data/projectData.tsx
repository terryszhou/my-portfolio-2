import { BiRun } from "react-icons/bi";
import { CgPokemon } from "react-icons/cg";
import { FaCat } from "react-icons/fa";
import { GiWingfoot, GiConwayLifeGlider, GiVideoConference } from "react-icons/gi";

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
    title: "Hipdemo",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
      "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
    ],
    skillSet: ["Next", "Vercel", "Firebase", "VideoJS"],
    links: [
      {
        link: "https://github.com/blakedong/demo-studio",
        linkText: "Github Repo",
      }
    ],
  },
  {
    id: 2,
    title: "Restoic",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
      "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
    ],
    skillSet: ["React Native", "XCode", "Android Studio"],
    links: [
      {
        link: "https://apps.apple.com/tt/app/restoic-performance-mindset/id1557936632",
        linkText: "App Store"
      },
      {
        link: "https://play.google.com/store/apps/details?id=com.restoic&hl=en_US&gl=US",
        linkText: "Google Play"
      },
    ]
  },
  {
    id: 3,
    title: "Python of Life",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
      "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
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
    title: "Pixel Runner",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
      "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
    ],
    skillSet: ["Python", "Pygame"],
    links: [
      {
        link: "https://github.com/terryszhou/pixel-runner/",
        linkText: "Github Repo"
      },
    ]
  },
  {
    id: 5,
    title: "PokéMap",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
      "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      "Assumenda, quia temporibus eveniet a libero incidunt suscipit",
      "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum",
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
