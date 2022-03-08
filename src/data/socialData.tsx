import * as React from "react";

import { FiCodepen, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { SiCodewars } from "react-icons/si";

interface socialListProps {
  delay: string,
  href: string,
  icon: React.ReactElement,
};

export const socialList: socialListProps[] = [
  {
    delay: "320ms",
    href: "https://github.com/terryszhou",
    icon: <FiGithub />,
  },
  {
    delay: "240ms",
    href: "https://www.linkedin.com/in/terryszhou",
    icon: <FiLinkedin />,
  },
  {
    delay: "160ms",
    href: "https://instagram.com/terry.s.zhou",
    icon: <FiInstagram />,
  },
  {
    delay: "80ms",
    href: "https://codepen.io/terryszhou",
    icon: <FiCodepen />,
  },
  {
    delay: "0ms",
    href: "https://www.codewars.com/users/terryszhou/",
    icon: <SiCodewars />,
  },
];