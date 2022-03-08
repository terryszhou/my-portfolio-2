import {
  Box, Button, Text, Heading, List, ListItem, ListIcon, useColorModeValue,
  Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, ModalCloseButton,
} from "@chakra-ui/react";
import * as React from "react";

import { BiRightArrow } from "react-icons/bi";
import { BsXDiamondFill } from "react-icons/bs";

import { listArray } from "../data/projectData";
import { fadeDown } from "../helpers/animations";

interface ProjectListProps {
  isOpen: boolean,
  onClose: () => void,
  rotation: number,
};

export const ProjectList = ({ isOpen, onClose, rotation }: ProjectListProps) => {
  const [idx, setIdx] = React.useState<undefined | number>();
  const listColor2: string = useColorModeValue("rgb(78,83,104)", "gray.300");
  const fadeDownAnim: string = `${fadeDown} 800ms`;
  const fadeDownAnim2: string = `${fadeDown} 800ms 120ms forwards`;
  const fadeDownAnim3: string = `${fadeDown} 800ms 240ms forwards`;
  const fadeDownAnim4: string = `${fadeDown} 800ms 360ms forwards`;
  const goldShadow: string = useColorModeValue("none", "drop-shadow(0 0 5px goldenrod)");
  const greenShadow: string = useColorModeValue("none", "drop-shadow(0 0 5px green)");

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
          filter={goldShadow}
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
              {listArray[idx]?.title}
            </Heading>
            <List
              animation={fadeDownAnim2}
              color={listColor2}
              marginY={5}
              opacity={0}>
              {listArray[idx]?.details.map((detail, i) => (
                <ListItem
                  display={"flex"}
                  marginY={2}
                  key={i}>
                  <ListIcon
                    as={BsXDiamondFill}
                    color='green.500'
                    filter={greenShadow}
                    marginTop={1} />
                    {detail}
                </ListItem>
              ))}
            </List>
            <List
              animation={fadeDownAnim3}
              color={listColor2}
              opacity={0}>
              {listArray[idx]?.skillSet.map((skill, i) => (
              <ListItem
                display={"flex"}
                marginY={2}
                key={i}>
                <ListIcon
                  as={BiRightArrow}
                  color='green.500'
                  filter={greenShadow}
                  marginTop={1} />
                  {skill}
              </ListItem>
            ))}
            </List>
            <List
              animation={fadeDownAnim4}
              color={"goldenrod"}
              display={"flex"}
              filter={goldShadow}
              flexDirection={"column"}
              alignItems={"center"}
              opacity={0}>
              {listArray[idx]?.links.map((e, i) => (
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
                    filter: goldShadow,
                    height: "2px",
                    position: "absolute",
                    transition: "100ms ease-out",
                    width: 0 }}
                  _hover={{ _before: { width: "105%" } }}>
                  <Text as={"a"} href={e.link} rel={"noreferrer"} target={"_blank"}>
                    {e.linkText}
                  </Text>
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
            filter={goldShadow}
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
