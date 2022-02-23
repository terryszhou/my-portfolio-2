import { Box, Center } from "@chakra-ui/react";
import * as React from "react";

interface HexProps {
  animation?: string
  bottom?: string | number,
  children?: JSX.Element,
  color: string,
  cursor?: string,
  filter?: string,
  left?: string | number,
  minWidth?: string | number,
  onClick?: () => void,
  onMouseOver?: React.MouseEventHandler<HTMLDivElement>,
  opacity?: number,
  right?: string | number,
  role?: string,
  top?: string | number,
  transform? : string,
  transitionDelay?: string,
  width: string | number,
  _groupHover?: {},
  _hover?: {},
};

export const Hexagon = ({
  animation, bottom, children, color, cursor, filter, left,
  minWidth, onClick, onMouseOver, opacity, right, role, top,
  transform, transitionDelay, width, _groupHover, _hover,
}: HexProps) => {
  return (
    <Center
      animation={animation}
      bottom={bottom}
      cursor={cursor}
      left={left}
      width={0}
      height={0}
      onClick={onClick}
      onMouseOver={onMouseOver}
      opacity={opacity}
      position={"relative"}
      right={right}
      role={role}
      top={top}
      transform={transform}
      transition={"200ms ease-out"}
      transitionDelay={transitionDelay}
      _groupHover={_groupHover}
      _hover={_hover}>
      <Box 
        filter={filter}
        height={typeof width === "string" ? `calc(${width} * 1.1547)` : width * 1.1547}
        minWidth={minWidth}
        position={"absolute"}
        width={width}
        _before={{
          position: "absolute",
          background: color,
          content: `""`,
          inset: 0,
          transition: "200ms ease-out",
          clipPath: "polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)"
        }} />
      <Center
        height={typeof width === "string" ? `calc(${width} * 2)`: `${width * 2}`}
        position={"absolute"}
        width={typeof width === "string" ? `calc(${width} * 1.7333333)`: `${width * 1.7333333}`}>
        {children}
      </Center>
    </Center>
  );
};
