import {
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  useColorModeValue as uCMV,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";

import { BsXDiamondFill } from "react-icons/bs";

import { newProjectListProps } from "../data/newProjectData";
import { SkillIcon } from "./SkillTable";
import { SocialIcon } from "./Social";

export const NewProjectShell = ({ dir, mainLink, image, title, skills, details, links }: newProjectListProps) => {
  const greenShadow: string = uCMV("none","drop-shadow(0 0 5px green)");
  return (
    <Flex flexDirection={{ base: "column", lg: dir === "r" ? "row" : "row-reverse" }}>
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
        transform={{
          base: "none",
          lg: dir === "r"
            ? "translate(-5%, 5%)"
            : "translate(5%, 5%)" }}
        zIndex={1}>
        <VStack
          alignItems={{
            base: "center",
            lg: dir === "r"
              ? "flex-end"
              : "flex-start" }}>
          <Heading
            color={"goldenrod"}
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize={{ base: "md", md: "xl", lg: "3xl" }}>
            {title}
          </Heading>
          <HStack>
            {skills.map((skill, i) => (
              <SkillIcon
                color={skill.color}
                delay={skill.delay}
                icon={skill.icon}
                key={i}
                label={skill.label} /> ))}
          </HStack>
        </VStack>
        <VStack
          alignItems={{
            base: "center",
            lg: dir === "r"
              ? "flex-end"
              : "flex-start" }}>
          <List
            bgColor={uCMV("rgb(220,220,220)","rgb(48,52,63)")}
            borderRadius={5}
            boxShadow={"0 25px 20px -20px black"}
            fontFamily={"var(--chakra-fonts-nunito)"}
            fontSize={{ base: "xs", md: "sm", lg: "md" }}
            marginY={2}
            minWidth={"30vw"}
            padding={5}
            spacing={2}>
            {details.map((detail, i) => (
              <ListItem
                alignItems={"left"}
                display={"flex"}
                key={i}>
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
                delay={link.delay}
                href={link.href}
                icon={link.icon}
                key={i} /> ))}
          </HStack>
        </VStack>
      </VStack>
    </Flex>
  );
};
