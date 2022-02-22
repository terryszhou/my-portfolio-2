import { Flex, Text, Image } from "@chakra-ui/react";
import * as React from "react";
import { qAndA } from "../data/qAndA";

export const QAndA = (colorMode: string) => qAndA.map(e => (
  <React.Fragment key={e.id}>
    <Flex
      alignItems={"center"}
      fontFamily={"var(--chakra-fonts-nunito)"}
      fontSize={{ base: "xs", sm: "sm", lg: "md" }}
      justifyContent={"flex-start"}
      width={"100%"}>
      <Text
        backgroundColor={colorMode === "light" ? "rgb(233,233,233)" : "rgb(37,37,37)"}
        borderRadius={10}
        padding={2}
        position={"relative"}
        marginBottom={2}
        maxWidth={"75%"}
        _before={{
          position: "absolute",
          content: `""`,
          width: 0,
          height: 0,
          bottom: "-1rem",
          borderRight: "30px solid transparent",
          borderTop: colorMode === "light" ? "25px solid rgb(233,233,233)" : "25px solid rgb(37,37,37)" }}>
        {e.question}
      </Text>
    </Flex>
    <Flex
      alignItems={"center"}
      fontFamily={"var(--chakra-fonts-nunito)"}
      fontSize={{ base: "xs", sm: "sm", lg: "md" }}
      justifyContent={"flex-end"}
      marginBottom={5}
      width={"100%"}>
      <Text
        backgroundColor={"rgb(67,134,233)"}
        borderRadius={10}
        color={"white"}
        padding={2}
        position={"relative"}
        maxWidth={"75%"}
        _before={{
          position: "absolute",
          content: `""`,
          width: 0,
          height: 0,
          right: "3%",
          bottom: "-1rem",
          borderLeft: "30px solid transparent",
          borderTop: "25px solid rgb(67,134,233)" }}>
          {e.answer}
          {e.answer === "Nidoking!" &&
            <Image
              src={"/nidoking.png"}
              width={"6em"} />}
      </Text>
    </Flex>
  </React.Fragment>
));
