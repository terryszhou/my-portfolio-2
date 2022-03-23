import { usePrefersReducedMotion } from "@chakra-ui/react";

export const useAnim = (animation: string): undefined | string => {
  const prefersReducedMotion: boolean = usePrefersReducedMotion();
  return prefersReducedMotion ? undefined : animation;
};
