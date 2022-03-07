import { Box, useColorModeValue as uCMV } from "@chakra-ui/react";
import * as React from "react";

interface NavMenuIconProps {
  menuOpen: boolean,
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
};

export const NavMenuIcon = ({ menuOpen, setMenuOpen }: NavMenuIconProps) => {
  return (
    <NavIcon
      onClick={() => setMenuOpen(!menuOpen)}
      position={"absolute"}
      right={5}
      role={"group"}
      zIndex={4}>
      <Span
        left={!menuOpen && 1}
        top={menuOpen ? "18px" : "12px"}
        transform={menuOpen && "rotate(135deg)"} 
        _groupHover={{ left: 0 }} />
      <Span
        left={!menuOpen && -1}
        top={menuOpen ? "18px" : "24px"}
        transform={menuOpen && "rotate(405deg)"} 
        _groupHover={{ left: 0 }} />
    </NavIcon>
  );
};

export const NavIcon = (props: any) => {
  const goldShadow: string = uCMV("none", "drop-shadow(0 0 5px goldenrod)");
  return (
    <Box
      cursor={"pointer"}
      filter={goldShadow}
      height={"45px"}
      margin={"25px auto"}
      position={"relative"}
      transform={"rotate(0deg)"}
      transition={".5s ease-in-out"}
      width={"30px"}
      {...props}>
      {props.children}
    </Box>
  );
};

export const Span = (props: any) => (
  <Box 
    background={"goldenrod"}
    borderRadius={"5px"}
    display={"block"}
    height={"3px"}
    left={0}
    position={"absolute"}
    opacity={1}
    transform={"rotate(0deg)"}
    transition={".25s ease-in-out"}
    width={"100%"}
    {...props} />
);