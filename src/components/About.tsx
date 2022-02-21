import {
  Flex,
  HStack,
  Box,
  Heading,
  Image,
  useColorModeValue,
  useColorMode,
  Divider,
} from "@chakra-ui/react";
import * as React from "react";

import { fadeDown } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";
import { HeroDividers } from "./HeroDividers";
import { ContentBox } from "./ContentBox";
import { SkillTable } from "./SkillTable";
import { QAndA } from "./QAndA";

export const About = ({ pageRefs, visible, visRef }: PageProps) => {
  const { colorMode } = useColorMode();
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible])
  const fadeDownAnim: string = `${fadeDown} 1000ms`;

  return (
    <Flex
      transition={"1s ease-out"}
      opacity={visible ? 1 : 0.25}
      alignItems={"center"}
      boxSizing={"border-box"}
      flexDirection={{ base: "column", lg: "row" }}
      height={"100vh"}
      position={"relative"}
      width={"75%"}
      ref={el => pageRefs.current = { ...pageRefs.current, about: el }}>
      <Flex
        ref={visRef}
        flexDirection={"column"}
        height={{ base: "40%", lg: "80%" }}
        paddingTop={{base: "3rem", lg: "1rem" }}
        paddingX={"1rem"}
        width={{ base: "100%", lg: "50%" }}>
        {loaded && <HeroDividers orientation={"topleft"} />}
        <HStack spacing={6}>
          <Divider
            borderColor={useColorModeValue("black", "white")}
            left={"-20%"}
            position={"absolute"}
            width={"20%"} />
          <Heading
            fontSize={{ base: "1.5rem", lg:"2rem" }}
            fontWeight={"bold"}
            fontFamily={"var(--chakra-fonts-mono)"}
            lineHeight={1}
            position={"relative"}
            width={"fit-content"}>
            <span style={{
              color: "goldenrod",
              textShadow: useColorModeValue("none", "0 0 5px goldenrod"),
            }}>01.</span> About Me
          </Heading>
          <Image
            filter={useColorModeValue("none", "drop-shadow(0 0 2px red)")}
            boxSize={{ base: "40px", lg: "50px" }}
            src={"/seal-sig.png"} />
        </HStack>
        <ContentBox>{QAndA(colorMode)}</ContentBox>
      </Flex>
      {loaded &&
        <Flex
          animation={fadeDownAnim}
          alignItems={{base: "center", lg: "flex-end"}}
          flexDirection={"column"}
          height={{ base: "50%", lg: "80%" }}
          paddingTop={{base: "3rem", lg: "6rem" }}
          paddingX={"1rem"}
          width={{ base: "100%", lg: "50%" }}>
          <Box
            alignItems={"center"}
            border={"2px solid goldenrod"}
            borderRadius={5}
            boxShadow={colorMode === "light" ? "none" : "0 0 10px goldenrod"}
            display={"flex"}
            justifyContent={"center"}
            padding={2}
            position={"relative"}
            role={"group"}
            transition={"200ms ease-out"}
            width={{ base: "50%", lg: "70%" }}
            _hover={{ backgroundColor: "goldenrod" }}>
            <Image
              borderRadius={5}
              _groupHover={{ visibility: "hidden" }}
              src={"/headshot-shoulders.jpg"} />
            <Image
              visibility={"hidden"}
              width={"70%"}
              position={"absolute"}
              src={"/headshot-outline.png"}
              _groupHover={{ visibility: "visible" }} />
          </Box>
          <SkillTable />
        </Flex>
      }
    </Flex>
  );
};
