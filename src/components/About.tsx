import { Flex, Stack, Box, Text, Image, useColorMode } from "@chakra-ui/react";
import * as React from "react";

import { fadeDown } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";
import { HeroShell } from "./HeroShell";
import { SkillTable } from "./SkillTable";

export const About = ({ pageRefs, visible, visRef }: PageProps) => {
  const { colorMode } = useColorMode();
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible])

  const fadeDownAnim: string = `${fadeDown} 1000ms`;

  return (
    <HeroShell
      label={"01. About Me"}
      pageRefs={pageRefs}
      refNum={1}
      visible={visible}>
      <Box
        marginBottom={{ base: "-10%", lg: 0 }}
        ref={visRef}>
        <Stack
          fontFamily={"var(--chakra-fonts-nunito)"}
          fontSize={{ base: "md", lg: "lg" }}
          textAlign={"justify"}>
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
        marginTop={"10%"}>
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
            src={"/headshot-shoulders.jpg"} 
            _groupHover={{ visibility: "hidden" }} />
          <Image
            position={"absolute"}
            src={"/headshot-outline.png"}
            visibility={"hidden"}
            width={"70%"}
            _groupHover={{ visibility: "visible" }} />
        </Box>
      </Flex>
    </HeroShell>
  );
};
