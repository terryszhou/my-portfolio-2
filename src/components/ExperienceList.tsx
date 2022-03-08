import {
  Box,
  Button,
  Text,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import * as React from "react";

import { BiRightArrow } from "react-icons/bi";
import { BsXDiamondFill } from "react-icons/bs";

import { expArray } from "../data/experienceData";
import { fadeDown } from "../helpers/animations";

interface ExperienceListProps {
  idx: number,
  isOpen: boolean,
  onClose: () => void,
};

export const ExperienceList = ({ idx, isOpen, onClose }: ExperienceListProps) => {
  const atCompanyColor2: string = useColorModeValue("rgb(102,105,127)", "gray.400");
  const listColor2: string = useColorModeValue("rgb(78,83,104)", "gray.300");
  const fadeDownAnim: string = `${fadeDown} 250ms`;
  const fadeDownAnim2: string = `${fadeDown} 250ms 120ms forwards`;
  const fadeDownAnim3: string = `${fadeDown} 250ms 240ms forwards`;
  const goldShadow: string = useColorModeValue("none", "drop-shadow(0 0 5px goldenrod)");
  const greenShadow: string = useColorModeValue("none", "drop-shadow(0 0 5px green)");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalCloseButton
        color={"goldenrod"}
        border={"1px solid goldenrod"}
        filter={goldShadow}
        _focus={{ boxShadow: "none" }}
        _hover={{
          backgroundColor: "goldenrod",
          color: "inherit" }} />
      <ModalBody padding={10}>
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
            {expArray[idx].skills.map((skill, i) => (
              <ListItem
                alignItems={"center"}
                display={"flex"}
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
          _hover={{
            backgroundColor: "goldenrod",
            color: "inherit" }}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  );
};
