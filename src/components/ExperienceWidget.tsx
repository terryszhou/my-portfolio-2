import { Stack, Box, Button, ListIcon, HStack, VStack, Text, List, ListItem, useColorModeValue as colorMode } from "@chakra-ui/react";
import * as React from "react";

import { BiRightArrow } from "react-icons/bi";
import { BsXDiamondFill } from "react-icons/bs";

import { expArray } from "../data/experienceData";
import { fadeDown } from "../helpers/animations";
import { GoldSpan, GreenSpan } from "./ColorSpan";

interface ExperienceWidgetProps {
    idx: number,
    setIdx: React.Dispatch<React.SetStateAction<number>>
};

export const ExperienceWidget = ({ idx, setIdx }: ExperienceWidgetProps) => {
    const atCompanyColor2: string = colorMode("rgb(102,105,127)", "gray.400");
    const fadeDownAnim: string = `${fadeDown} 250ms`;
    const fadeDownAnim2: string = `${fadeDown} 250ms 120ms forwards`;
    const fadeDownAnim3: string = `${fadeDown} 250ms 240ms forwards`;
    const listColor2: string = colorMode("rgb(78,83,104)", "gray.300");

    return (
        <HStack
            height={290}
            width={{ base: "80vw", lg: "60vw" }}>
            <List
                display={"flex"}
                flexDirection={"column"}
                height={"100%"}
                justifyContent={"space-around"}
                width={"20%"}>
                {expArray.map((exp, i) => (
                    <ListItem
                        color={idx === i && colorMode("rgb(190,147,45)", "goldenrod")}
                        backgroundColor={idx === i && colorMode("rgba(210,210,210,0.5)", "rgba(48,48,48,0.5)")}
                        borderColor={idx === i && colorMode("rgb(190,147,45)", "goldenrod")}
                        borderLeft={idx === i && "2px solid"}
                        borderRadius={5}
                        fontFamily={"var(--chakra-fonts-mono)"}
                        fontSize={"xs"}
                        fontWeight={"bold"}
                        onClick={() => setIdx(i)}
                        padding={3}
                        paddingLeft={4}
                        width={"100%"}
                        transitionDuration={"0.2s"}
                        _hover={{
                            backgroundColor: colorMode("rgba(210,210,210,0.5)", "rgba(48,48,48,0.5)"),
                            borderColor: colorMode("rgb(190,147,45)", "goldenrod"),
                            borderLeft: "2px solid",
                            color: colorMode("rgb(190,147,45)", "goldenrod"),
                            cursor: "pointer",
                            transitionDuration: "0.2s" }}>
                        {exp.company}
                    </ListItem>
                ))}
            </List>
            <VStack
                height={"100%"}
                padding={5}
                width={"60%"}>
                <Box fontFamily={"var(--chakra-fonts-nunito)"}>
                    <Box animation={fadeDownAnim}>
                        <Text fontWeight={"bold"} marginBottom={2}>
                            <GoldSpan>
                                {expArray[idx].title}
                            </GoldSpan>
                            <Text
                                as={"span"}
                                color={atCompanyColor2}
                                fontWeight={"bold"}>
                                {` @ `}{expArray[idx].company}
                            </Text>
                        </Text>
                        <Text
                            color={listColor2} 
                            fontFamily={"var(--chakra-fonts-mono)"}
                            fontSize={"xs"}
                            opacity={0.6}>
                            {expArray[idx].dates}
                        </Text>
                    </Box>
                    <List
                        color={listColor2}
                        marginY={5}>
                        {expArray[idx].details.map((detail, i) => (
                            <ListItem
                                display={"flex"}
                                marginY={2}
                                key={i}>
                                <ListIcon
                                    as={BsXDiamondFill}
                                    color={colorMode("rgb(64,124,104)", "green.500")}
                                    marginTop={1} />
                                {detail}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </VStack>
            <Stack>
                <List
                    display={"flex"}
                    flexDirection={"column"}
                    height={"100%"}
                    justifyContent={"space-around"}
                    animation={fadeDownAnim3}
                    color={listColor2}
                    fontFamily={"var(--chakra-fonts-nunito)"}
                    opacity={0}>
                    {expArray[idx].skills.map((skill, i) => (
                        <ListItem
                            alignItems={"center"}
                            display={"flex"}
                            margin={2}
                            key={i}>
                            <ListIcon
                                as={BiRightArrow}
                                color={colorMode("rgb(64,124,104)", "green.500")}
                                marginTop={1} />
                            {skill}
                        </ListItem>
                    ))}
                </List>
            </Stack>
        </HStack>
    );
};
