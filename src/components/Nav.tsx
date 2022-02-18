import {
  HStack,
  Text,
  Button,
  Image,
  Center,
  useMediaQuery,
  Box,
  VStack,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";

import { capitalize } from "../helpers/functions";
import { NavProps } from "../interfaces";

interface NavButtonProps {
  num: string,
  label: string,
  scroll: (arg0: string) => void,
};

export const Nav = ({ pageRefs }: NavProps) => {
  const [isLargeScreen] = useMediaQuery("(min-width: 750px)")
  const [y, setY] = useState<number>(window.scrollY);
  const [scrollDir, setScrollDir] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

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
    menuOpen && setMenuOpen(!menuOpen);
  };

  return (<>
    <HStack
      bgColor={"rgba(0,0,0,1)"}
      boxShadow={"dark-lg"}
      h={y !== 0 && scrollDir === "up" ? 65 : 100}
      pos={"fixed"}
      top={y > 80 && scrollDir === "down" ? -110 : 0}
      transition={"200ms ease-out"}
      w={"100%"}
      zIndex={2}>
      <Center
        bgColor={"white"}
        border={"3px solid goldenrod"}
        boxSize={12}
        left={5}
        pos={"absolute"}
        rounded={"full"}>
        <Image src={"/headshot.png"} w={7} />
      </Center>
      {isLargeScreen ? (
        <HStack pos={"absolute"} right={5} spacing={7}>
          <NavButton num="01" label="home" scroll={scrollIntoView}/>
          <NavButton num="02" label="about" scroll={scrollIntoView}/>
          <NavButton num="03" label="experience" scroll={scrollIntoView}/>
          <NavButton num="04" label="projects" scroll={scrollIntoView}/>
          <NavButton num="05" label="contact" scroll={scrollIntoView}/>
          <ResumeButton />
        </HStack>
      ) : (
        <NavIcon
          onClick={() => setMenuOpen(!menuOpen)}
          position={"absolute"}
          right={5}
          zIndex={2}>
          <Span
            top={menuOpen ? "18px" : "12px"}
            transform={menuOpen && "rotate(135deg)"} />
          <Span
            top={menuOpen ? "18px" : "24px"}
            transform={menuOpen && "rotate(405deg)"} />
        </NavIcon>
      )}
    </HStack>
    {!isLargeScreen && (
      <VStack
        bgColor={"black"}
        boxShadow={"dark-lg"}
        h={"100%"}
        justifyContent={"center"}
        pos={"fixed"}
        right={menuOpen ? 0 : "-50%"}
        spacing={10}
        transition={"300ms ease-in-out"}
        w={"50%"}
        zIndex={1}>
        <NavButton num="01" label="home" scroll={scrollIntoView}/>
        <NavButton num="02" label="about" scroll={scrollIntoView}/>
        <NavButton num="03" label="experience" scroll={scrollIntoView}/>
        <NavButton num="04" label="projects" scroll={scrollIntoView}/>
        <NavButton num="05" label="contact" scroll={scrollIntoView}/>
        <ResumeButton />
      </VStack>
    )}
    {!isLargeScreen &&
      <Box
        width={"100%"}
        height={"100%"}
        position={"fixed"}
        bgColor={"black"}
        opacity={menuOpen ? .75 : 0}
        // backdropFilter={"auto"}
        // backdropBlur={"4px"}
        onClick={() => setMenuOpen(!menuOpen)}
        visibility={menuOpen ? "visible" : "hidden"}
        transition={"opacity 400ms ease-out, visibility 400ms ease-out"}
      />
    }
  </>);
};

export const NavButton = ({ num, label, scroll }: NavButtonProps) => (
  <Text
    color={"white"}
    cursor={"pointer"}
    fontFamily={"var(--chakra-fonts-mono)"}
    fontSize={13}
    p={0}
    pos={"relative"}
    onClick={() => scroll(label)}
    transition={"100ms ease-out"}
    _before={{
      backgroundColor: "goldenrod",
      borderRadius: "5px",
      bottom: -1,
      content: `""`,
      h: "2px",
      pos: "absolute",
      transition: "100ms ease-out",
      w: 0,
    }}
    _hover={{
      color: "goldenrod",
      _before: {
        width: "105%"
      }
    }}>
    <span style={{ color: "goldenrod" }}>
      {`${num}. `}
    </span>
    {`${capitalize(label)}`}
  </Text>
);

export const NavIcon = (props) => (
  <Box
    w={"30px"}
    h={"45px"}
    pos={"relative"}
    m={"25px auto"}
    transform={"rotate(0deg)"}
    transition={".5s ease-in-out"}
    cursor={"pointer"}
    {...props}>
    {props.children}
  </Box>
);

export const Span = (props) => (
  <Box 
    display={"block"}
    pos={"absolute"}
    h={"3px"}
    w={"100%"}
    bg={"goldenrod"}
    borderRadius={"5px"}
    opacity={1}
    left={0}
    transform={"rotate(0deg)"}
    transition={".25s ease-in-out"}
    {...props} />
);

export const ResumeButton = () => (
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
);