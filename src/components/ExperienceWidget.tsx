import { Stack, HStack, Box, ListIcon, VStack, Text, List, ListItem,
        useColorModeValue as colorMode } from "@chakra-ui/react";
import * as React from "react";

import { BiRightArrow } from "react-icons/bi";

import { sideBob } from "../helpers/animations";
import { ColorSpan } from "./ColorSpan";
import { expArray } from "../data/experienceData";
import { useAnim } from "../hooks/useAnim";
import { SkillIcon } from "./SkillTable";

interface ExperienceWidgetProps {
    idx: number,
    setIdx: React.Dispatch<React.SetStateAction<number>>
};

export const ExperienceWidget = ({ idx, setIdx }: ExperienceWidgetProps) => {
    const sideBobAnim: string = useAnim(`${sideBob} 1s infinite`);

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
                    width={["100%", "20%"]}>
                    {expArray.map((exp, i) => (
                        <ListItem
                            color={idx === i
                                ? colorMode("rgb(190,147,45)", "goldenrod")
                                : colorMode("rgba(155,155,155,0.5)", "rgba(100,100,100,0.5)")}
                            backgroundColor={ idx === i && colorMode("rgba(210,210,210,0.5)", "rgba(48,48,48,0.5)") }
                            borderBottom={["3px solid", 0] }
                            borderLeft={[0, "3px solid"]}
                            fontFamily={"var(--chakra-fonts-mono)"}
                            fontSize={"xs"}
                            fontWeight={"bold"}
                            onClick={() => setIdx(i)}
                            padding={3}
                            paddingLeft={4}
                            position={"relative"}
                            width={"100%"}
                            transitionDuration={"0.3s"}
                            _before={{
                                content: `"»"`,
                                left: ["50%", "-25%"],
                                top: ["-25%", "25%"],
                                transform: ["rotate(90deg)", "rotate(0deg)"],
                                opacity: idx === i ? 1 : 0,
                                position: "absolute" }}
                            _hover={{
                                backgroundColor: colorMode("rgba(210,210,210,0.5)", "rgba(48,48,48,0.5)"),
                                borderColor: colorMode("rgb(190,147,45)", "goldenrod"),
                                color: colorMode("rgb(190,147,45)", "goldenrod"),
                                cursor: "pointer",
                                transitionDuration: "0.3s",
                                _before: { opacity: 1 } }}>
                            <Text
                                as={"span"}
                                color={idx === i
                                    ? colorMode("rgb(170,127,25)", "goldenrod")
                                    : colorMode("black", "white")}
                                opacity={0.8}>
                                {exp.company}
                            </Text>
                        </ListItem> ))}
                </List>
                <VStack
                    alignItems={"flex-start"}
                    display={"flex"}
                    height={"100%"}
                    paddingX={[0, 5]}
                    paddingY={{ base: 10, sm: 0, lg: 5 }}
                    width={{ base: "100%", lg: "80%" }}>
                    <Box>
                        <Text
                            fontWeight={"bold"}
                            fontFamily={"var(--chakra-fonts-mono)"} 
                            marginBottom={2}>
                            <Stack display={"flex"}>
                                <ColorSpan color={"gold"}>
                                    {expArray[idx].title}
                                </ColorSpan>
                                <Text>
                                    <ColorSpan
                                        color={"green"}
                                        fontFamily={"var(--chakra-fonts-nunito)"}>
                                        {` @ `}
                                    </ColorSpan>
                                    <Text
                                        as={"a"}
                                        href={expArray[idx].companyLink}
                                        opacity={0.6}
                                        position={"relative"}
                                        rel={"noreferrer"}
                                        target={"_blank"}
                                        transitionDuration={"0.2s"}
                                        _before={{
                                            backgroundColor: colorMode("black", "white"),
                                            borderRadius: "2px",
                                            bottom: -1,
                                            content: `""`,
                                            height: "2px",
                                            position: "absolute",
                                            transition: "100ms ease-out",
                                            width: 0 }}
                                        _hover={{
                                            opacity: 1,
                                            _before: { width: "100%" } }}>
                                        {expArray[idx].companyFull}
                                    </Text>
                                </Text>
                            </Stack>
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
                                    as={BiRightArrow}
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
}

