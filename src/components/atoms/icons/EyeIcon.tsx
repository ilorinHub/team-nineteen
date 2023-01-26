import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const EyeIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M1.357 8.215a.675.675 0 0 1 0-.426 7.001 7.001 0 0 1 13.285-.004.665.665 0 0 1 0 .426 7 7 0 0 1-13.284.004h0Z"
      stroke="#828282"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0v0Z"
      stroke="#828282"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default EyeIcon;
