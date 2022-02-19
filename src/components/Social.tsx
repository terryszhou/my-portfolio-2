import { IconButton, Divider, HStack, keyframes, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import * as React from "react";
import { FiCodepen, FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
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

export const Social = ({ y, scrollDir, isLargeScreen }: PageProps ) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const fadeDownAnim: string = `${fadeDown} 200ms 180ms forwards`;

  return (<>
    <HStack
      position={"fixed"}
      top={
        y > 80 && scrollDir === "down"
          ? "2%"
          : y > 60 && scrollDir === "up"
            ? "12%"
            : "17%"
      }
      transition={"200ms ease-out"}
      right={0}
      zIndex={1}>
      <SocialIcon
        icon={<FiGithub />}
        delay={"240ms"} 
        href={"https://github.com/terryszhou"} 
        isLargeScreen={isLargeScreen} />
      <SocialIcon
        icon={<FiLinkedin />}
        delay={"160ms"}
        href={"https://www.linkedin.com/in/terryszhou"} 
        isLargeScreen={isLargeScreen} />
      <SocialIcon
        icon={<FiInstagram />}
        delay={"80ms"}
        href={"https://instagram.com/terry.s.zhou"} 
        isLargeScreen={isLargeScreen} />
      <SocialIcon
        icon={<FiCodepen />}
        delay={"0ms"} 
        href={"https://codepen.io/terryszhou"} 
        isLargeScreen={isLargeScreen} />
      <Divider
        borderColor={colorMode === "light" ? "black" : "white"}
        width={20} />
    </HStack>
    <HStack
      position={"fixed"}
      bottom={y > 80 ? "2%" : "5%"}
      transition={"200ms ease-out"}
      left={0}
      zIndex={1}>
      <Divider
        borderColor={colorMode === "light" ? "black" : "white"}
        width={20} />
      <SocialIcon
        icon={<FiMail />}
        delay={"80ms"} 
        href={"mailto:terryszhou@gmail.com"} 
        isLargeScreen={isLargeScreen} />
      <Text
        animation={fadeDownAnim}
        as={"a"}
        cursor={"pointer"}
        opacity={0}
        target={"_blank"}
        rel={"noreferrer"}
        fontFamily={"var(--chakra-fonts-mono)"}
        fontSize={"sm"}
        href={"mailto:terryszhou@gmail.com"}
        transition={"100ms ease-out"}
        _hover={{ color: "goldenrod" }}>
        terryszhou@gmail.com
      </Text>

    </HStack>
  </>);
};

interface SocialIconProps {
  icon: React.ReactElement,
  delay: string,
  href: string,
  isLargeScreen: boolean,
};

export const SocialIcon = ({ icon, delay, href, isLargeScreen }: SocialIconProps) => {
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
      size={isLargeScreen ? "sm" : "xs"}
      transition={"100ms ease-out"}
      _hover={{
        bgColor: colorMode === "light" ? "black" : "white",
        color: colorMode === "light" ? "white" : "black",
      }}
    />
  );
};