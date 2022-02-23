import { Box, Text, List, ListItem, ListIcon, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

import { BiRightArrow } from "react-icons/bi";
import { BsXDiamondFill } from "react-icons/bs";

import { fadeDown } from "../helpers/animations";
import { expArray } from "../helpers/variables";

interface ExperienceListProps {
  idx: number,
};

export const ExperienceList = ({ idx }: ExperienceListProps) => {
  const atCompanyColor2: string = useColorModeValue("rgb(102,105,127)", "gray.400");
  const listColor2: string = useColorModeValue("rgb(78,83,104)", "gray.300");
  const fadeDownAnim: string = `${fadeDown} 800ms`;
  const fadeDownAnim2: string = `${fadeDown} 800ms 120ms forwards`;
  const fadeDownAnim3: string = `${fadeDown} 800ms 240ms forwards`;

  return (
    <Box fontFamily={"var(--chakra-fonts-nunito)"}>
      <Box animation={fadeDownAnim}>
        <Text fontWeight={"bold"}>
          {expArray[idx].title}
        </Text>
        <Text
          as={"span"}
          color={atCompanyColor2}
          fontWeight="bold">
          @ {expArray[idx].company}
        </Text>
        <Text color={listColor2}>
          {expArray[idx].dates}
        </Text>
      </Box>
      <List
        animation={fadeDownAnim2}
        color={listColor2}
        marginY={5}
        opacity={0}>
        {expArray[idx].details.map((detail, i) => (
          <ListItem
            display={"flex"}
            marginY={2}
            key={i}>
            <ListIcon
              as={BsXDiamondFill}
              color='green.500'
              marginTop={1} />
              {detail}
          </ListItem>
        ))}
      </List>
      <List
        animation={fadeDownAnim3}
        color={listColor2}
        opacity={0}>
        {expArray[idx].skills.map((skill, i) => (
          <ListItem
            alignItems={"center"}
            display={"flex"}
            key={i}>
            <ListIcon
              as={BiRightArrow}
              color='green.500' />
              {skill}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
