import { Box, Divider, Text, Heading, List, ListItem, ListIcon, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

import { BiRightArrow } from "react-icons/bi";
import { listArray } from "../helpers/variables";

interface ProjectListProps {
  rotation: number,
};

export const ProjectList = ({ rotation }: ProjectListProps) => {
  const [idx, setIdx] = React.useState<undefined | number>();

  React.useEffect((): void => {
    switch(rotation) {
      case 330:
        setIdx(1);
        break;
      case 30:
        setIdx(2);
        break;
      case 90:
        setIdx(3);
        break;
      case 150:
        setIdx(4);
        break;
      case 210:
        setIdx(5);
        break;
      case 270:
        setIdx(6);
        break;
      default:
        setIdx(0);
    };
  }, [rotation]);

  return (
    <Box>
      <Heading
        fontFamily={"var(--chakra-fonts-mono)"}
        fontSize={"xl"}
        marginBottom={2}
        textAlign={"center"}>
        {listArray[idx]?.title}
      </Heading>
      <List fontFamily={"var(--chakra-fonts-nunito)"} fontSize={"sm"} spacing={3}>
        <ListItem>
          <ListIcon as={BiRightArrow} color='green.500' />
          {listArray[idx]?.itemOne}
        </ListItem>
        <ListItem>
          <ListIcon as={BiRightArrow} color='green.500' />
          {listArray[idx]?.itemTwo}
        </ListItem>
        <ListItem>
          <ListIcon as={BiRightArrow} color='green.500' />
          {listArray[idx]?.itemThree}
        </ListItem>
      </List>
      <Divider borderColor={useColorModeValue("black", "white")} marginY={4} />
      <Text
        fontFamily={"var(--chakra-fonts-nunito)"}
        fontSize={"sm"}
        textAlign={"center"}>
        {listArray[idx]?.skillSet}
      </Text>
      <Divider borderColor={useColorModeValue("black", "white")} marginY={4} />
      <Text
        color={"goldenrod"}
        fontFamily={"var(--chakra-fonts-nunito)"}
        fontSize={"sm"}
        textAlign={"center"}>
        {listArray[idx]?.links}
      </Text>
    </Box>
  );
};