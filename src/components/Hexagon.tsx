import { Box, Center } from "@chakra-ui/react";
import * as React from "react";

interface HexProps {
  animation?: string
  color: string,
  width: number,
  children?: JSX.Element,
  onClick?: () => void,
  top?: string | number,
  left?: string | number,
  right?: string | number,
  bottom?: string | number,
  transitionDelay?: string,
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
  right,
  bottom,
  _groupHover,
  _hover,
  children
}: HexProps) => {
  return (
    <Center
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      animation={animation}
      height={`${width * 2}px`}
      position={"relative"}
      onClick={onClick}
      transition={"200ms ease-out"}
      transitionDelay={transitionDelay}
      _groupHover={_groupHover}
      _hover={_hover}>
      <Box 
        position={"absolute"}
        width={width}
        height={width * 1.1547}
        margin={"6px"}
        display={"inline-block"}
        fontSize={"initial"}
        _before={{
          position: "absolute",
          background: color,
          content: `""`,
          inset: 0,
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
