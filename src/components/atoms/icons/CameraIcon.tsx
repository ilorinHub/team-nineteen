import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

const CameraIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Circle
      cx={16}
      cy={16}
      r={15}
      fill="#F2F2F2"
      stroke="#fff"
      strokeWidth={2}
    />
    <Path
      d="M12.551 12.117a1.54 1.54 0 0 1-1.094.703c-.253.036-.504.075-.756.117A1.453 1.453 0 0 0 9.5 14.383V20a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5v-5.617c0-.711-.5-1.33-1.201-1.446-.252-.042-.504-.081-.756-.117a1.54 1.54 0 0 1-1.094-.703l-.548-.878a1.46 1.46 0 0 0-1.157-.692 32.518 32.518 0 0 0-3.488 0 1.462 1.462 0 0 0-1.157.692l-.548.878v0Z"
      stroke="#828282"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19 16.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0v0Zm1.5-1.5h.005v.005H20.5V15Z"
      stroke="#828282"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CameraIcon;
