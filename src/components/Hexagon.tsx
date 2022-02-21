import { Box, Center, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

interface HexProps {
  animation?: string
  color: string,
  width: number,
  children?: JSX.Element,
  onClick?: () => void,
  opacity?: number,
  onMouseOver?: any,
  top?: string | number,
  left?: string | number,
  role?: string,
  right?: string | number,
  bottom?: string | number,
  filter?: string,
  transitionDelay?: string,
  transform? : string,
  _hover?: {},
  _groupHover?: {},
};

export const Hexagon = ({
  animation,
  color,
  width,
  transitionDelay,
  onClick,
  top,
  left,
  onMouseOver,
  role,
  opacity,
  filter,
  right,
  bottom,
  transform,
  _groupHover,
  _hover,
  children
}: HexProps) => {
  return (
    <Center
      role={role}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      animation={animation}
      opacity={opacity}
      height={`${width * 2}px`}
      position={"relative"}
      onClick={onClick}
      transform={transform}
      transition={"300ms ease-out"}
      transitionDelay={transitionDelay}
      onMouseOver={onMouseOver}
      _groupHover={_groupHover}
      _hover={_hover}>
      <Box 
        display={"inline-block"}
        filter={filter}
        fontSize={"initial"}
        height={width * 1.1547}
        margin={"6px"}
        position={"absolute"}
        width={width}
        _before={{
          position: "absolute",
          background: color,
          content: `""`,
          inset: 0,
          transition: "300ms ease-out",
          clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)"
        }}
      />
      <Center
        height={`${width * 2}`}
        position={"absolute"}
        width={`${width * 1.7333333}`}>
        {children}
      </Center>
    </Center>
  );
};
