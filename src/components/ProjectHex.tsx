import {
  List,
  ListItem,
  ListIcon,
  Flex,
  Link,
  Text,
  VStack,
  HStack,
  useColorModeValue as uCMV,
  Heading,
  Image
} from "@chakra-ui/react";
import * as React from "react";

import { BiRightArrow } from "react-icons/bi";
import { BsXDiamondFill } from "react-icons/bs";

import { SkillIcon } from "./SkillTable";
import { SocialIcon } from "./Social";

import { featuredProjectListProps } from "../data/featuredProjectData";

export const ProjectHex = ({ dir, mainLink, image, title, skills, details, links }: featuredProjectListProps) => {
  const greenShadow: string = uCMV("none","drop-shadow(0 0 5px green)");
  return (
    <Flex
      flexDirection={{base: "column", lg: dir === "r" ? "row" : "row-reverse"}}
      marginBottom={"15%"}>
      <Flex>
        <Link href={mainLink}>
          <Image
            filter={"saturate(0.1)"}
            position={"relative"}
            src={image}
            transform={{
              base: "none",
              lg: dir === "r"
                ? "scale(1.15) translateX(7.5%)"
                : "scale(1.15) translateX(-7.5%)" }}
            transition={"300ms ease-in-out"}
            _hover={{
              filter: "saturate(1)",
              transitionDuration: "300ms" }} />
        </Link>
      </Flex>
      <VStack
        alignItems={{ base: "center", lg: dir === "r" ? "flex-end" : "flex-start" }}
        textAlign={{ base: "justify", lg: dir === "r" ? "right" : "left" }}
        transform={{ base: "none", lg: dir === "r" ? "translate(-5%, 5%)" : "translate(5%, 5%)" }}
        zIndex={1}>
        <VStack alignItems={{ base: "center", lg: dir === "r" ? "flex-end" : "flex-start" }}>
          <Heading
            color={"goldenrod"}
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize={{ base: "md", md: "xl", lg: "3xl" }}>
            {title}
          </Heading>
          <HStack>
            {skills.map((skill, i) => (
              <SkillIcon
                key={i}
                icon={skill.icon}
                color={skill.color}
                label={skill.label}
                delay={skill.delay} /> ))}
          </HStack>
        </VStack>
        <VStack alignItems={{ base: "center", lg: dir === "r" ? "flex-end" : "flex-start" }}>
          <List
            marginY={2}
            padding={5}
            bgColor={uCMV("rgb(220,220,220)","rgb(48,52,63)")}
            borderRadius={5}
            boxShadow={"0 25px 20px -20px black"}
            minWidth={"30vw"}
            fontSize={{ base: "xs", md: "sm", lg: "md" }}
            fontFamily={"var(--chakra-fonts-nunito)"}>
            {details.map((detail, i) => (
              <ListItem
                alignItems={"center"}
                display={"flex"}
                key={i}
                marginY={2}>
                <ListIcon
                  as={BsXDiamondFill}
                  color='green.500' 
                  filter={greenShadow}
                  marginTop={1} />
                  {detail}
              </ListItem> ))}
          </List>
          <HStack>
            {links.map((link, i) => (
              <SocialIcon
                key={i}
                icon={link.icon}
                delay={link.delay}
                href={link.href} /> ))}
          </HStack>
        </VStack>
      </VStack>
    </Flex>
  );
};