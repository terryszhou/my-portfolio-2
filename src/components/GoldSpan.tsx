import { Text, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

interface GoldSpanProps {
  children: any,
};

export const GoldSpan = ({ children }: GoldSpanProps) => {
  const goldShadow: string = useColorModeValue("none", "drop-shadow(0 0 5px goldenrod)")
  return (
    <Text
      as={"span"}
      color={"goldenrod"}
      filter={goldShadow}>
      {children}
    </Text>
  );
};
