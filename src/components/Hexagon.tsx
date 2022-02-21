import { Box, Center, Stack, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

interface HexProps {
  animation?: string
  color: string,
  edgeLen: number,
  children?: JSX.Element,
  onClick?: () => void,
  top?: string | number,
  left?: string | number,
  right?: string | number,
  bottom?: string | number,
  _hover?: {},
  _groupHover?: {},
};

export const Hexagon = ({
  animation,
  color,
  edgeLen,
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
      height={`${edgeLen * 2}px`}
      position={"relative"}
      onClick={onClick}
      transition={"200ms ease-out"}
      _groupHover={_groupHover}
      _hover={_hover}>
      <Stack
        filter={useColorModeValue("none", "drop-shadow(0 0 5px goldenrod)")}
        position={"absolute"}
        spacing={0}>
        <Box
          width={0}
          borderBottom={`${edgeLen / 2}px solid ${color}`}
          borderLeft={`${edgeLen * .8666666}px solid transparent`}
          borderRight={`${edgeLen * .8666666}px solid transparent`} />
        <Box
          width={`${edgeLen * 1.7333333}px`}
          height={`${edgeLen}px`}
          bgColor={`${color}`} />
        <Box
          width={0}
          borderTop={`${edgeLen / 2}px solid ${color}`}
          borderLeft={`${edgeLen * .8666666}px solid transparent`}
          borderRight={`${edgeLen * .8666666}px solid transparent`} />
      </Stack>
      <Center
        height={`${edgeLen * 2}px`}
        position={"absolute"}
        width={`${edgeLen * 1.7333333}px`}>
        {children}
      </Center>
    </Center>
  );
};
