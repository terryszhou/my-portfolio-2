import {
  HStack,
  Text,
  Button,
  Image,
  Center,
  Stack,
  useMediaQuery,
  Box,
  VStack,
  keyframes,
  Tooltip,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";

import { Hexagon } from "./Hexagon";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { capitalize } from "../helpers/functions";
import { PageProps } from "../interfaces";

interface NavButtonProps {
  num: string,
  label: string,
  scroll: (arg0: string) => void,
  delay?: string,
};

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

export const Nav = ({ pageRefs, isVisible, domRefs }: PageProps) => {
  const [isLargeScreen] = useMediaQuery("(min-width: 840px)");
  const [y, setY] = useState<number>(window.scrollY);
  const [scrollDir, setScrollDir] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [stopScroll, setStopScroll] = useState<string>();

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

  useEffect(():void => {
    menuOpen
      ? setStopScroll(document.body.style.overflow = "hidden")
      : setStopScroll(document.body.style.overflow = "initial");
  }, [menuOpen])

  useEffect(():void => {
    isLargeScreen && setMenuOpen(false);
  }, [isLargeScreen])

  const scrollIntoView = (type: string): void => {
    pageRefs.current[type].scrollIntoView({ behavior: "smooth"});
    menuOpen && setMenuOpen(!menuOpen);
  };

  const fadeDownAnim: string = `${fadeDown} 500ms`;

  return (<>
    <HStack
      bgColor={menuOpen ? "rgba(28,28,28,0)" : "rgba(28,28,28,1)"}
      boxShadow={menuOpen ? "none" : "dark-lg"}
      height={y !== 0 && scrollDir === "up" ? 65 : 100}
      position={"fixed"}
      top={y > 80 && scrollDir === "down" ? -110 : 0}
      transition={"200ms ease-out"}
      width={"100%"}
      zIndex={2}>
      <HStack
        animation={fadeDownAnim}
        left={isLargeScreen ? 10 : 5}
        position={"absolute"}
        transition={"200ms ease-out"}>
        <Image
          marginRight={y !== 0 && scrollDir === "up" ? "-1px" : "6px"}
          padding={y !== 0 && scrollDir === "up" ? 4 : 2}
          src={"/face-card.png"}
          transition={"200ms ease-out"}
          width={20}
          _hover={{
            cursor: "pointer",
            filter: "brightness(1.25)",
            transform: "scale(1.15)",
          }} />
        <ColorModeSwitcher />
      </HStack>
      <HStack
        pos={"absolute"}
        right={isLargeScreen ? 5 : 0}
        spacing={7}
        transition={"200ms ease-out"}>
        {isLargeScreen ? (<>
          <NavButton num="01" label="home" scroll={scrollIntoView} delay={"0ms"}/>
          <NavButton num="02" label="about" scroll={scrollIntoView} delay={"60ms"}/>
          <NavButton num="03" label="experience" scroll={scrollIntoView} delay={"120ms"}/>
          <NavButton num="04" label="projects" scroll={scrollIntoView} delay={"180ms"}/>
          <NavButton num="05" label="contact" scroll={scrollIntoView} delay={"240ms"}/>
          <ResumeButton />
        </>) : (
          <NavIcon
            onClick={() => setMenuOpen(!menuOpen)}
            position={"absolute"}
            right={5}
            role={"group"}
            zIndex={2}>
          <Span
            left={!menuOpen && 1}
            top={menuOpen ? "18px" : "12px"}
            transform={menuOpen && "rotate(135deg)"} 
            _groupHover={{ left: 0 }} />
          <Span
            left={!menuOpen && -1}
            top={menuOpen ? "18px" : "24px"}
            transform={menuOpen && "rotate(405deg)"} 
            _groupHover={{ left: 0 }} />
        </NavIcon>
      )}
      </HStack>
    </HStack>
    {!isLargeScreen && (
      <VStack
        bgColor={"rgba(28,28,28,1)"}
        boxShadow={"dark-lg"}
        height={"100%"}
        justifyContent={"center"}
        position={"fixed"}
        right={menuOpen ? 0 : "-50%"}
        spacing={10}
        transition={"300ms ease-in-out"}
        width={"50%"}
        zIndex={1}>
        <NavButton num="01" label="home" scroll={scrollIntoView} delay={"0ms"}/>
        <NavButton num="02" label="about" scroll={scrollIntoView} delay={"60ms"}/>
        <NavButton num="03" label="experience" scroll={scrollIntoView} delay={"120ms"}/>
        <NavButton num="04" label="projects" scroll={scrollIntoView} delay={"180ms"}/>
        <NavButton num="05" label="contact" scroll={scrollIntoView} delay={"240ms"}/>
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

export const NavButton = ({ num, label, scroll, delay }: NavButtonProps) => {
  const fadeDownAnim: string = `${fadeDown} 200ms ${delay} forwards`;
  return (
    <Text
      color={"white"}
      cursor={"pointer"}
      fontFamily={"var(--chakra-fonts-mono)"}
      fontSize={13}
      p={0}
      opacity={0}
      pos={"relative"}
      onClick={() => scroll(label)}
      animation={fadeDownAnim}
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
}

export const NavIcon = (props: any) => (
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

export const Span = (props: any) => (
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

export const ResumeButton = () => {
  const fadeDownAnim: string = `${fadeDown} 200ms 300ms forwards`;
  return (
    <Button
      animation={fadeDownAnim}
      as={"a"}
      bgColor={"transparent"}
      border={"1px solid goldenrod"}
      color={"goldenrod"}
      cursor={"pointer"}
      fontFamily={"var(--chakra-fonts-mono)"}
      fontSize={13}
      href={"https://s3.us-west-1.amazonaws.com/terryszhou.com/terryzhou-resume.pdf"}
      opacity={0}
      target={"_blank"}
      _focus={{ boxShadow: "none" }}
      _hover={{
        bgColor: "goldenrod",
        color: "rgb(28,28,28)"
      }}>
      Resume
    </Button>
  );
};