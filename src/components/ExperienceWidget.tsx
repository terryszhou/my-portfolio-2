import { Stack, Box, ListIcon, VStack, Text, List, ListItem, useColorModeValue as colorMode } from "@chakra-ui/react";
import * as React from "react";

import { BsXDiamondFill } from "react-icons/bs";

import { expArray } from "../data/experienceData";
import { GoldSpan } from "./ColorSpan";
import { SkillIcon } from "./SkillTable";

interface ExperienceWidgetProps {
    idx: number,
    setIdx: React.Dispatch<React.SetStateAction<number>>
};

export const ExperienceWidget = ({ idx, setIdx }: ExperienceWidgetProps) => {
    const atCompanyColor2: string = colorMode("rgb(102,105,127)", "gray.400");
    const listColor2: string = colorMode("rgb(78,83,104)", "gray.300");

    return (
        <React.Fragment>
            <Stack
                direction={["column", "row"]}
                height={290}
                marginTop={{ base: "10%", lg: 0 }}
                marginBottom={{ base: "60%", lg: 0 }}
                width={{ base: "80vw", lg: "60vw" }}>
                <List
                    display={"flex"}
                    flexDirection={["row", "column"]}
                    height={"100%"}
                    justifyContent={"space-around"}
                    width={["100%", "20%"]}>
                    {expArray.map((exp, i) => (
                        <ListItem
                            color={idx === i && colorMode("rgb(190,147,45)", "goldenrod")}
                            backgroundColor={idx === i && colorMode("rgba(210,210,210,0.5)", "rgba(48,48,48,0.5)")}
                            borderBottom={ idx === i && ["3px solid", 0] }
                            borderColor={idx === i && colorMode("rgb(190,147,45)", "goldenrod") }
                            borderLeft={ idx === i && [0, "3px solid"] }
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
                                borderBottom: ["3px solid", 0],
                                borderColor: colorMode("rgb(190,147,45)", "goldenrod"),
                                borderLeft: [0, "3px solid"],
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
                    width={{ base: "100%", lg: "80%" }}>
                    <Box fontFamily={"var(--chakra-fonts-nunito)"}>
                        <Box>
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
                            alignItems={"space-between"}
                            color={listColor2}
                            display={"flex"}
                            flexDirection={"column"}
                            marginY={5}>
                            {expArray[idx].details.map((detail, i) => (
                                <ListItem
                                    display={"flex"}
                                    marginY={2}
                                    key={i}>
                                    <ListIcon
                                        fontSize={{ base: "xs", lg: "sm"}}
                                        as={BsXDiamondFill}
                                        color={colorMode("rgb(64,124,104)", "green.500")}
                                        marginTop={1} />
                                    <Text as={"span"} opacity={0.8}>
                                        {detail}
                                    </Text>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </VStack>
            </Stack>
            <Stack
                color={listColor2}
                display={"flex"}
                flexDirection={"row"}
                fontFamily={"var(--chakra-fonts-nunito)"}
                justifyContent={"space-around"}>
                {expArray[idx].skills.map((skill, i) => (
                    <SkillIcon
                        color={skill.color}
                        delay={"200ms"}
                        icon={skill.icon}
                        key={i}
                        label={skill.label} />
                ))}
            </Stack>
        </React.Fragment>
    );
};
