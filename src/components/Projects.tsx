import { Flex, Text, VStack, HStack, useColorModeValue, Heading } from "@chakra-ui/react";
import React from "react";

import {
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiAmazonaws,
  SiFirebase,
  SiPython,
  SiChakraui,
  SiVercel
} from "react-icons/si";
import { FiGithub } from "react-icons/fi";

import { SkillIcon } from "./SkillTable";
import { SocialIcon } from "./Social";
import { HeroDividers } from "./HeroDividers";
import { Hexagon } from "./Hexagon";
import { PageProps } from "../helpers/interfaces";
import { SectionHeader } from "./SectionHeader";

export const Projects = ({ pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible]);

  const hexColorInner: string = useColorModeValue('white', 'rgb(27,32,43)');

  return (
    <Flex
      transition={"1s ease-out"}
      opacity={visible ? 1 : 0.25}
      alignItems={"center"}
      flexDirection={{ base: "column", lg: "row" }}
      height={{ base: "140vh", lg: "100vh" }}
      position={"relative"}
      width={"75%"}
      ref={el => pageRefs.current = { ...pageRefs.current, projects: el }}>
      {loaded && <HeroDividers orientation={"topleft"} />}
      <SectionHeader label={"04. Some Recent Projects"} />
      <Flex
        height={{ base: "50%", lg: "100%" }}
        justifyContent={"center"}
        alignItems={"center"}
        ref={visRef}
        width={{ base: "100%", lg: "50%" }}>
        {/* <Hexagon
          color={"goldenrod"}
          width={"30vw"}
          filter={useColorModeValue("none", "drop-shadow(0 0 5px goldenrod)")}>
          <Hexagon color={hexColorInner} width={"28vw"}>
            <VStack
              position={"absolute"}
              left={{ lg: "50%" }}
              marginLeft={{ base: 10 }}
              alignItems={{ base: "center", lg: "flex-end" }}
              textAlign={"right"}
              bottom={"25%"}>
              <VStack alignItems={"flex-end"} marginRight={10}>
                <Heading
                  color={"goldenrod"}
                  fontFamily={"var(--chakra-fonts-mono)"}
                  fontSize={"1.75rem"}>
                  Test
                </Heading>
                <HStack>
                  <SkillIcon icon={SiCss3} color={"rgb(229,212,88)"} label={"JavaScript/TypeScript"} delay={"0ms"} />
                  <SkillIcon icon={SiReact} color={"rgb(114,183,208)"} label={"React"} delay={"40ms"} />
                  <SkillIcon icon={SiChakraui} color={"rgb(89,178,170)"} label={"Chakra UI"} delay={"80ms"} />
                </HStack>
              </VStack>
              <HStack>
                <Text
                  margin={2}
                  padding={5}
                  bgColor={useColorModeValue("rgb(235,235,235)", "rgb(48,52,63)")}
                  borderRadius={5}
                  boxShadow={"0 25px 20px -20px black"}
                  width={"30rem"}
                  fontFamily={"var(--chakra-fonts-nunito)"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <VStack>
                  <SocialIcon
                    icon={<FiGithub />}
                    delay={"320ms"} 
                    href={"https://github.com/terryszhou"}
                    isLargeScreen={true} />
                  <SocialIcon
                    icon={<FiGithub />}
                    delay={"320ms"} 
                    href={"https://github.com/terryszhou"}
                    isLargeScreen={true} />
                </VStack>
              </HStack>
            </VStack>
          </Hexagon>
        </Hexagon> */}
      </Flex>
      <Flex
        padding={20}
        height={{ base: "50%", lg: "85%" }}
        width={{ base: "120%", lg: "50%" }}>
      </Flex>
    </Flex>
  );
};