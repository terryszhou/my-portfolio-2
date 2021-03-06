import {
  Box, Button, Heading, List, ListItem, ListIcon, useColorModeValue as colorMode,
  Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, ModalCloseButton,
} from "@chakra-ui/react";
import * as React from "react";

import { BiRightArrow } from "react-icons/bi";
import { BsXDiamondFill } from "react-icons/bs";

import { oldProjectList } from "../data/oldProjectData";
import { fadeDown } from "../helpers/animations";

interface ProjectListProps {
  isOpen: boolean,
  onClose: () => void,
  rotation: number,
};

export const ProjectList = ({ isOpen, onClose, rotation }: ProjectListProps) => {
  const [idx, setIdx] = React.useState<undefined | number>();
  const listColor2: string = colorMode("rgb(78,83,104)", "gray.300");
  const fadeDownAnim: string = `${fadeDown} 250ms`;
  const fadeDownAnim2: string = `${fadeDown} 250ms 120ms forwards`;
  const fadeDownAnim3: string = `${fadeDown} 250ms 240ms forwards`;
  const fadeDownAnim4: string = `${fadeDown} 250ms 360ms forwards`;

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
          <Box fontFamily={"var(--chakra-fonts-nunito)"}>
            <Heading
              animation={fadeDownAnim}
              fontFamily={"var(--chakra-fonts-mono)"}
              fontSize={"xl"}
              marginBottom={2}
              textAlign={"center"}>
              {oldProjectList[idx]?.title}
            </Heading>
            <List
              animation={fadeDownAnim2}
              color={listColor2}
              marginY={5}
              opacity={0}>
              {oldProjectList[idx]?.details.map((detail, i) => (
                <ListItem
                  display={"flex"}
                  marginY={2}
                  key={i}>
                  <ListIcon
                    as={BsXDiamondFill}
                    color={colorMode("rgb(64,124,104)", "green.500")}
                    marginTop={1} />
                    {detail}
                </ListItem>
              ))}
            </List>
            <List
              animation={fadeDownAnim3}
              color={listColor2}
              opacity={0}>
              {oldProjectList[idx]?.skills.map((skill, i) => (
              <ListItem
                display={"flex"}
                marginY={2}
                key={i}>
                <ListIcon
                  as={BiRightArrow}
                  color={colorMode("rgb(64,124,104)", "green.500")}
                  marginTop={1} />
                  {skill}
              </ListItem>
            ))}
            </List>
            <List
              animation={fadeDownAnim4}
              color={"goldenrod"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              opacity={0}>
              {oldProjectList[idx]?.links.map((e, i) => (
                <ListItem
                  display={"flex"}
                  marginY={2}
                  key={i}
                  position={"relative"}
                  _before={{
                    backgroundColor: "goldenrod",
                    borderRadius: "5px",
                    bottom: -1,
                    content: `""`,
                    height: "2px",
                    position: "absolute",
                    transition: "100ms ease-out",
                    width: 0 }}
                  _hover={{ _before: { width: "105%" } }}>
                  {/* <Text as={"a"} href={e.link} rel={"noreferrer"} target={"_blank"}>
                    {e.linkText}
                  </Text> */}
                </ListItem>
              ))}
            </List>
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
