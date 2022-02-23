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

export const growRight: string = keyframes`
  from { 
    width: 0;
    opacity: 0;
  } to {
    width: "100%";
    opacity: 1;
  }
`;

export const slideUp: string = keyframes`
  from {
    transform: translateY(0);
    height: 90%;
  } to {
    transform: translateY(-50%);
    height: 100%;
  }
`

export const openLetter: string = keyframes`
from {
  transform: translateY(0) scaleY(1);
  z-index: 1;
} to {
  transform: translateY(-100%) scaleY(-1);
  z-index: 0;
}
`

export const fadeOut: string = keyframes`
  0% {
    opacity: 1;
    filter: brightness(1);
    transform: scale(1);
  } 50% {
    opacity: 1;
    filter: brightness(2) drop-shadow(0 0 10px red);
    transform: scale(1.5);
  } 85% {
    opacity: 1;
    filter: brightness(1) drop-shadow(0 0 10px red);
    transform: scale(1);
  } 100% {
    opacity: 0;
    filter: brightness(1);
    transform: scale(1);
  }
`