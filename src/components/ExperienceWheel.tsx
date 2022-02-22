import { Icon, Image, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

import { BiUpArrow } from "react-icons/bi";

import { wheelHexArray } from "../helpers/variables";
import { Hexagon } from "./Hexagon";

interface ExperienceWheelProps {
  visible: boolean | React.Dispatch<boolean> | React.MutableRefObject<boolean>,
  rotation: number,
  setRotation: React.Dispatch<React.SetStateAction<number>>,
};

export const ExperienceWheel = ({ visible, rotation, setRotation }: ExperienceWheelProps) => {
  const hexShadow: string = useColorModeValue("none", "drop-shadow(0 0 5px goldenrod)");

  const wheelHexMap = wheelHexArray.map(e => (
    <WheelHex
      color={e.color}
      currentRotation={e.currentRotation}
      hexShadow={hexShadow}
      left={e.left}
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
        width={170}>
        <Icon
          as={BiUpArrow}
          boxSize={45}
          color={"goldenrod"} 
          filter={hexShadow}
          marginBottom={120} />
      </Hexagon>
      {wheelHexMap}
    </React.Fragment>
  );
};

interface WheelHexProps {
  visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
  rotation: number,
  currentRotation: number,
  setRotation: React.Dispatch<React.SetStateAction<number>>,
  hexShadow: string,
  top: string,
  left: string,
  color: string,
  icon?: any,
  image?: any,
  transitionDelay: string,
};

export const WheelHex = ({
  color,
  currentRotation,
  hexShadow,
  left,
  rotation,
  setRotation,
  top,
  image,
  visible,
  transitionDelay,
  icon,
}: WheelHexProps) => {
  const hexColorInner: string = useColorModeValue('white', 'rgb(27,32,43)');
  const hexColorOuter: string = useColorModeValue('black', 'white');

  return (
    <Hexagon
      color={rotation === currentRotation ? "goldenrod" : hexColorOuter}
      filter={rotation === currentRotation && hexShadow}
      left={visible ? left : 0}
      top={visible ? top : 0}
      transitionDelay={transitionDelay}
      width={170}>
      <Hexagon
        color={rotation === currentRotation ? color : hexColorInner}
        onMouseOver={() => setRotation(currentRotation)}
        width={165}>
        <React.Fragment>
          <Icon
            as={icon}
            boxSize={12}
            opacity={rotation === currentRotation ? 0 : 1}
            transition={"200ms ease-out"} />
          <Image
            opacity={rotation === currentRotation ? 1 : 0}
            position={"absolute"}
            src={image}
            transition={"200ms ease-out"}
            transform={String(image).includes("app") ? "scale(1.25)" : "scale(3)"} />
        </React.Fragment>
      </Hexagon>
    </Hexagon>
  );
};
