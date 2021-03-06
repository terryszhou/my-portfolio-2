import {
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  useColorModeValue as colorMode,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";

import { BsXDiamondFill } from "react-icons/bs";

import { newProjectListProps } from "../data/newProjectData";
import { SkillIcon } from "./SkillTable";
import { SocialIcon } from "./Social";

export const NewProjectShell = ({
    details,
    dir,
    image,
    links,
    mainLink,
    skills,
    title,
}: newProjectListProps) => (
    <Flex
        flexDirection={{
            base: "column",
            lg: dir === "r"
                ? "row"
                : "row-reverse" }}
        marginY={"5%"}>
        <Flex>
            <Link href={mainLink} isExternal _focus={{ border: "none" }}>
                <Image
                borderRadius={"5px"}
                boxShadow={"0 15px 10px -10px rgba(0,0,0,0.5)"}
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
                    transform: {
                    base: "scale(1.1)",
                    lg: dir === "r"
                        ? "scale(1.25) translateX(7.5%)"
                        : "scale(1.25) translateX(-7.5%)" },
                    filter: "saturate(1)",
                    transitionDuration: "300ms" }} />
            </Link>
        </Flex>
        <VStack
            alignItems={{
                base: "center",
                lg: dir === "r"
                    ? "flex-end"
                    : "flex-start" }}
            textAlign={{
                base: "justify",
                lg: dir === "r"
                    ? "right"
                    : "left" }}
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
                    : "flex-start" }}
                marginTop={{ base: 5, lg: 0 }}>
                <Heading
                    color={colorMode("rgb(190,147,45)", "goldenrod")}
                    fontFamily={"var(--chakra-fonts-mono)"}
                    fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
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
                        : "flex-start" }}
                opacity={0.9}>
                <List
                    bgColor={colorMode("rgb(220,220,220)", "rgb(48,48,48)")}
                    borderRadius={5}
                    boxShadow={"0 15px 10px -10px rgba(0,0,0,0.5)"}
                    fontFamily={"var(--chakra-fonts-nunito)"}
                    fontSize={{ base: "xs", md: "sm", lg: "md" }}
                    marginY={5}
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
                                color={colorMode("rgb(64,124,104)", "green.500")}
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
