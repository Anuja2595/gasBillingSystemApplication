import * as React from "react";
import Svg, { Path, G, Defs, ClipPath, Mask } from "react-native-svg";

export default function AziziLogo(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={116} height={26} fill="none" {...props}>
      <G clipPath="url(#a)">
        <Mask id="b" x={0} y={0} width={116} height={26} style={{ maskType: "luminance" }}>
          <Path fill="#fff" d="M115.037.5H.961v25h114.076z" />
        </Mask>
        <G fill="#fff" mask="url(#b)">
          {/* All path data here... (you can paste from your SVG) */}
        </G>
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M.96.5h114.077v25H.96z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
