import { HStack, Text } from "@chakra-ui/react";
import React from "react";

import { NavProps } from "../interfaces";
import { capitalize } from "../helpers/functions";

interface NavButtonProps {
  num: string,
  label: string,
  scroll: (arg0: string) => void,
};

export const Nav = ({ pageRefs }: NavProps) => {
  const scrollIntoView = (type: string): void => {
    pageRefs.current[type].scrollIntoView({ behavior: "smooth"});
  };

  return (
    <HStack
      bgColor={"rgba(0,0,0,0.5)"}
      pos={"fixed"}
      top={0}
      w={"100%"}
      h={100}
    >
      <HStack pos={"absolute"} right={5}>
        <NavButton num="01" label="home" scroll={scrollIntoView}/>
        <NavButton num="02" label="about" scroll={scrollIntoView}/>
        <NavButton num="03" label="experience" scroll={scrollIntoView}/>
        <NavButton num="04" label="projects" scroll={scrollIntoView}/>
        <NavButton num="05" label="contact" scroll={scrollIntoView}/>
      </HStack>
    </HStack>
  );
};

export const NavButton = ({ num, label, scroll }: NavButtonProps) => (
  <Text
    color={"white"}
    cursor={"pointer"}
    fontFamily={"var(--chakra-fonts-mono)"}
    fontSize={13}
    p={2}
    onClick={() => scroll(label)}
    _hover={{ color: "rgba(245,245,245,0.5)" }}
  >
    {`${num}. ${capitalize(label)}`}
  </Text>
);
