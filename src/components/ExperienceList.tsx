import { Box, Text, List, ListItem, ListIcon, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

import { BiRightArrow } from "react-icons/bi";
import { BsXDiamondFill } from "react-icons/bs";

import { expArray } from "../helpers/variables";

interface ExperienceListProps {
  idx: number,
};

export const ExperienceList = ({ idx }: ExperienceListProps) => {
  const atCompanyColor2: string = useColorModeValue("rgb(102,105,127)", "gray.400");
  const listColor2: string = useColorModeValue("rgb(78,83,104)", "gray.300");

  return (
    <Box fontFamily={"var(--chakra-fonts-nunito)"}>
      <Text fontWeight={"bold"}>{expArray[idx].title}</Text>
      <Text as={"span"} color={atCompanyColor2} fontWeight="bold"> @ {expArray[idx].company}</Text>
      <Text color={listColor2}>{expArray[idx].dates}</Text>
      <List color={listColor2} marginY={5}>
        {expArray[idx].details.map((detail, i) => (
          <ListItem key={i} marginY={2} display={"flex"}>
            <ListIcon as={BsXDiamondFill} color='green.500' marginTop={1} />
            {detail}
          </ListItem>
        ))}
      </List>
      <List color={listColor2}>
        {expArray[idx].skills.map((skill, i) => (
          <ListItem key={i} display={"flex"} alignItems={"center"}>
            <ListIcon as={BiRightArrow} color='green.500' />
            {skill}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
