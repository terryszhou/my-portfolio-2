import {
  Flex,
  Stack,
  Box,
  Text,
  Image,
  useColorModeValue as colorMode
} from "@chakra-ui/react";
import * as React from "react";

import { ColorSpan } from "./ColorSpan";
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

    return (
        <HeroShell
            label={"01. About Me"}
            pageRefs={pageRefs}
            refNum={1}
            loaded={loaded}>
            <Box
                marginBottom={{ base: "-25%", lg: 0 }}
                minHeight={"70vh"}
                ref={visRef}>
                <Stack
                    color={colorMode("rgb(0,0,0,0.65)","rgb(255,255,255,0.65)")}
                    fontFamily={"var(--chakra-fonts-nunito)"}
                    fontSize={{ base: "sm", lg: "md" }}
                    textAlign={"justify"}>
                    <Text animation={loaded && fadeRightAnim1} marginY={2} opacity={0}>
                        Hi! My name's Terry, and I analyze <ColorSpan color={"green"}>data</ColorSpan> and build <ColorSpan color={"green"}>web content</ColorSpan> for a living. I used to be a realtor, but I needed a more fulfilling way to combine my twin passions for <ColorSpan color={"gold"}>artistic creativity</ColorSpan> and <ColorSpan color={"gold"}>practical problem-solving</ColorSpan>.
                    </Text>
                    <Text animation={loaded && fadeRightAnim2} marginY={2} opacity={0}>
                        Today, I work as a <ColorSpan color={"green"}>Senior Data Analyst</ColorSpan> at LMI. I've also been the lead <ColorSpan color={"green"}>Front-End Engineer</ColorSpan> for two startups, and I'm a proud graduate of General Assembly's <ColorSpan color={"green"}>Software Engineering Immersive Boot Camp</ColorSpan>. My main tools are <ColorSpan color={"gold"}>Python</ColorSpan>, <ColorSpan color={"gold"}>React</ColorSpan> and <ColorSpan color={"gold"}>TypeScript</ColorSpan>.
                    </Text>
                    <Text animation={loaded && fadeRightAnim3} marginY={2} opacity={0}>
                        I'm a rock climber, a foodie, and either a Gryffindor or Slytherin, depending on my mood. My favorite pokemon is <ColorSpan color={"purple"}><Text as="a" href="https://bulbapedia.bulbagarden.net/wiki/Nidoking_(Pok%C3%A9mon)" rel="noreferrer" target="_blank">Nidoking</Text></ColorSpan>.
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
                    marginBottom={{ md: "0%", lg: "20%" }}>
                    <Box
                        alignItems={"center"}
                        border={"2px solid goldenrod"}
                        borderRadius={5}
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
