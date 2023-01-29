import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BackArrow = ({ color }: { color?: string & SvgProps }) => (
  <Svg
    width={12}
    height={14}
    fill="none"
    // {...props}
  >
    <Path
      d="M.08 6.62a1 1 0 0 1 .21-.33l5-5a1.004 1.004 0 1 1 1.42 1.42L3.41 6H11a1 1 0 1 1 0 2H3.41l3.3 3.29a1 1 0 0 1 0 1.42.998.998 0 0 1-1.42 0l-5-5a1 1 0 0 1-.21-.33 1 1 0 0 1 0-.76Z"
      fill={color || '#000'}
    />
  </Svg>
);
export default BackArrow;
