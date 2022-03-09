import {
  Box, Heading, List, ListIcon, ListItem, Stack, Table, Tbody,
  Td, Text, Tfoot, Tooltip, Tr, useColorModeValue, useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import { BiRightArrow } from "react-icons/bi";

import { expArray, monArr, yearArr } from "../data/experienceData";
import { ExperienceList } from "./ExperienceList";
import { GoldSpan } from "./ColorSpan";
import { HeroShell } from "./HeroShell";
import { growRight } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";

export const Experience = ({ pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible]);

  const [idx, setIdx] = React.useState<number>(0);
  React.useEffect((): void => idx && setIdx(idx), [idx]);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const growRightAnim: string = `${growRight} 1s 250ms forwards`;
  const monW: number = (1 / (monArr.length)) * 100;
  const atCompanyColor: string = useColorModeValue("gray.400", "rgb(102,105,127)")
  const listColor: string = useColorModeValue("gray.300", "rgb(78,83,104)");

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
                  <ListIcon as={BiRightArrow} color='green.500' />
                  {skill}
                </ListItem> ))}
            </List>
          </Box> }>
        <Tr cursor={"pointer"} onClick={() => { setIdx(i); onOpen(); }} role={"group"}>
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
              animation={growRightAnim}
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
      pageRefs={pageRefs}
      refNum={2}
      visible={visible}>
      <Stack ref={visRef} spacing={5}>
        {loaded && <ExperienceTable expMap={expMap} />}
        <ExperienceHeading />
      </Stack>
      <ExperienceList
        idx={idx}
        isOpen={isOpen}
        onClose={onClose} />
    </HeroShell>
  );
};

interface ExperienceTableProps {
  expMap: JSX.Element[],
};

export const ExperienceTable = ({ expMap }: ExperienceTableProps) => (
  <Stack
    borderRadius={5}
    boxShadow={"10px 20px 25px -20px black"}
    fontSize={{ base: "xs", lg: "md" }}
    overflow={"scroll"}
    width={{ base: "80vw", lg: "60vw" }}>
    <Table
      fontFamily={"var(--chakra-fonts-mono)"}
      opacity={0.8}
      variant={"striped"}>
      <Tbody>{expMap}</Tbody>
      <Tfoot>
        <Tr>
          <Td borderBottom={"none"} colSpan={3} paddingY={"0.25%"} />
          {monArr.map((e, i) => (
            <Td borderBottom={"none"} key={i} paddingY={"0.25%"}>
              {e}
            </Td> ))}
        </Tr>
        <Tr>
          <Td borderBottom={"none"} />
          {yearArr.map((e, i) => (
            <Td borderBottom={"none"} color={'red.500'} key={i} paddingY={"0.25%"} >
              {e}
            </Td> ))}
        </Tr>
      </Tfoot>
    </Table>
  </Stack>
);

export const ExperienceHeading = () => (
  <Heading
    fontFamily={"var(--chakra-fonts-roboto)"}
    fontSize={{ base: "md", md: "xl", lg: "2xl"}}>
    <GoldSpan>* </GoldSpan>
    Hover for
    <GoldSpan> summary. </GoldSpan>
    Click for 
    <GoldSpan> details!</GoldSpan>
  </Heading>
);
