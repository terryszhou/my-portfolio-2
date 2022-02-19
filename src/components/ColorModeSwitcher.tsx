import { 
  HStack,
  Icon,
  useColorMode, 
  useColorModeValue, 
} from "@chakra-ui/react";
import * as React from "react";
import { Hexagon } from "./Hexagon";

import { FaMoon, FaSun } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";

export const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <HStack spacing={"35px"} role={"group"}>
      <Hexagon
        color={"goldenrod"}
        edgeLen={25}
        onClick={toggleColorMode}
        _groupHover={{
          cursor: "pointer",
          filter: "brightness(1.25)",
          transform: "scale(1.15)",
        }}>
        <Hexagon color={"rgb(28,28,28)"} edgeLen={22} >
          <Icon
            as={HiCursorClick}
            color={"white"}
            transition={"200ms ease-out"}
            _groupHover={{ opacity: 0 }} />
        </Hexagon>
      </Hexagon>
    <Hexagon
      color={"transparent"}
      edgeLen={10}
      onClick={toggleColorMode}
      _groupHover={{ transform: "translateX(-35px)" }}
      _hover={{ cursor: "pointer" }}>
      <SwitchIcon color={useColorModeValue("rgb(107,191,235)", "orange")} />
    </Hexagon>
    </HStack>
  );
};
