import { Flex, Box, Image, useColorMode } from "@chakra-ui/react";
import * as React from "react";

import { fadeDown } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";
import { HeroDividers } from "./HeroDividers";
import { ContentBox } from "./ContentBox";
import { SkillTable } from "./SkillTable";
import { SectionHeader } from "./SectionHeader";
import { QAndA } from "./QAndA";

export const About = ({ pageRefs, visible, visRef }: PageProps) => {
  const { colorMode } = useColorMode();
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible])

  const fadeDownAnim: string = `${fadeDown} 1000ms`;

  return (
    <Flex
      alignItems={"center"}
      flexDirection={{ base: "column", lg: "row" }}
      opacity={visible ? 1 : 0.25}
      position={"relative"}
      ref={el => pageRefs.current = { ...pageRefs.current, about: el }}
      transition={"1s ease-out"}
      height={{ base: "140vh", sm: "fit-content", lg: "100vh" }}
      width={"75%"}>
      {loaded && <HeroDividers orientation={"topleft"} />}
      <SectionHeader label={"02. About Me"} />
      <Flex
        height={{ base: "80vh", lg: "85%"}}
        marginTop={{ base: "3rem", lg: 0 }}
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent={"center"}
        ref={visRef}
        width={{ base: "100%", lg: "50%" }}>
        <ContentBox height={"85%"}>{QAndA(colorMode)}</ContentBox>
      </Flex>
      {loaded &&
        <Flex
          height={{ base: "50%", lg: "85%"}}
          animation={fadeDownAnim}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          marginBottom={{ base: "10%", lg: 0 }}
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
            width={"70%"}
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
