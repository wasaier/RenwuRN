/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconZan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M252.4 954.2h-73.1c-35.1 0-64.4-26.8-67.4-61.8L77.9 505c-4.8-55 38.6-102.4 93.8-102.4h51.5c11.6 0 21.2 8.9 22 20.4l38.1 497.6c1.5 18.1-12.8 33.6-30.9 33.6zM941.4 638.5s-11.7 40.9-37.6 57c-9.4 5.8-12.4 18.5-6.4 27.8 0.1 0.1 0.2 0.3 0.3 0.4 0 0 13.6 9.8 5.3 43.7 0 0-13.2 35.3-45.4 49.4-10.1 4.4-15.6 15.7-12.1 26.2l0.2 0.4s10.5 48.2-14.3 72.3c0 0-25.6 45.3-158.2 41.5h-259c-44.7 0-81.5-35.2-83.4-79.9l-19.6-453.2c-0.6-13.4 7.6-25.8 20.3-30.1 38.7-13.2 117.2-55 126.3-178.2 2.3-31.2-4.6-62.4 3.1-93.5 7.4-30.1 33.6-54.4 65.1-56.5 51.7-3.4 89.4 53.3 103.1 96.3 19.9 62.9 19.2 135 0.4 197.9-5 16.8 4.8 34.4 21.8 38.6 0.3 0.1 0.6 0.1 0.9 0.2 2.1 0.5 4.3 0.7 6.5 0.7h169.7s116-6 108.5 104c0 0-3.7 37.7-18.8 49 0 0-6 9.8 4.5 17.3 0 0.1 27.1 32.5 18.8 68.7z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconZan.defaultProps = {
  size: 18,
};

IconZan = React.memo ? React.memo(IconZan) : IconZan;

export default IconZan;
