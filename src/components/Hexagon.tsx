import { Box, Center, Stack } from "@chakra-ui/react";
import * as React from "react";

interface HexProps {
  animation?: string
  color: string,
  edgeLen: number,
  children?: JSX.Element,
  onClick?: () => void,
  _hover?: {},
  _groupHover?: {},
};

export const Hexagon = ({
  animation,
  color,
  edgeLen,
  onClick,
  _groupHover,
  _hover,
  children
}: HexProps) => {
  return (
    <Center
      animation={animation}
      h={`${edgeLen * 2}px`}
      position={"relative"}
      onClick={onClick}
      transition={"200ms ease-out"}
      _groupHover={_groupHover}
      _hover={_hover}>
      <Stack spacing={0} position={"absolute"}>
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
