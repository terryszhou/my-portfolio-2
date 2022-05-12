import {
  Box,
  Tooltip,
  Center,
  Icon,
  HStack,
  useColorModeValue
} from "@chakra-ui/react";
import * as React from "react";

import {
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiJquery,
  SiAmazonaws,
  SiFirebase,
  SiPython,
  SiTypescript,
  SiVuedotjs,
  SiGit,
  SiChakraui,
  SiPandas,
  SiMicrosoftexcel,
  SiPostgresql,
} from "react-icons/si";
import { DiSass } from "react-icons/di"

import { fadeDown } from "../helpers/animations";
import { IconType } from "react-icons";

export const SkillTable = () => (
  <Box
    borderRadius={5}
    fontFamily={"var(--chakra-fonts-mono)"}
    fontSize={{ base: "xs", lg: "sm" }}
    width={"100%"}>
    <HStack justifyContent={"space-around"} padding={2}>
      <SkillIcon icon={SiJavascript} color={"rgb(229,212,88)"} label={"JavaScript"} delay={"0ms"} />
      <SkillIcon icon={SiReact} color={"rgb(114,183,208)"} label={"React"} delay={"60ms"} />
      <SkillIcon icon={SiCss3} color={"rgb(69,98,226)"} label={"CSS"} delay={"120ms"} />
      <SkillIcon icon={SiAmazonaws} color={"rgb(229,150,53)"} label={"AWS"} delay={"180ms"} />
      <SkillIcon icon={SiNodedotjs} color={"rgb(110,149,99)"} label={"Node.js"} delay={"240ms"} />
    </HStack>
    <HStack justifyContent={"space-around"} padding={2}>
      <SkillIcon icon={SiTypescript} color={"rgb(65,112,183)"} label={"TypeScript"} delay={"300ms"} />
      <SkillIcon icon={SiNextdotjs} color={"rgb(50,109,170)"} label={"Next.js"} delay={"360ms"} />
      <SkillIcon icon={DiSass} color={"rgb(182,103,144)"} label={"Sass"} delay={"420ms"} />
      <SkillIcon icon={SiFirebase} color={"rgb(219,129,49)"} label={"Firebase"} delay={"480ms"} />
      <SkillIcon icon={SiJquery} color={"rgb(43,97,157)"} label={"jQuery"} delay={"540ms"} />
    </HStack>
    <HStack justifyContent={"space-around"} padding={2}>
      <SkillIcon icon={SiPython} color={"rgb(66,108,152)"} label={"Python"} delay={"600ms"} />
      <SkillIcon icon={SiVuedotjs} color={"rgb(96,172,128)"} label={"Vue.js"} delay={"660ms"} />
      <SkillIcon icon={SiTailwindcss} color={"rgb(89,170,163)"} label={"Tailwind"} delay={"720ms"} />
      <SkillIcon icon={SiGit} color={"rgb(211,87,60)"} label={"Git"} delay={"780ms"} />
      <SkillIcon icon={SiPandas} color={"rgb(202,42,128)"} label={"Pandas"} delay={"840ms"} />
    </HStack>
  </Box>
);

interface SkillIconProps {
  color: string,
  delay: string,
  icon: React.ComponentType<IconType>,
  label: string,
};

export const SkillIcon = ({ color, delay, icon, label }: SkillIconProps) => {
  const fadeDownAnim: string = `${fadeDown} 500ms ${delay} forwards`;

  return (
    <Tooltip label={label} hasArrow>
      <Center animation={fadeDownAnim} opacity={0}>
        <Icon
          as={icon}
          borderRadius={5}
          boxSize={6}
          color={color}
          transition={"100ms ease-in-out"}
          _hover={{
            transform: "scale(1.1)",
            filter: useColorModeValue("brightness(1.1)" , `brightness(1.2) drop-shadow(0 0 5px ${color})`) }} />
      </Center>
    </Tooltip>
  );
};