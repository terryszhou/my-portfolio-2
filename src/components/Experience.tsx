import {
  Box,
  Button,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Td,
  Tooltip,
  Text,
  useColorModeValue,
  Heading,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import { BiRightArrow } from "react-icons/bi";

import { ExperienceList } from "./ExperienceList";
import { HeroShell } from "./HeroShell";
import { growRight } from "../helpers/animations";
import { monArr, yearArr, expArray } from "../helpers/variables";
import { PageProps } from "../helpers/interfaces";

export const Experience = ({ pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible]);

  const [idx, setIdx] = React.useState<number>(0);
  React.useEffect((): void => idx && setIdx(idx), [idx]);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const growRightAnim: string = `${growRight} 1s 250ms forwards`;
  const monW: number = (1 / (monArr.length)) * 100;
  const topMargin: string = useColorModeValue("rgb(242,245,249)", "rgb(43,50,65)");
  const atCompanyColor: string = useColorModeValue("gray.400", "rgb(102,105,127)")
  const listColor: string = useColorModeValue("gray.300", "rgb(78,83,104)");

  const expMap: JSX.Element[] = expArray.map((exp, i) => (
    <React.Fragment key={i}>
      <Tooltip
        hasArrow
        label={
          <Box fontFamily={"var(--chakra-fonts-nunito)"}>
            <Text fontWeight={"bold"}>{exp.title}</Text>
            <Text as={"span"} color={atCompanyColor} fontWeight="bold"> @ {exp.company}</Text>
            <Text color={listColor}>{exp.dates}</Text>
            <List color={listColor}>
              {exp.skills.map((skill, i) => (
                <ListItem key={i}>
                  <ListIcon as={BiRightArrow} color='green.500' />
                  {skill}
                </ListItem>
              ))}
            </List>
          </Box> }>
        <Tr
          cursor={"pointer"}
          onClick={() => {
            setIdx(i);
            onOpen();
          }}
          role={"group"}>
          <Td
            fontSize={{ base: "10px", sm: "xs", md: "sm", lg: "md" }}
            fontWeight={"bold"}
            paddingBottom={"0.25%"}
            paddingTop={"0.25%"}>
            {exp.company}
          </Td>
          <Td
            colSpan={monArr.length}
            paddingBottom={"0.25%"}
            paddingTop={"0.25%"}>
            <Box
              animation={growRightAnim}
              backgroundColor={exp.color}
              borderRadius={15}
              height={2}
              marginLeft={`calc(${monW * (exp.start - 1)}% + ${exp.start !== 1 && "24px"})`}
              transition={"200ms ease-out"}
              width={`calc(${monW * exp.length}% - 24px)`}
              _groupHover={{
                filter: "brightness(1.5)",
                transform: "scale(1.05)",
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
      <Stack ref={visRef}>
        <Stack
          border={"1px solid"}
          borderRadius={15}
          fontSize={{ base: "xs", lg: "md" }}
          width={{ base: "80vw", lg: "60vw"}}
          overflow={"scroll"}>
          {loaded && (
            <Table
              fontFamily={"var(--chakra-fonts-mono)"}
              opacity={0.8}
              variant={"striped"}>
              <Thead>
                <Tr>
                  <Td
                    backgroundColor={topMargin}
                    colSpan={monArr.length + 1}
                    paddingBottom={1}
                    paddingTop={1} />
                </Tr>
              </Thead>
              <Tbody>{expMap}</Tbody>
              <Tfoot>
                <Tr>
                  <Td borderBottom={"none"} paddingBottom={0} paddingTop={0} />
                  {monArr.map((e, i) => (
                    <Td
                      borderBottom={"none"}
                      key={i}
                      paddingBottom={0}
                      paddingTop={"0.5%"}>
                      {e}
                    </Td>
                  ))}
                </Tr>
                <Tr>
                  <Td paddingBottom={"0.5%"} paddingTop={"0.5%"} />
                  {yearArr.map((e, i) => (
                    <Td
                      color={'red.500'}
                      key={i}
                      paddingBottom={"0.5%"}
                      paddingTop={"0.5%"}>
                      {e}
                    </Td>
                  ))}
                </Tr>
              </Tfoot>
            </Table>
          )}
        </Stack>
        <Heading
          fontFamily={"var(--chakra-fonts-roboto)"}
          fontSize={{ base: "md", md: "xl", lg: "2xl"}}>
          <Text
            as={"span"}
            color={"goldenrod"}
            filter={useColorModeValue("none", "drop-shadow(0 0 5px goldenrod)")}
            >* </Text>
          Hover for
          <Text
            as={"span"}
            color={"goldenrod"}
            filter={useColorModeValue("none", "drop-shadow(0 0 5px goldenrod)")}
            > summary. </Text>
          Click for 
          <Text
            as={"span"}
            color={"goldenrod"}
            filter={useColorModeValue("none", "drop-shadow(0 0 5px goldenrod)")}
            > details!</Text>
        </Heading>
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            color={"goldenrod"}
            border={"1px solid goldenrod"}
            _focus={{ boxShadow: "none" }}
            _hover={{
              backgroundColor: "goldenrod",
              color: "inherit" }} />
          <ModalBody padding={10}>
            <ExperienceList idx={idx} />
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
              _hover={{
                backgroundColor: "goldenrod",
                color: "inherit" }}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HeroShell>
  );
};
