import { IconButton, Divider, HStack, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

import { FiCodepen, FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { SiCodewars } from "react-icons/si";

import { fadeDown } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";

export const Social = ({ y, scrollDir, isLargeScreen }: PageProps ) => {
  const fadeDownAnim: string = `${fadeDown} 200ms 180ms forwards`;

  return (
    <React.Fragment>
      <Stack
        direction={{ base: "column-reverse", lg: "row" }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"fixed"}
        right={{ base: 2, lg: 0 }}
        top={
          y > 80 && scrollDir === "down"
            ? "2%"
            : y > 60 && scrollDir === "up"
              ? "12%"
              : "17%"
        }
        transition={"200ms ease-out"}
        zIndex={1}>
        <SocialIcon
          icon={<FiGithub />}
          delay={"320ms"} 
          href={"https://github.com/terryszhou"} 
          isLargeScreen={isLargeScreen} />
        <SocialIcon
          icon={<FiLinkedin />}
          delay={"240ms"}
          href={"https://www.linkedin.com/in/terryszhou"} 
          isLargeScreen={isLargeScreen} />
        <SocialIcon
          icon={<FiInstagram />}
          delay={"160ms"}
          href={"https://instagram.com/terry.s.zhou"} 
          isLargeScreen={isLargeScreen} />
        <SocialIcon
          icon={<FiCodepen />}
          delay={"80ms"} 
          href={"https://codepen.io/terryszhou"} 
          isLargeScreen={isLargeScreen} />
        <SocialIcon
          icon={<SiCodewars />}
          delay={"0ms"} 
          href={"https://www.codewars.com/users/terryszhou/"} 
          isLargeScreen={isLargeScreen} />
        <Divider
          borderColor={useColorModeValue("black", "white")}
          width={{ base: 0, lg: 40 }} />
      </Stack>
      <Stack
        direction={"row"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bottom={{ base: "15%", lg: y > 80 ? "2%" : "4%" }}
        left={{ base: -20, lg: 0 }}
        position={"fixed"}
        transform={{ base: "rotate(-90deg)", lg: "rotate(0deg)" }}
        transition={"200ms ease-out"}
        zIndex={1}>
        <Divider
          borderColor={useColorModeValue("black", "white")}
          width={{ base: 0, lg: 20}} />
        <SocialIcon
          delay={"80ms"} 
          href={"mailto:terryszhou@gmail.com"} 
          icon={<FiMail />}
          isLargeScreen={isLargeScreen} />
        <Text
          animation={fadeDownAnim}
          as={"a"}
          cursor={"pointer"}
          fontFamily={"var(--chakra-fonts-mono)"}
          fontSize={{ base: "xs", lg: "sm"}}
          href={"mailto:terryszhou@gmail.com"}
          opacity={0}
          rel={"noreferrer"}
          target={"_blank"}
          transition={"100ms ease-out"}
          _hover={{ color: "goldenrod" }}>
          terryszhou@gmail.com
        </Text>
      </Stack>
    </React.Fragment>
  );
};

interface SocialIconProps {
  icon: React.ReactElement,
  delay: string,
  href: string,
  isLargeScreen?: boolean,
};

export const SocialIcon = ({ icon, delay, href, isLargeScreen }: SocialIconProps) => {
  const fadeDownAnim: string = `${fadeDown} 200ms ${delay} forwards`;

  return (
    <IconButton
      as={"a"}
      animation={fadeDownAnim}
      aria-label={"social-icon-button"}
      backgroundColor={"transparent"}
      border={"1px solid"}
      href={href}
      icon={icon}
      opacity={"0"}
      rel={"noreferrer"}
      size={isLargeScreen ? "sm" : "xs"}
      target={"_blank"}
      transition={"100ms ease-out"}
      _hover={{
        backgroundColor: useColorModeValue("black", "white"),
        color: useColorModeValue("white", "black"),
      }}
    />
  );
};