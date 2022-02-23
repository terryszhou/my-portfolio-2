import { Flex, Stack, Box, Text, Image, useColorMode } from "@chakra-ui/react";
import * as React from "react";

import { fadeDown } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";
import { ContentBox } from "./ContentBox";
import { SkillTable } from "./SkillTable";
import { HeroShell } from "./HeroShell";
import { QAndA } from "./QAndA";
import { MinimalBox } from "./MinimalBox";

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
      <Box
        ref={visRef}
        marginBottom={{ base: "-10%", lg: 0 }}>
        {/* <ContentBox height={{ base: "40vh", lg: "70vh" }}>
          {QAndA(colorMode)}
        </ContentBox> */}
        {/* <MinimalBox height={{ base: "40vh", lg: "70vh" }}>
          {QAndA(colorMode)}
        </MinimalBox> */}
        <Stack
          fontFamily={"var(--chakra-fonts-nunito)"}
          textAlign={"justify"}
          fontSize={{ base: "md", lg: "lg" }}>
          <Text marginY={2} opacity={.7}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Text marginY={2} opacity={.7}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Text marginY={2} opacity={.7}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <SkillTable />
        </Stack>
      </Box>
      <Flex
        animation={fadeDownAnim}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        marginTop={"10%"}
>
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
          width={"fit-content"}
          _hover={{ backgroundColor: "goldenrod" }}>
          <Image
            borderRadius={5}
            maxWidth={{ base: 250, lg: 350 }}
            _groupHover={{ visibility: "hidden" }}
            src={"/headshot-shoulders.jpg"} />
          <Image
            visibility={"hidden"}
            width={"70%"}
            position={"absolute"}
            src={"/headshot-outline.png"}
            _groupHover={{ visibility: "visible" }} />
        </Box>
      </Flex>
    </HeroShell>
  );
};
