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
  SiAmazonaws,
  SiFirebase,
  SiPython,
  SiSass,
  SiTypescript,
  SiVuedotjs,
  SiGit,
  SiChakraui,
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
      <SkillIcon icon={SiPython} color={"rgb(66,108,152)"} label={"Python"} delay={"180ms"} />
    </HStack>
    <HStack justifyContent={"space-around"} padding={2}>
      <SkillIcon icon={SiTypescript} color={"rgb(65,112,183)"} label={"TypeScript"} delay={"240ms"} />
      <SkillIcon icon={SiNextdotjs} color={"rgb(50,109,170)"} label={"Next.js"} delay={"300ms"} />
      <SkillIcon icon={DiSass} color={"rgb(182,103,144)"} label={"Sass"} delay={"360ms"} />
      <SkillIcon icon={SiMicrosoftexcel} color={"rgb(50,113,70)"} label={"Excel/Sheets"} delay={"420ms"} />
    </HStack>
    <HStack justifyContent={"space-around"} padding={2}>
      <SkillIcon icon={SiNodedotjs} color={"rgb(110,149,99)"} label={"Node.js"} delay={"480ms"} />
      <SkillIcon icon={SiVuedotjs} color={"rgb(96,172,128)"} label={"Vue.js"} delay={"540ms"} />
      <SkillIcon icon={SiTailwindcss} color={"rgb(89,170,163)"} label={"Tailwind"} delay={"600ms"} />
      <SkillIcon icon={SiGit} color={"rgb(211,87,60)"} label={"Git"} delay={"660ms"} />
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
          boxSize={{ base: 6, lg: 6 }}
          color={color}
          transition={"100ms ease-in-out"}
          _hover={{
            transform: "scale(1.1)",
            filter: useColorModeValue("brightness(1.1)" , `brightness(1.2) drop-shadow(0 0 5px ${color})`) }} />
      </Center>
    </Tooltip>
  );
};