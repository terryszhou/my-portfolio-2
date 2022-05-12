import * as React from "react";
import { IconType } from "react-icons";
import { SiVisualstudiocode, SiNetlify, SiPython, SiNumpy, SiPandas, SiMicrosoftexcel } from "react-icons/si";
import { FiGithub, FiPackage } from "react-icons/fi";
import { VscJson } from "react-icons/vsc";
import { FaNpm, FaLanguage } from "react-icons/fa";

export interface newProjectListProps {
  mainLink: string,
  dir: string,
  image: string,
  title: string,
  skills: {
    icon: React.ComponentType<IconType>,
    color: string,
    label: string,
    delay: string,
  }[],
  details: string[],
  links: {
    icon: React.ReactElement,
    delay: string,
    href: string,
  }[],
}

export const newProjectList: newProjectListProps[] = [
  {
    mainLink: "https://cloudbank-theme.netlify.app/",
    dir: "r",
    image: "/cloudbank-theme.png",
    title: "Cloudbank Theme",
    skills: [
      {
        icon: SiVisualstudiocode,
        color: "rgb(75,154,233)",
        label: "VS Code",
        delay: "0ms",
      },
      {
        icon: FaNpm,
        color: "rgb(178,64,59)",
        label: "NPM",
        delay: "4ms",
      },
      {
        icon: VscJson,
        color: "rgb(101,62,233)",
        label: "JSON",
        delay: "80ms",
      },
      {
        icon: FiPackage,
        color: "rgb(68,137,214)",
        label: "Package Management",
        delay: "120ms",
      },
      {
        icon: SiNetlify,
        color: "rgb(86,165,172)",
        label: "Netlify",
        delay: "160ms",
      },
    ],
    details: [
      "Free custom color theme for Visual Studio Code",
      "Dark but vibrant cyberpunk/art deco aesthetic ",
      "Available now on Visual Studio Marketplace",
    ],
    links: [
      {
        icon: <SiNetlify />,
        href: "https://cloudbank-theme.netlify.app/",
        delay: "0ms",
      },
      {
        icon: <SiVisualstudiocode />,
        href: "https://marketplace.visualstudio.com/items?itemName=terryszhou.cloudbank",
        delay: "80ms",
      },
      {
        icon: <FiGithub />,
        delay: "160ms",
        href: "https://github.com/terryszhou/cloudbank",
      },
    ]
  },
  {
    mainLink: "https://alice-nltk.netlify.app/",
    dir: "l",
    image: "/alice-screen.png",
    title: "Down the (DATA) Rabbit Hole",
    skills: [
      {
        icon: SiPython,
        color: "rgb(66,106,149)",
        label: "Python",
        delay: "0ms",
      },
      {
        icon: SiNumpy,
        color: "rgb(82,112,190)",
        label: "NumPy",
        delay: "4ms",
      },
      {
        icon: SiPandas,
        color: "rgb(201,43,127)",
        label: "Pandas",
        delay: "80ms",
      },
      {
        icon: FaLanguage,
        color: "rgb(70,139,140)",
        label: "Natural Language Processing",
        delay: "120ms",
      },
      {
        icon: SiMicrosoftexcel,
        color: "rgb(75,155,95)",
        label: "Excel/Data Visualization",
        delay: "160ms",
      },
    ],
    details: [
      "NLP data analysis of 'Alice in Wonderland'",
      "Data processed with NLTK, NumPy, and Pandas",
      "Results processed with Recharts"
    ],
    links: [
      {
        icon: <SiNetlify />,
        href: "https://alice-nltk.netlify.app/",
        delay: "0ms",
      },
      {
        icon: <FiGithub />,
        delay: "80ms",
        href: "https://github.com/terryszhou/alice-nltk",
      },
    ]
  },
];
