import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface IProps extends SvgProps {
  fillColor?: string | undefined;
}

const SvgComponent = (props: IProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      d="M6.375 3.75 11.625 9l-5.25 5.25"
      stroke={props.fillColor ? props.fillColor : "#333"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
