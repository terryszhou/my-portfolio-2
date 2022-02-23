import {
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import { HeroShell } from "./HeroShell";
import { ContentBox } from "./ContentBox";
import { ExperienceList } from "./ExperienceList";
import { ExperienceWheel } from "./ExperienceWheel";
import { flash } from "../helpers/animations";
import { PageProps } from "../helpers/interfaces";
import { HeroDividers } from "./HeroDividers";
import { SectionHeader } from "./SectionHeader";

export const Experience = ({ isLargeScreen, pageRefs, visible, visRef }: PageProps) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  React.useEffect((): void => visible && setLoaded(true), [visible]);

  const [rotation, setRotation] = React.useState<number>(0);
  React.useEffect((): void => rotation && setRotation(rotation), [rotation]);

  const flashAnim: string = `${flash} 1000ms`;
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <HeroShell
      label={"03. My Work"}
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
          <ExperienceWheel
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
            <ExperienceList rotation={rotation} />
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
    // <Flex
    //   alignItems={"center"}
    //   flexDirection={{ base: "column", lg: "row" }}
    //   height={{ base: "35vh", sm: "60vh", lg: "100vh"}}
    //   opacity={visible ? 1 : 0.25}
    //   position={"relative"}
    //   ref={el => pageRefs.current = { ...pageRefs.current, experience: el }}
    //   transition={"1s ease-out"}
    //   width={"75%"}>
    //   {loaded && <HeroDividers orientation={"topleft"} />}
    //   <SectionHeader label={"03. My Experience"} />
    //   <Flex
    //     height={"100%"}
    //     justifyContent={"center"}
    //     ref={visRef}
    //     width={{ base: "100%", lg: "50%" }}>
    //     <Flex
    //       alignItems={"center"}
    //       animation={visible && flashAnim}
    //       height={"45vw"}
    //       justifyContent={"center"}
    //       position={"absolute"}
    //       marginLeft={{ base: 0, lg: "10%" }}
    //       top={{ base: "20%", lg: "10%" }}
    //       width={"45vw"}>
    //       {loaded && 
    //         <ExperienceWheel
    //           onClick={!isLargeScreen ? onOpen : undefined}
    //           rotation={rotation}
    //           setRotation={setRotation} 
    //           visible={visible} />}
    //     </Flex>
    //   </Flex>
    //   {isLargeScreen ? (
    //     <Flex
    //       height={"40vw"}
    //       width={"100%"}
    //       justifyContent={"flex-end"}
    //       alignItems={"center"}>
    //       <ContentBox height={"85%"} width={"65%"}>
    //         <ExperienceList rotation={rotation} />
    //       </ContentBox>
    //     </Flex>
    //   ) : (
    //   <Modal isOpen={isOpen} onClose={onClose}>
    //     <ModalOverlay />
    //     <ModalContent>
    //       <ModalCloseButton />
    //       <ModalBody padding={10}>
    //         <ExperienceList rotation={rotation} />
    //       </ModalBody>
    //       <ModalFooter>
    //         <Button onClick={onClose}>
    //           Close
    //         </Button>
    //       </ModalFooter>
    //     </ModalContent>
    //   </Modal>
    //   )
    // }
    // </Flex>
  );
};
