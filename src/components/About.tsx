import { Flex, Stack, Box, Text, Image, useColorModeValue, } from "@chakra-ui/react";
import * as React from "react";

import { fadeDown } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";
import { GoldSpan, GreenSpan, PurpleSpan, RedSpan } from "./ColorSpan";
import { HeroShell } from "./HeroShell";
import { SkillTable } from "./SkillTable";

export const About = ({ pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible])

  const fadeDownAnim: string = `${fadeDown} 1000ms`;
  const goldShadow: string = useColorModeValue("none","0 0 10px goldenrod");

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
          fontSize={{ base: "sm", lg: "md" }}
          textAlign={"justify"}>
          <Text marginY={2} opacity={.7}>
            Hi! My name is Terry and I build <GreenSpan>web content</GreenSpan> for a living. I used to work in real estate and food service, but I needed a more fulfilling career path: a way for me to combine my skills in <GoldSpan>customer satisfaction</GoldSpan> with my twin passions for <GoldSpan>artistic creativity</GoldSpan> and <GoldSpan>practical problem-solving</GoldSpan>.
          </Text>
          <Text marginY={2} opacity={.7}>
            Today, I've worked as the <GreenSpan>lead Front-End Engineer</GreenSpan> for two startups, and I'm a top-scoring graduate from General Assembly's <GreenSpan>Software Engineering Immersive Boot Camp</GreenSpan>. My main tools are <GoldSpan>React</GoldSpan>, <GoldSpan>JavaScript</GoldSpan>, and <GoldSpan>Node</GoldSpan>. I can also parse <GoldSpan>JSON</GoldSpan> objects, build <GoldSpan>RESTful APIs</GoldSpan> from scratch, and manage <GoldSpan>SQL</GoldSpan> databases.
          </Text>
          <Text marginY={2} opacity={.7}>
            When I'm not writing <GreenSpan>code</GreenSpan>, I'm probably writing my debut fantasy novel, <GoldSpan><i>Narumi and the Dragon's Pearl</i></GoldSpan> (Wanna hear the pitch? Think <i>The Hobbit</i> + <i>Treasure Planet</i>, with Chinese mythology thrown in).
          </Text>
          <Text marginY={2} opacity={.7}>
            I'm also a <GoldSpan>rock climber</GoldSpan>, a <GoldSpan>foodie</GoldSpan>, and either a <RedSpan>Gryffindor</RedSpan> or <GreenSpan>Slytherin</GreenSpan>, depending on the time of day. My favorite pokemon is <PurpleSpan>Nidoking</PurpleSpan>.
          </Text>
          <Text marginY={2} opacity={.7}>
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
