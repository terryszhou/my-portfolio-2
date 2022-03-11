import {
  Box, Button, Flex, Heading, List, ListIcon, ListItem, Stack, Table, Tbody,
  Td, Text, Tfoot, Tooltip, Tr, useColorModeValue as uCMV, useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import { BiRightArrow } from "react-icons/bi";
import { PieChart } from 'react-minimal-pie-chart';
import ReactTooltip from 'react-tooltip';

import { expArray, monArr, yearArr } from "../data/experienceData";
import { ExperienceList } from "./ExperienceList";
import { GoldSpan } from "./ColorSpan";
import { HeroShell } from "./HeroShell";
import { growRight } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";

type Props = {
  data: React.ComponentProps<typeof PieChart>['data'];
};

const makeTooltipContent = (entry: Props['data'][0]) => `${entry.title} @ ${entry.company}`;

export const Experience = ({ pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible]);

  const [idx, setIdx] = React.useState<number>(0);
  React.useEffect((): void => idx && setIdx(idx), [idx]);

  const [hovered, setHovered] = React.useState<number | null>(null);
  const [pie, setPie] = React.useState<boolean>(false);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const growRightAnim: string = `${growRight} 1s 250ms forwards`;
  const monW: number = (1 / (monArr.length)) * 100;
  const atCompanyColor: string = uCMV("gray.400","rgb(102,105,127)")
  const listColor: string = uCMV("gray.300","rgb(78,83,104)");

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

  const pieMap = expArray.map((exp, i) => ({
    title: exp.title, value: exp.length, color: exp.color, company: exp.company
  }));

  return (
    <HeroShell
      label={"02. My Experience"}
      loaded={loaded}
      pageRefs={pageRefs}
      refNum={2}
      visible={visible}>
      <Stack ref={visRef} spacing={5}>
        {loaded && pie
          ? <ExperiencePie 
              setIdx={setIdx}
              onOpen={onOpen}
              hovered={hovered}
              setHovered={setHovered}
              pieMap={pieMap} />
          : <ExperienceTable expMap={expMap} />
        }
        <ExperienceHeading pie={pie} setPie={setPie} />
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
    fontSize={{ base: "xs", lg: "sm" }}
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

interface ExperiencePieProps {
  setIdx: React.Dispatch<number>,
  onOpen: () => void,
  hovered: number,
  setHovered: React.Dispatch<number>,
  pieMap: {
    title: string,
    value: number,
    color: string,
    company: string,
  }[],
};

export const ExperiencePie = ({ setIdx, onOpen, hovered, setHovered, pieMap }: ExperiencePieProps) => (
  <div className="pie-container" data-tip="" data-for="chart">
    <PieChart
      animate
      animationDuration={500}
      animationEasing="ease-out"
      radius={20}
      lineWidth={25}
      onClick={() => { setIdx(hovered); onOpen(); }}
      onMouseOver={(_, index) => setHovered(index)}
      onMouseOut={() => setHovered(null)}
      segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
      data={pieMap} />
    <ReactTooltip
      id="chart"
      getContent={() =>
        typeof hovered === 'number' ? makeTooltipContent(pieMap[hovered]) : null
      } />
  </div> 
);

interface ExperienceHeadingProps {
  pie: boolean,
  setPie: React.Dispatch<boolean>
};

export const ExperienceHeading = ({ pie, setPie }: ExperienceHeadingProps) => {
  const goldShadow: string = uCMV("none","drop-shadow(0 0 5px goldenrod)");
  return (
    <Flex
      alignItems={"center"}
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent={"center"}>
      <Heading
        fontFamily={"var(--chakra-fonts-roboto)"}
        fontSize={{ base: "md", md: "xl", lg: "2xl"}}
        margin={5}>
        <GoldSpan>* </GoldSpan>
        Hover for
        <GoldSpan> summary. </GoldSpan>
        Click for 
        <GoldSpan> details!</GoldSpan>
      </Heading>
      {/* <Button
        backgroundColor={"transparent"}
        border={"1px solid goldenrod"}
        color={"goldenrod"}
        onClick={() => setPie(!pie)}
        cursor={"pointer"}
        filter={goldShadow}
        fontFamily={"var(--chakra-fonts-mono)"}
        fontSize={13}
        _focus={{ boxShadow: "none" }}
        _hover={{ backgroundColor: "goldenrod", color: "inherit" }}>
        Toggle Chart
      </Button> */}
    </Flex>
  );
};

