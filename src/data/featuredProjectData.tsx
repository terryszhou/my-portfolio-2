import * as React from "react";
import { IconType } from "react-icons";
import { SiCss3, SiReact, SiChakraui } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

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
    mainLink: "https://google.com",
    dir: "r",
    image: "/cloudbank-theme.png",
    title: "Test",
    skills: [
      {
        icon: SiCss3,
        color: "rgb(229,212,88)",
        label: "JavaScript/TypeScript",
        delay: "0ms",
      },
      {
        icon: SiReact,
        color: "rgb(114,183,208)",
        label: "React",
        delay: "40ms",
      },
      {
        icon: SiChakraui,
        color: "rgb(89,178,170)",
        label: "Chakra Ui",
        delay: "80ms",
      },
    ],
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ],
    links: [
      {
        icon: <FiGithub />,
        delay: "320ms",
        href: "https://github.com/terryszhou",
      },
    ]
  },
];