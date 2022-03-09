import { Icon, Circle, Image, useColorModeValue as uCMV } from "@chakra-ui/react";
import * as React from "react";

import { BiUpArrow } from "react-icons/bi";
import { IconType } from "react-icons/lib";

import { wheelHexArray } from "../data/projectData";
import { Hexagon } from "./Hexagon";

interface ProjectWheelProps {
  onClick: () => void,
  rotation: number,
  setRotation: React.Dispatch<React.SetStateAction<number>>,
  visible: boolean | React.Dispatch<boolean> | React.MutableRefObject<boolean>,
};

export const ProjectWheel = ({ onClick, visible, rotation, setRotation }: ProjectWheelProps) => {
  const hexShadow: string = uCMV("none", "drop-shadow(0 0 5px goldenrod)");

  const wheelHexMap = wheelHexArray.map(e => (
    <WheelHex
      color={e.color}
      currentRotation={e.currentRotation}
      hexShadow={hexShadow}
      key={e.id}
      left={e.left}
      onClick={onClick}
      rotation={rotation}
      setRotation={setRotation}
      top={e.top}
      icon={e.icon}
      image={e.image}
      transitionDelay={e.transitionDelay}
      visible={visible} />
  ));

  return (
    <React.Fragment>
      <Hexagon
        color={"transparent"}
        top={visible ? "0.5%" : 0}
        transform={`rotate(${rotation}deg)`}
        transitionDelay={"80ms"}
        width={"11.75vw"}>
        <React.Fragment>
          <Icon
            as={BiUpArrow}
            boxSize={"15%"}
            color={"goldenrod"} 
            filter={hexShadow}
            marginBottom={"40%"} />
          <Circle
            backgroundColor={"red"}
            borderRadius={"100%"}
            boxShadow={uCMV("none", "0 0 5px red")}
            position={"absolute"}
            size={{ base: 2, lg: 5 }} />
        </React.Fragment>
      </Hexagon>
      {wheelHexMap}
    </React.Fragment>
  );
};

interface WheelHexProps {
  color: string,
  currentRotation: number,
  hexShadow: string,
  icon: React.ComponentType<IconType>,
  image: string,
  left: string,
  onClick?: () => void,
  rotation: number,
  setRotation: React.Dispatch<React.SetStateAction<number>>,
  top: string,
  transitionDelay: string,
  visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
};

export const WheelHex = ({
  color, currentRotation, hexShadow, icon, image, left,
  onClick, rotation, setRotation, top, transitionDelay, visible,
}: WheelHexProps) => {
  const hexColorInner: string = uCMV('rgb(230,230,230)','rgb(27,32,43)');
  const hexColorOuter: string = uCMV('black','white');

  return (
    <Hexagon
      cursor={onClick && "pointer"}
      color={rotation === currentRotation ? "goldenrod" : hexColorOuter}
      filter={rotation === currentRotation && hexShadow}
      left={visible ? left : 0}
      onClick={onClick}
      top={visible ? top : 0}
      transitionDelay={transitionDelay}
      width={"11.5vw"}>
      <Hexagon
        color={rotation === currentRotation ? color : hexColorInner}
        onMouseOver={() => setRotation(currentRotation)}
        width={"11.25vw"}>
        <React.Fragment>
          <Icon
            as={icon}
            boxSize={"20%"}
            opacity={rotation === currentRotation ? 0 : 1}
            transition={"200ms ease-out"} />
          <Image
            opacity={rotation === currentRotation ? 1 : 0}
            position={"absolute"}
            src={image}
            transition={"200ms ease-out"}
            width={String(image).includes("app") ? "25%" : "70%"} />
        </React.Fragment>
      </Hexagon>
    </Hexagon>
  );
};
