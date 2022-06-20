import {
    Box, List, ListIcon, ListItem, Stack, Td, Text, 
    Tooltip, Tr, useColorModeValue as colorMode, useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import { BiRightArrow } from "react-icons/bi";

import { expArray, monArr } from "../data/experienceData";
import { ExperienceHeading } from "./ExperienceHeading";
import { ExperienceList } from "./ExperienceList";
import { ExperiencePie } from "./ExperiencePie";
import { ExperienceTable } from "./ExperienceTable";
import { expGrow } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";
import { HeroShell } from "./HeroShell";
import { useAnim } from "../hooks/useAnim";

export const Experience = ({ pageRefs, visible, visRef }: PageProps) => {
    const [loaded, setLoaded] = React.useState<boolean>(false);
    React.useEffect((): void => visible && setLoaded(true), [visible]);

    const [idx, setIdx] = React.useState<number>(0);
    React.useEffect((): void => idx && setIdx(idx), [idx]);

    const [hovered, setHovered] = React.useState<number | null>(null);
    const [pie, setPie] = React.useState<boolean>(false);

    const { isOpen, onOpen, onClose } = useDisclosure()
    const expGrowAnim: string = useAnim(`${expGrow} 1s`);
    const monW: number = (1 / (monArr.length)) * 100;
    const atCompanyColor: string = colorMode("gray.400","rgb(102,105,127)")
    const listColor: string = colorMode("gray.300","rgb(78,83,104)");

    const expMap: JSX.Element[] = expArray.map((exp, i) => (
        <React.Fragment key={i}>
            <Tooltip
                hasArrow
                label={
                <Box fontFamily={"var(--chakra-fonts-nunito)"}>
                    <Text fontWeight={"bold"}>{exp.title}</Text>
                    <Text color={atCompanyColor} fontWeight="bold"> @ {exp.company}</Text>
                    <Text color={listColor}>{exp.dates}</Text>
                    <List color={listColor}>
                        {exp.skills.map((skill, i) => (
                            <ListItem key={i}>
                            <ListIcon
                                as={BiRightArrow}
                                color={colorMode("rgb(64,124,104)", "green.500")} />
                            {skill}
                            </ListItem> ))}
                    </List>
                </Box> }>
                <Tr
                    cursor={"pointer"}
                    onClick={() => { setIdx(i); onOpen(); }}
                    role={"group"}>
                    <Td
                        colSpan={3}
                        fontSize={"xs"}
                        fontWeight={"bold"}
                        paddingY={"0.5%"}
                        transition={"200ms ease-in-out"}
                        _groupHover={{ color: "goldenrod" }}>
                        {exp.company}
                    </Td>
                    <Td colSpan={monArr.length} >
                        <Box
                            animation={loaded && expGrowAnim}
                            backgroundColor={exp.color}
                            borderRadius={5}
                            height={2}
                            marginLeft={`calc(${monW * (exp.start - 1)}% + ${exp.start !== 1 && "24px"})`}
                            transform={"skew(-45deg)"}
                            transition={"200ms ease-out"}
                            width={`calc(${monW * exp.length}% - 24px)`}
                            _groupHover={{
                                filter: "brightness(1.5)",
                                transform: "scale(1.05) skew(-45deg)",
                                transitionDuration: 0.2, }} />
                    </Td>
                </Tr>
            </Tooltip>
        </React.Fragment>
    ));

    return (
        <HeroShell
            label={"02. My Experience"}
            loaded={loaded}
            pageRefs={pageRefs}
            refNum={2}>
            <Stack ref={visRef} spacing={5}>
                {loaded && pie
                    ? <ExperiencePie 
                        setIdx={setIdx}
                        onOpen={onOpen}
                        hovered={hovered}
                        setHovered={setHovered} />
                    : <ExperienceTable expMap={expMap} /> }
                <ExperienceHeading pie={pie} setPie={setPie} />
            </Stack>
            <ExperienceList
                idx={idx}
                isOpen={isOpen}
                onClose={onClose} />
        </HeroShell>
    );
};
