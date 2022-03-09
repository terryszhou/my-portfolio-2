import * as React from "react";
import { IconType } from "react-icons";
import { SiVisualstudiocode, SiNetlify } from "react-icons/si";
import { FiGithub, FiPackage } from "react-icons/fi";
import { VscJson } from "react-icons/vsc";
import { FaNpm } from "react-icons/fa";

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