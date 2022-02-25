import {
  Box, Button, Divider, Text, Heading, List, ListItem, ListIcon, useColorModeValue,
  Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, ModalCloseButton,
} from "@chakra-ui/react";
import * as React from "react";

import { BiRightArrow } from "react-icons/bi";

import { listArray } from "../data/projectData";

interface ProjectListProps {
  isOpen: boolean,
  onClose: () => void,
  rotation: number,
};

export const ProjectList = ({ isOpen, onClose, rotation }: ProjectListProps) => {
  const [idx, setIdx] = React.useState<undefined | number>();
  const blackWhiteSwitch: string = useColorModeValue("blackAlpha.500", "whiteAlpha.500");

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
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
      <ModalContent>
        <ModalCloseButton
          color={"goldenrod"}
          border={"1px solid goldenrod"}
          _focus={{ boxShadow: "none" }}
          _hover={{ backgroundColor: "goldenrod", color: "inherit" }}/>
        <ModalBody padding={10}>
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
            <Divider borderColor={blackWhiteSwitch} marginY={4} />
            <Text
              fontFamily={"var(--chakra-fonts-nunito)"}
              fontSize={"sm"}
              textAlign={"center"}>
              {listArray[idx]?.skillSet}
            </Text>
            <Divider borderColor={blackWhiteSwitch} marginY={4} />
            <Text
              color={"goldenrod"}
              fontFamily={"var(--chakra-fonts-nunito)"}
              fontSize={"sm"}
              textAlign={"center"}>
              {listArray[idx]?.links}
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter display={"flex"} justifyContent={"center"}>
          <Button
            backgroundColor={"transparent"}
            border={"1px solid goldenrod"}
            color={"goldenrod"}
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize={13}
            onClick={onClose}
            _focus={{ boxShadow: "none" }}
            _hover={{ backgroundColor: "goldenrod", color: "inherit" }}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
