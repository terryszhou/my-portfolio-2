import { Box, Flex, Text, VStack, HStack, useColorModeValue, Heading } from "@chakra-ui/react";
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
import { HeroShell } from "./HeroShell";
import { Hexagon } from "./Hexagon";
import { PageProps } from "../helpers/interfaces";
import { ProjectHex } from "./ProjectHex";

export const Projects = ({ pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible]);

  return (
    <HeroShell
      label={"04. Recent Projects"}
      pageRefs={pageRefs}
      refNum={4}
      visible={visible}>
      <Flex
        alignItems={"center"}
        height={"45vw"}
        justifyContent={"center"}
        ref={visRef}
        width={"45vw"}>
        {/* <ProjectHex /> */}
      </Flex>
      <Box />

    </HeroShell>
  );
};