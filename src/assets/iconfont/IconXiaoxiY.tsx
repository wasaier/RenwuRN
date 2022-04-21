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

let IconXiaoxiY: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M919.53125 468.5c0 175.96875-152.25 318.65625-340.125 318.65625-67.40625 0-362.25-21.84375-362.25-21.84375S298.25 703.0625 327.3125 682.34375c-54.65625-56.53125-88.03125-131.53125-88.03125-213.84375 0-175.96875 152.25-318.65625 340.125-318.65625s340.125 142.6875 340.125 318.65625z"
        fill={getIconColor(color, 0, '#f4ea2a')}
      />
      <Path
        d="M548 781.90625c-67.21875 0-351.375-20.90625-363.46875-21.84375-6.46875-0.46875-12-4.875-13.875-11.15625s0.28125-12.9375 5.4375-16.96875c2.90625-2.15625 61.6875-47.25 96.28125-72.84375-51.9375-59.625-80.25-134.0625-80.25-211.5 0-45.28125 9.46875-89.15625 28.125-130.5 18-39.84375 43.6875-75.5625 76.5-106.3125 32.71875-30.65625 70.6875-54.65625 113.0625-71.4375 43.78125-17.34375 90.28125-26.15625 138.1875-26.15625s94.40625 8.8125 138.1875 26.15625c42.375 16.78125 80.34375 40.78125 113.0625 71.4375 32.71875 30.65625 58.5 66.46875 76.5 106.3125 18.65625 41.34375 28.125 85.21875 28.125 130.5s-9.46875 89.15625-28.125 130.5c-18 39.84375-43.6875 75.5625-76.5 106.3125-32.71875 30.65625-70.6875 54.65625-113.0625 71.4375-43.78125 17.25-90.28125 26.0625-138.1875 26.0625z m-319.875-50.15625c83.53125 6 268.875 18.75 319.875 18.75 178.875 0 324.46875-135.9375 324.46875-302.90625S726.875 144.6875 548 144.6875s-324.46875 135.9375-324.46875 302.90625c0 75.1875 29.71875 147.28125 83.625 202.96875 3.1875 3.28125 4.78125 7.78125 4.3125 12.375s-2.8125 8.71875-6.46875 11.34375c-16.6875 11.8125-51 37.78125-76.875 57.46875z"
        fill={getIconColor(color, 1, '#2c2c2c')}
      />
      <Path
        d="M370.1 429.4m-44.4 0a44.4 44.4 0 1 0 88.8 0 44.4 44.4 0 1 0-88.8 0Z"
        fill={getIconColor(color, 2, '#2c2c2c')}
      />
      <Path
        d="M548.6 429.4m-44.4 0a44.4 44.4 0 1 0 88.8 0 44.4 44.4 0 1 0-88.8 0Z"
        fill={getIconColor(color, 3, '#2c2c2c')}
      />
      <Path
        d="M727.2 429.4m-44.4 0a44.4 44.4 0 1 0 88.8 0 44.4 44.4 0 1 0-88.8 0Z"
        fill={getIconColor(color, 4, '#2c2c2c')}
      />
    </Svg>
  );
};

IconXiaoxiY.defaultProps = {
  size: 18,
};

IconXiaoxiY = React.memo ? React.memo(IconXiaoxiY) : IconXiaoxiY;

export default IconXiaoxiY;
