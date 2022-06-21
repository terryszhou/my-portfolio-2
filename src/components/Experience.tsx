import { Box, Stack } from "@chakra-ui/react";
import React from "react";

import { ExperienceWidget } from "./ExperienceWidget";
import { PageProps } from "../helpers/interfaces";
import { HeroShell } from "./HeroShell";

export const Experience = ({ pageRefs, visible, visRef }: PageProps) => {
    const [loaded, setLoaded] = React.useState<boolean>(false);
    React.useEffect((): void => visible && setLoaded(true), [visible]);

    const [idx, setIdx] = React.useState<number>(0);
    React.useEffect((): void => idx && setIdx(idx), [idx]);

    return (
        <HeroShell
            label={"02. My Experience"}
            loaded={loaded}
            pageRefs={pageRefs}
            refNum={2}>
            <Stack
                ref={visRef}
                spacing={5}
                minHeight={{ base: "80vh", lg: "60vh" }}>
                <ExperienceWidget idx={idx} setIdx={setIdx} />
            </Stack>
            <Box />
        </HeroShell>
    );
};
