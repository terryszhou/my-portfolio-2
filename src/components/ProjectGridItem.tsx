import {
    Box,
    GridItem,
    Heading,
    HStack,
    List,
    ListIcon,
    ListItem,
    useColorModeValue as colorMode,
    VStack
} from "@chakra-ui/react";
import * as React from "react";

import { BsXDiamondFill } from "react-icons/bs";

import { oldProjectListProps } from "../data/oldProjectData";
import { fadeDown } from "../helpers/animations";
import { SkillIcon } from "./SkillTable";
import { SocialIcon } from "./Social";

interface GridAnimationProps {
    delay: number,
};

export const ProjectGridItem = ({
    delay,
    details,
    links,
    skills,
    title,
}: oldProjectListProps & GridAnimationProps) => (
    <Box
        animation={`${fadeDown} 250ms ${delay}ms forwards`}
        as={"a"}
        href={links[0].href}
        opacity={0}
        rel={"noreferrer"}
        target={"_blank"}>
        <GridItem
            backgroundColor={colorMode("white","rgb(48,48,48)")}
            borderRadius={5}
            borderTop={colorMode("8px solid rgb(249,206,105)","8px solid rgb(171,127,25)")}
            boxShadow={"0 15px 10px -10px rgba(0,0,0,0.5)"}
            cursor={"pointer"}
            height={300}
            marginY={2}
            position={"relative"}
            role={"group"}
            transition={"100ms ease-in-out"}
            _before={{
                backgroundColor: colorMode("rgb(249,206,105)", "rgb(171,127,25)"),
                borderRadius: 5,
                zIndex: -1,
                content: `""`,
                clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
                height: 5,
                left: 0,
                position: "absolute",
                top: -5,
                width: "45%" }}
            _hover={{
                transform: "scale(1.02) rotate(1deg)",
                transitionDuration: "100ms" }}>
            <VStack padding={5}>
                <HStack
                    display={"flex"}
                    justifyContent={"flex-end"}
                    marginBottom={2}
                    width={"100%"}>
                    {links.map((e, i) => (
                    <SocialIcon
                        delay={e.delay}
                        href={e.href}
                        icon={e.icon}
                        key={i} /> ))}
                </HStack>
                <Heading
                    fontFamily={"var(--chakra-fonts-mono)"}
                    fontSize={"lg"}
                    transition={"100ms ease-in-out"}
                    _groupHover={{
                    color: "goldenrod",
                    transitionDuration: "100ms" }}>
                    {title}
                </Heading>
                <List marginY={5}>
                    {details.map((detail, i) => (
                    <ListItem
                        color={colorMode("rgba(44,44,44,0.8)","rgba(180,180,180,0.8)")}
                        display={"flex"}
                        fontFamily={"var(--chakra-fonts-nunito)"}
                        fontSize={"sm"}
                        key={i}
                        marginY={2}>
                        <ListIcon
                            as={BsXDiamondFill}
                            color={colorMode("rgb(64,124,104)", "green.500")}
                            marginTop={1} />
                        {detail}
                    </ListItem> ))}
                </List>
                <HStack bottom={5} position={"absolute"} spacing={5}>
                    {skills.map((skill, i) => (
                        <SkillIcon
                            color={skill.color}
                            delay={skill.delay}
                            icon={skill.icon}
                            key={i}
                            label={skill.label} /> ))}
                </HStack>
            </VStack>
        </GridItem>
    </Box>
);
