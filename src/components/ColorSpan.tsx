import { Text, useColorModeValue as uCMV } from "@chakra-ui/react";
import * as React from "react";

interface ColorSpanProps {
  children: any,
};

export const GoldSpan = ({ children }: ColorSpanProps) => {
  const goldShadow: string = uCMV("none","drop-shadow(0 0 5px goldenrod)")
  return (
    <Text
      as={"span"}
      color={"goldenrod"}
      filter={goldShadow}>
      {children}
    </Text>
  );
};

export const GreenSpan = ({ children }: ColorSpanProps) => {
  const greenShadow: string = uCMV("none","drop-shadow(0 0 5px green)")
  return (
    <Text
      as={"span"}
      color={"green.500"}
      filter={greenShadow}>
      {children}
    </Text>
  );
};

export const RedSpan = ({ children }: ColorSpanProps) => {
  const redShadow: string = uCMV("none","drop-shadow(0 0 5px red)")
  return (
    <Text
      as={"span"}
      color={"red"}
      filter={redShadow}>
      {children}
    </Text>
  );
};
