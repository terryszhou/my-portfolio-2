import { 
  HStack,
  Icon,
  useColorMode, 
  useColorModeValue as uCMV, 
} from "@chakra-ui/react";
import * as React from "react";
import { Hexagon } from "./Hexagon";

import { FaMoon, FaSun } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";

export const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = uCMV(FaMoon, FaSun);

  return (
    <HStack spacing={"35px"} role={"group"}>
      <Hexagon
        color={"goldenrod"}
        width={43}
        filter={uCMV("none","drop-shadow(0 0 5px goldenrod)")}
        onClick={toggleColorMode}
        _groupHover={{
          cursor: "pointer",
          filter: "brightness(1.25)",
          transform: "scale(1.15)" }}>
        <Hexagon color={uCMV("rgb(230,230,230)","rgb(28,28,28)")} width={38}>
          <Icon
            as={HiCursorClick}
            color={uCMV("rgb(28,28,28)","white")}
            transition={"200ms ease-out"}
            _groupHover={{ opacity: 0 }} />
        </Hexagon>
      </Hexagon>
    <Hexagon
      color={"transparent"}
      width={17}
      onClick={toggleColorMode}
      _groupHover={{ transform: "translateX(-35px)" }}
      _hover={{ cursor: "pointer" }}>
      <SwitchIcon
        color={uCMV("rgb(107,191,235)","orange")} 
        filter={uCMV("none","drop-shadow(0 0 5px orange)")} />
    </Hexagon>
    </HStack>
  );
};
