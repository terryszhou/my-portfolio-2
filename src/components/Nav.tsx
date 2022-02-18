import { HStack, Text, Button, Image, Center } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";

import { NavProps } from "../interfaces";
import { capitalize } from "../helpers/functions";

interface NavButtonProps {
  num: string,
  label: string,
  scroll: (arg0: string) => void,
};

export const Nav = ({ pageRefs }: NavProps) => {
  const [y, setY] = useState(window.scrollY);
  const [scrollDir, setScrollDir] = useState("");

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setScrollDir("up");
      } else if (y < window.scrollY) {
        setScrollDir("down");
      };
      setY(window.scrollY);
    }, [y]
  );
  
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const scrollIntoView = (type: string): void => {
    pageRefs.current[type].scrollIntoView({ behavior: "smooth"});
  };

  return (
    <HStack
      bgColor={"rgba(0,0,0,0.5)"}
      boxShadow={"dark-lg"}
      h={y !== 0 && scrollDir === "up" ? 65 : 100}
      pos={"fixed"}
      top={y > 80 && scrollDir === "down" ? -110 : 0}
      transition={"200ms ease-out"}
      w={"100%"}>
      <Center
        bgColor={"goldenrod"}
        boxSize={12}
        left={5}
        pos={"absolute"}
        rounded={"full"}>
        <Image src={"/headshot.png"} w={7} />
      </Center>
      <HStack pos={"absolute"} right={5}>
        <NavButton num="01" label="home" scroll={scrollIntoView}/>
        <NavButton num="02" label="about" scroll={scrollIntoView}/>
        <NavButton num="03" label="experience" scroll={scrollIntoView}/>
        <NavButton num="04" label="projects" scroll={scrollIntoView}/>
        <NavButton num="05" label="contact" scroll={scrollIntoView}/>
        <Button
          as={"a"}
          bgColor={"transparent"}
          border={"1px solid goldenrod"}
          color={"goldenrod"}
          cursor={"pointer"}
          fontFamily={"var(--chakra-fonts-mono)"}
          fontSize={13}
          href={"https://s3.us-west-1.amazonaws.com/terryszhou.com/terryzhou-resume.pdf"}
          target={"_blank"}
          _focus={{ boxShadow: "none" }}
          _hover={{ bgColor: "white" }}>
          Resume
        </Button>
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
    transition={"100ms ease-out"}
    _hover={{ color: "goldenrod" }}>
    <span style={{ color: "goldenrod" }}>
      {`${num}. `}
    </span>
    {`${capitalize(label)}`}
  </Text>
);
