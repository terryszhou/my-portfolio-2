import { Flex, Box, Image, useColorMode } from "@chakra-ui/react";
import * as React from "react";

import { fadeDown } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";
import { ContentBox } from "./ContentBox";
import { SkillTable } from "./SkillTable";
import { HeroShell } from "./HeroShell";
import { QAndA } from "./QAndA";

export const About = ({ pageRefs, visible, visRef }: PageProps) => {
  const { colorMode } = useColorMode();
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible])

  const fadeDownAnim: string = `${fadeDown} 1000ms`;

  return (
    <HeroShell
      label={"02. About Me"}
      pageRefs={pageRefs}
      refNum={2}
      visible={visible}>
      <Box ref={visRef}>
        <ContentBox height={{ base: "40vh", lg: "70vh" }}>
          {QAndA(colorMode)}
        </ContentBox>
      </Box>
      <Flex
        animation={fadeDownAnim}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        marginBottom={{ base: "10%", lg: 0 }}
        width={"80%"}>
        <Box
          marginTop={{ base: 0, lg: 12 }}
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
    </HeroShell>
  );
};
