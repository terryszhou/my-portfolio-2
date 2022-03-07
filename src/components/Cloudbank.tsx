import { Center, Circle } from "@chakra-ui/react";
import * as React from "react";

export const Cloudbank = () => (
  <Center
    height={"350px"}
    position={"relative"}
    overflow={"hidden"}
    borderRadius={"25%"}
    bg={"#343434"}
    border={"20px solid #1e1e1e"}
    width={"350px"}>
    <Circle position={"absolute"} size={"275px"} border={"15px solid #6dd4b28c"} bg={"#58c7a2"}  filter={"drop-shadow(0 0 10px #6dd4b2)"}/>
    <Circle position={"absolute"} size={"200px"} border={"5px solid #b96f2e"} bg={"#d5ad3f"} filter={"drop-shadow(0 0 10px #b96f2e)"} />
    <Circle position={"absolute"} size={"150px"} border={"5px solid rgb(191,99,59)"} bg={"#c74031"} filter={"drop-shadow(0 0 5px rgb(191,99,59))"} />
    <Circle position={"absolute"} size={"75px"} bg={"rgb(65,13,14)"}>
      <Circle position={"absolute"} size={"10px"} bg={"pink"} top={3} right={3} />
    </Circle>
  </Center>
);
