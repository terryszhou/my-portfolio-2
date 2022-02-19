import { IconButton, Divider, HStack, keyframes, useColorMode } from "@chakra-ui/react";
import * as React from "react";
import { FiCodepen, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { PageProps } from "../interfaces";

const fadeDown: string = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const Social = ({ y, scrollDir }: PageProps ) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      position={"fixed"}
      top={
        y > 80 && scrollDir === "down"
          ? "2%"
          : y !== 0 && scrollDir === "up"
            ? "12%"
            : "17%"
      }
      transition={"200ms ease-out"}
      right={0}
      zIndex={1}>
      <SocialIcon
        icon={<FiGithub />}
        delay={"240ms"} 
        href={"https://github.com/terryszhou"} />
      <SocialIcon
        icon={<FiLinkedin />}
        delay={"160ms"}
        href={"https://www.linkedin.com/in/terryszhou"} />
      <SocialIcon
        icon={<FiInstagram />}
        delay={"80ms"}
        href={"https://instagram.com/terry.s.zhou"} />
      <SocialIcon
        icon={<FiCodepen />}
        delay={"0ms"} 
        href={"https://codepen.io/terryszhou"} />
      <Divider
        borderColor={colorMode === "light" ? "black" : "white"}
        width={20} />
    </HStack>
  );
};

interface SocialIconProps {
  icon: React.ReactElement,
  delay: string,
  href: string,
};

export const SocialIcon = ({ icon, delay, href }: SocialIconProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const fadeDownAnim: string = `${fadeDown} 200ms ${delay} forwards`;

  return (
    <IconButton
      as={"a"}
      href={href}
      target={"_blank"}
      rel={"noreferrer"}
      animation={fadeDownAnim}
      aria-label={"social-icon-button"}
      bgColor={"transparent"}
      border={"1px solid"}
      icon={icon}
      opacity={"0"}
      size={"sm"}
      transition={"100ms ease-out"}
      _hover={{
        bgColor: colorMode === "light" ? "black" : "white",
        color: colorMode === "light" ? "white" : "black",
      }}
    />
  );
};