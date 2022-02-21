import { Box, Tooltip, Center, Icon, HStack, useColorModeValue, Text, Flex, VStack } from "@chakra-ui/react";
import * as React from "react";

import { SiCss3, SiReact, SiNodedotjs, SiNextdotjs, SiTailwindcss, SiAmazonaws, SiFirebase, SiPython, SiChakraui, SiVercel } from "react-icons/si";
import { DiJavascript, DiSass } from "react-icons/di"

export const SkillTable = () => {
  return (
    <Box
      border={"2px solid goldenrod"}
      borderRadius={5}
      boxShadow={useColorModeValue("none", "0 0 5px goldenrod")}
      fontFamily={"var(--chakra-fonts-mono)"}
      fontSize={{ base: "xs", lg: "sm" }}
      marginTop={"1rem"}
      width={{ base: "50%", lg: "70%" }}>
      <HStack justifyContent={"space-around"} padding={2}>
        <SkillIcon icon={DiJavascript} color={"rgb(229,212,88)"} label={"JavaScript/TypeScript"} />
        <SkillIcon icon={SiReact} color={"rgb(114,183,208)"} label={"React"} />
        <SkillIcon icon={SiCss3} color={"rgb(69,98,226)"} label={"CSS"} />
        <SkillIcon icon={SiAmazonaws} color={"rgb(241,158,56)"} label={"AWS/Route 53"} />
      </HStack>
      <HStack justifyContent={"space-around"} padding={2}>
        <SkillIcon icon={SiNodedotjs} color={"rgb(110,149,99)"} label={"Node.js"} />
        <SkillIcon icon={SiNextdotjs} color={"rgb(50,109,170)"} label={"Next.js"} />
        <SkillIcon icon={DiSass} color={"rgb(182,103,144)"} label={"Sass"} />
        <SkillIcon icon={SiFirebase} color={"rgb(234,195,77)"} label={"Firebase/Google Cloud"} />
      </HStack>
      <HStack justifyContent={"space-around"} padding={2}>
        <SkillIcon icon={SiPython} color={"rgb(66,108,152)"} label={"Python"} />
        <SkillIcon icon={SiChakraui} color={"rgb(89,178,170)"} label={"Chakra UI"} />
        <SkillIcon icon={SiTailwindcss} color={"rgb(89,170,163)"} label={"Tailwind"} />
        <SkillIcon icon={SiVercel} color={"rgb(83,83,83)"} label={"Vercel"} />
      </HStack>
    </Box>
  );
};
interface SkillIconProps {
  icon: any,
  color: string,
  label: string,
}

export const SkillIcon = ({ icon, color, label }: SkillIconProps) => {
  return (
    <Tooltip label={label} hasArrow>
      <Center>
        <Icon
          as={icon}
          borderRadius={5}
          boxSize={{ base: 6, lg: 8 }}
          color={color}
          transition={"100ms ease-in-out"}
          _hover={{
            transform: "scale(1.1)",
            filter: useColorModeValue("brightness(1.1)" , `brightness(1.2) drop-shadow(0 0 5px ${color})`) }} />
      </Center>
    </Tooltip>
  );
};