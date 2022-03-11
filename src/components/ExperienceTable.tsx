import { Stack, Table, Tbody, Tfoot, Tr, Td } from "@chakra-ui/react"
import * as React from "react";

import { monArr, yearArr } from "../data/experienceData";

interface ExperienceTableProps {
  expMap: JSX.Element[],
};

export const ExperienceTable = ({ expMap }: ExperienceTableProps) => (
  <Stack
    borderRadius={5}
    boxShadow={"10px 20px 25px -20px black"}
    fontSize={{ base: "xs", lg: "sm" }}
    overflow={"scroll"}
    width={{ base: "80vw", lg: "60vw" }}>
    <Table
      fontFamily={"var(--chakra-fonts-mono)"}
      opacity={0.8}
      variant={"striped"}>
      <Tbody>{expMap}</Tbody>
      <Tfoot>
        <Tr>
          <Td borderBottom={"none"} colSpan={3} paddingY={"0.25%"} />
          {monArr.map((e, i) => (
            <Td borderBottom={"none"} key={i} paddingY={"0.25%"}>
              {e}
            </Td> ))}
        </Tr>
        <Tr>
          <Td borderBottom={"none"} />
          {yearArr.map((e, i) => (
            <Td borderBottom={"none"} color={'red.500'} key={i} paddingY={"0.25%"} >
              {e}
            </Td> ))}
        </Tr>
      </Tfoot>
    </Table>
  </Stack>
);
