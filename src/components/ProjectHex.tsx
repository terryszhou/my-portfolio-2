import { Text, VStack, HStack, useColorModeValue as uCMV, Heading } from "@chakra-ui/react";
import * as React from "react";

import { SiCss3, SiReact, SiChakraui } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

import { Hexagon } from "./Hexagon";
import { SkillIcon } from "./SkillTable";
import { SocialIcon } from "./Social";

export const ProjectHex = () => {
  const hexColorInner: string = uCMV("rgb(230,230,230)","rgb(28,32,43)");

  return (
    <Hexagon
      color={"goldenrod"}
      width={"30vw"}
      filter={uCMV("none","drop-shadow(0 0 5px goldenrod)")}>
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
              fontSize={{ base: "md", md: "xl", lg: "3xl" }}>
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
              bgColor={uCMV("rgb(235,235,235)","rgb(48,52,63)")}
              borderRadius={5}
              boxShadow={"0 25px 20px -20px black"}
              minWidth={"30vw"}
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
              fontFamily={"var(--chakra-fonts-nunito)"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <VStack>
              <SocialIcon
                icon={<FiGithub />}
                delay={"320ms"} 
                href={"https://github.com/terryszhou"} />
              <SocialIcon
                icon={<FiGithub />}
                delay={"320ms"} 
                href={"https://github.com/terryszhou"} />
            </VStack>
          </HStack>
        </VStack>
      </Hexagon>
    </Hexagon>
  );
};