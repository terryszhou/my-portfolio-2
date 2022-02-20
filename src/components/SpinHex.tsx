import { useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

export const SpinHex = () => (
  <div className={`hex-box-main`}>
    <a
      className="hex-link"
      href="https://github.com/terryszhou/my-portfolio"
      target="_blank"
      rel="noreferrer">
      {/* <div id="hex-gold-great">
        <div
          id="hex-greyspace-great"
          style={{ backgroundColor: useColorModeValue("white", "rgb(28,32,46)") }} />
      </div> */}
      <div id="hex-ring-lg" style={{ filter: useColorModeValue("none", "") }} />
      <div
        id="hex-greyspace-lg"
        style={{
          backgroundColor: useColorModeValue("white", "rgb(28,32,46)")
        }} />
      <div id="hex-gold">
        <div id="hex-gold-outside" />
        <div id="hex-gold-outside-2" />
        <div id="hex-gold-corner" />
        <div id="hex-gold-corner-2" />
        <div id="hex-goldenrod" style={{ filter: useColorModeValue("none", "") }}>
          <div id="hex-ring-sm">
            <div
              id="hex-greyspace-sm"
              style={{
                backgroundColor: useColorModeValue("white", "rgb(28,32,46)")
              }} >
            </div>
            <div id="hex-smallest" />
          </div>
        </div>
      </div>
    </a>
  </div>
);