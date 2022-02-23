import {
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";

import { flash } from "../helpers/animations";
import { HeroShell } from "./HeroShell";
import { PageProps } from "../helpers/interfaces";
import { ProjectList } from "./ProjectList";
import { ProjectWheel } from "./ProjectWheel";

export const Projects = ({ pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible]);

  const [rotation, setRotation] = React.useState<number>(0);
  React.useEffect((): void => rotation && setRotation(rotation), [rotation]);

  const flashAnim: string = `${flash} 1000ms`;
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <HeroShell
      label={"03. Recent Projects"}
      pageRefs={pageRefs}
      refNum={3}
      visible={visible}>
      <Flex
        alignItems={"center"}
        animation={visible && flashAnim}
        height={"45vw"}
        justifyContent={"center"}
        ref={visRef}
        width={"45vw"}>
        {loaded && 
          <ProjectWheel
            onClick={onOpen}
            rotation={rotation}
            setRotation={setRotation} 
            visible={visible} />}
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            color={"goldenrod"}
            border={"1px solid goldenrod"}
            _focus={{ boxShadow: "none" }}
            _hover={{
              backgroundColor: "goldenrod",
              color: "inherit"
            }}/>
          <ModalBody padding={10}>
            <ProjectList rotation={rotation} />
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
                color: "inherit"
              }}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HeroShell>
  );
};