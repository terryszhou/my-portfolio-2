import { Stack, HStack, Box, ListIcon, VStack, Text, List, ListItem,
        useColorModeValue as colorMode } from "@chakra-ui/react";
import * as React from "react";

import { BsXDiamondFill } from "react-icons/bs";

import { GoldSpan } from "./ColorSpan";
import { expArray } from "../data/experienceData";
import { SkillIcon } from "./SkillTable";

interface ExperienceWidgetProps {
    idx: number,
    setIdx: React.Dispatch<React.SetStateAction<number>>
};

export const ExperienceWidget = ({ idx, setIdx }: ExperienceWidgetProps) => {

    return (
        <React.Fragment>
            <Stack
                direction={["column", "row"]}
                height={290}
                marginTop={{ base: "20%", sm: "10%", lg: 0 }}
                marginBottom={{ base: "50%", sm: "15%", lg: 0 }}
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
                            backgroundColor={ idx === i && colorMode("rgba(210,210,210,0.5)", "rgba(48,48,48,0.5)") }
                            borderBottom={ idx === i && ["3px solid", 0] }
                            borderColor={ idx === i && colorMode("rgb(190,147,45)", "goldenrod") }
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
                            <Text as={"span"} opacity={0.8}>
                                {exp.company}
                            </Text>
                        </ListItem> ))}
                </List>
                <VStack
                    alignItems={"flex-start"}
                    display={"flex"}
                    height={"100%"}
                    padding={5}
                    width={{ base: "100%", lg: "80%" }}>
                    <Box>
                        <Text fontWeight={"bold"} marginBottom={2}>
                            <GoldSpan>
                                {expArray[idx].title}
                            </GoldSpan>
                            <Text
                                as={"span"}
                                fontWeight={"bold"}
                                opacity={0.6}>
                                {` @ `}{expArray[idx].company}
                            </Text>
                        </Text>
                        <Text
                            fontFamily={"var(--chakra-fonts-mono)"}
                            fontSize={"xs"}
                            opacity={0.5}>
                            {expArray[idx].dates}
                        </Text>
                    </Box>
                    <List
                        alignItems={"space-between"}
                        display={"flex"}
                        flexDirection={"column"}
                        marginY={5}>
                        {expArray[idx].details.map((detail, i) => (
                            <ListItem
                                display={"flex"}
                                key={i}
                                marginY={2}>
                                <ListIcon
                                    as={BsXDiamondFill}
                                    color={colorMode("rgb(64,124,104)", "green.500")}
                                    fontSize={{ base: "xs", lg: "sm" }}
                                    marginTop={1} />
                                <Text as={"span"} opacity={0.6}>
                                    {detail}
                                </Text>
                            </ListItem> ))}
                    </List>
                </VStack>
            </Stack>
            <HStack
                fontFamily={"var(--chakra-fonts-nunito)"}
                paddingLeft={5}
                spacing={"10%"}>
                {expArray[idx].skills.map((skill, i) => (
                    <SkillIcon
                        color={skill.color}
                        delay={skill.delay}
                        icon={skill.icon}
                        key={i}
                        label={skill.label} /> ))}
            </HStack>
        </React.Fragment>
    );
};
