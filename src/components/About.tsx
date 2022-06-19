import {
  Flex,
  Stack,
  Box,
  Text,
  Image,
  useColorModeValue as colorMode
} from "@chakra-ui/react";
import * as React from "react";

import { GoldSpan, GreenSpan, PurpleSpan, RedSpan } from "./ColorSpan";
import { fadeDown, fadeRight } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";
import { HeroShell } from "./HeroShell";
import { useAnim } from "../hooks/useAnim";
import { SkillTable } from "./SkillTable";

export const About = ({ pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible])

  const fadeDownAnim: string = useAnim(`${fadeDown} 1000ms`);
  const fadeRightAnim1: string = useAnim(`${fadeRight} 250ms 250ms forwards`);
  const fadeRightAnim2: string = useAnim(`${fadeRight} 250ms 400ms forwards`);
  const fadeRightAnim3: string = useAnim(`${fadeRight} 250ms 550ms forwards`);
  const fadeRightAnim4: string = useAnim(`${fadeRight} 250ms 700ms forwards`);
  const fadeRightAnim5: string = useAnim(`${fadeRight} 250ms 850ms forwards`);
  const goldShadow: string = colorMode("none","0 0 2px goldenrod");

  return (
    <HeroShell
      label={"01. About Me"}
      pageRefs={pageRefs}
      refNum={1}
      loaded={loaded}>
      <Box marginBottom={{ base: "-10%", lg: 0 }} ref={visRef}>
        <Stack
          color={colorMode("rgb(0,0,0,0.65)","rgb(255,255,255,0.65)")}
          fontFamily={"var(--chakra-fonts-nunito)"}
          fontSize={{ base: "sm", lg: "md" }}
          textAlign={"justify"}>
          <Text animation={loaded && fadeRightAnim1} marginY={2} opacity={0}>
            Hi! My name's Terry, and I analyze <GreenSpan>data</GreenSpan> and build <GreenSpan>web content</GreenSpan> for a living. I used to be a realtor, but I needed a more fulfilling way to combine my twin passions for <GoldSpan>artistic creativity</GoldSpan> and <GoldSpan>practical problem-solving</GoldSpan>.
          </Text>
          <Text animation={loaded && fadeRightAnim2} marginY={2} opacity={0}>
            Today, I work as a <GreenSpan>Senior Data Analyst</GreenSpan> at LMI. I've also been the lead <GreenSpan>Front-End Engineer</GreenSpan> for two startups, and I'm a proud graduate of General Assembly's <GreenSpan>Software Engineering Immersive Boot Camp</GreenSpan>. My main tools are <GoldSpan>Python</GoldSpan>, <GoldSpan>React</GoldSpan> and <GoldSpan>TypeScript</GoldSpan>.
          </Text>
          <Text animation={loaded && fadeRightAnim3} marginY={2} opacity={0}>
            I'm a rock climber, a foodie, and either a Gryffindor or Slytherin, depending on my mood. My favorite pokemon is <PurpleSpan><Text as="a" href="https://bulbapedia.bulbagarden.net/wiki/Nidoking_(Pok%C3%A9mon)" rel="noreferrer" target="_blank">Nidoking</Text></PurpleSpan>.
          </Text>
          <Text animation={loaded && fadeRightAnim4} marginY={2} opacity={0}>
            Want to know more? Keep on reading! In the meantime, here are just a few skills in my toolbox:
          </Text>
          {loaded && <SkillTable />}
        </Stack>
      </Box>
      {loaded &&
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
            boxShadow={goldShadow}
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
              boxShadow={"0 25px 20px -20px black"}
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
      }
    </HeroShell>
  );
};
