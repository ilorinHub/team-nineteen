import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const CancelIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M21 2.99 3.001 20.99M21.006 21 2.992 2.983"
      stroke="#333"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CancelIcon;
