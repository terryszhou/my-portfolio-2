import * as React from "react";
import { IconType } from "react-icons";
import { SiCss3, SiJson, SiNpm, SiReact, SiChakraui, SiVisualstudiocode, SiNetlify } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { VscJson } from "react-icons/vsc";
import { FaNpm } from "react-icons/fa";

export interface featuredProjectListProps {
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

export const featuredProjectList: featuredProjectListProps[] = [
  {
    mainLink: "https://cloudbank-theme.netlify.app/",
    dir: "r",
    image: "/cloudbank-theme.png",
    title: "Cloudbank Theme",
    skills: [
      {
        icon: FaNpm,
        color: "rgb(178,64,59)",
        label: "NPM",
        delay: "0ms",
      },
      {
        icon: VscJson,
        color: "rgb(101,62,233)",
        label: "JSON",
        delay: "40ms",
      },
      {
        icon: SiVisualstudiocode,
        color: "rgb(75,154,233)",
        label: "VS Code",
        delay: "80ms",
      },
      {
        icon: SiNetlify,
        color: "rgb(86,165,172)",
        label: "Netlify",
        delay: "120ms",
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
        delay: "320ms",
      },
      {
        icon: <SiVisualstudiocode />,
        href: "https://marketplace.visualstudio.com/items?itemName=terryszhou.cloudbank",
        delay: "320ms",
      },
      {
        icon: <FiGithub />,
        delay: "320ms",
        href: "https://github.com/terryszhou/cloudbank",
      },
    ]
  },
];