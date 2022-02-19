import * as React from "react";

interface SpinHexProps {
  colorMode: string,
};

export const SpinHex = ({ colorMode }: SpinHexProps) => (
  <div className={`hex-box-main`}>
    <a
      className="hex-link"
      href="https://github.com/terryszhou/my-portfolio"
      target="_blank"
      rel="noreferrer">
      <div id="hex-ring-lg" style={{ filter: colorMode === "light" && "none" }} />
      <div
        id="hex-greyspace-lg"
        style={{
          backgroundColor: colorMode === "dark" ? "rgb(28,32,46)" : "white",
        }} />
      <div id="hex-gold">
        <div id="hex-goldenrod" style={{ filter: colorMode === "light" && "none" }}>
          <div id="hex-ring-sm">
            <div
              id="hex-greyspace-sm"
              style={{
                backgroundColor: colorMode === "dark" ? "rgb(28,32,46)" : "white"
              }} >
            </div>
            <div id="hex-smallest" />
          </div>
        </div>
      </div>
    </a>
  </div>
);
