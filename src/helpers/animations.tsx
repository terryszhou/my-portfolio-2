import { keyframes } from "@chakra-ui/react";

export const fadeRight: string = keyframes`
  from {
    transform: translateX(-40px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const fadeDown: string = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  } to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const slideLeft: string = keyframes`
  from { 
    width: 0;
    opacity: 0;
  } to {
    width: 40%;
    opacity: 1;
  }
`;

export const slideRight: string = keyframes`
  from { 
    transform: translateX(-100%);
    opacity: 0;
  } to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const rotate: string = keyframes`
  from {
    transform: rotate(0deg)
  } to  {
    transform: rotate(360deg)
  }
`;

export const flash: string = keyframes`
  from {
    filter: brightness(2)
  } to {
    filter: none
  }
`