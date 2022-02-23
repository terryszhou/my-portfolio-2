import {
  HStack,
  Text,
  Button,
  Image,
  Box,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";

import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { fadeDown } from "../helpers/animations";
import { capitalize } from "../helpers/functions";
import { PageProps } from "../helpers/interfaces";

export const Nav = ({ pageRefs, y, scrollDir, isLargeScreen }: PageProps) => {
  const { colorMode } = useColorMode();
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [stopScroll, setStopScroll] = React.useState<string>();

  React.useEffect((): void => {
    menuOpen
      ? setStopScroll(document.body.style.overflow = "hidden")
      : setStopScroll(document.body.style.overflow = "initial");
  }, [menuOpen])

  React.useEffect((): void => {
    isLargeScreen && setMenuOpen(false);
  }, [isLargeScreen])

  const scrollIntoView = (type: string): void => {
    pageRefs.current[type].scrollIntoView({ behavior: "smooth"});
    menuOpen && setMenuOpen(!menuOpen);
  };

  const fadeDownAnim: string = `${fadeDown} 500ms`;

  return (
    <React.Fragment>
      <HStack
        bgColor={
          menuOpen
            ? "transparent"
            : colorMode === "light" 
              ? "rgba(255,255,255,.85)" 
              : "rgba(27,32,43,.85)"
        }
        boxShadow={
          menuOpen
            ? "none"
            : y !== 0 && scrollDir === "up" 
              ? "dark-lg" 
              : "none"
        }
        height={y !== 0 && scrollDir === "up" ? 65 : 100}
        position={"fixed"}
        top={y > 80 && scrollDir === "down" ? -110 : 0}
        transition={"200ms ease-out"}
        width={"100%"}
        zIndex={3}>
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
            filter={useColorModeValue("none", "drop-shadow(0 0 3px goldenrod)")}
            width={20}
            _hover={{
              cursor: "pointer",
              filter: "brightness(1.25)",
              transform: "scale(1.15)",
            }} />
          <ColorModeSwitcher />
        </HStack>
        <HStack
          position={"absolute"}
          right={isLargeScreen ? 5 : 0}
          spacing={7}
          transition={"200ms ease-out"}>
          {isLargeScreen ? (
            <React.Fragment>
              <NavButton num="01" label="home" scroll={scrollIntoView} delay={"0ms"}/>
              <NavButton num="02" label="about" scroll={scrollIntoView} delay={"60ms"}/>
              <NavButton num="03" label="experience" scroll={scrollIntoView} delay={"120ms"}/>
              <NavButton num="04" label="projects" scroll={scrollIntoView} delay={"180ms"}/>
              <NavButton num="05" label="contact" scroll={scrollIntoView} delay={"240ms"}/>
              <ResumeButton />
            </React.Fragment>
          ) : (
            <NavIcon
              onClick={() => setMenuOpen(!menuOpen)}
              position={"absolute"}
              right={5}
              role={"group"}
              zIndex={4}>
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
          bgColor={colorMode === "light" ? "rgba(255,255,255,.85)" : "rgba(27,32,43,.85)"}
          boxShadow={"dark-lg"}
          height={"100%"}
          justifyContent={"center"}
          position={"fixed"}
          right={menuOpen ? 0 : "-50%"}
          spacing={10}
          transition={"300ms ease-in-out"}
          width={"50%"}
          zIndex={2}>
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
          backgroundColor={"black"}
          height={"100%"}
          onClick={() => setMenuOpen(!menuOpen)}
          opacity={menuOpen ? .75 : 0}
          position={"fixed"}
          transition={"opacity 400ms ease-out, visibility 400ms ease-out"}
          visibility={menuOpen ? "visible" : "hidden"}
          width={"100%"}
          zIndex={1} />
      }
    </React.Fragment>
  );
};

interface NavButtonProps {
  delay: string,
  label: string,
  num: string,
  scroll: (arg0: string) => void,
};

export const NavButton = ({ num, label, scroll, delay }: NavButtonProps) => {
  const fadeDownAnim: string = `${fadeDown} 200ms ${delay} forwards`;
  return (
    <Text
      animation={fadeDownAnim}
      cursor={"pointer"}
      fontFamily={"var(--chakra-fonts-mono)"}
      fontSize={13}
      padding={0}
      position={"relative"}
      opacity={0}
      onClick={() => scroll(label)}
      transition={"100ms ease-out"}
      _before={{
        backgroundColor: "goldenrod",
        borderRadius: "5px",
        bottom: -1,
        content: `""`,
        height: "2px",
        position: "absolute",
        transition: "100ms ease-out",
        width: 0,
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
    cursor={"pointer"}
    height={"45px"}
    margin={"25px auto"}
    position={"relative"}
    transform={"rotate(0deg)"}
    transition={".5s ease-in-out"}
    width={"30px"}
    {...props}>
    {props.children}
  </Box>
);

export const Span = (props: any) => (
  <Box 
    background={"goldenrod"}
    borderRadius={"5px"}
    display={"block"}
    height={"3px"}
    left={0}
    position={"absolute"}
    opacity={1}
    transform={"rotate(0deg)"}
    transition={".25s ease-in-out"}
    width={"100%"}
    {...props} />
);

export const ResumeButton = () => {
  const fadeDownAnim: string = `${fadeDown} 200ms 300ms forwards`;
  return (
    <Button
      animation={fadeDownAnim}
      as={"a"}
      backgroundColor={"transparent"}
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
        backgroundColor: "goldenrod",
        color: "inherit"
      }}>
      Resume
    </Button>
  );
};