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
        d="M946.7 465.6c0 187.7-162.4 339.9-362.8 339.9-71.9 0-386.4-23.3-386.4-23.3S284 715.8 315 693.7c-58.3-60.3-93.9-140.3-93.9-228.1 0-187.7 162.4-339.9 362.8-339.9s362.8 152.2 362.8 339.9z"
        fill={getIconColor(color, 0, '#f4ea2a')}
      />
      <Path
        d="M550.4 799.9c-71.7 0-374.8-22.3-387.7-23.3-6.9-0.5-12.8-5.2-14.8-11.9s0.3-13.8 5.8-18.1c3.1-2.3 65.8-50.4 102.7-77.7-55.4-63.6-85.6-143-85.6-225.6 0-48.3 10.1-95.1 30-139.2 19.2-42.5 46.6-80.6 81.6-113.4 34.9-32.7 75.4-58.3 120.6-76.2 46.7-18.5 96.3-27.9 147.4-27.9s100.7 9.4 147.4 27.9c45.2 17.9 85.7 43.5 120.6 76.2 34.9 32.7 62.4 70.9 81.6 113.4 19.9 44.1 30 90.9 30 139.2s-10.1 95.1-30 139.2c-19.2 42.5-46.6 80.6-81.6 113.4-34.9 32.7-75.4 58.3-120.6 76.2-46.7 18.4-96.3 27.8-147.4 27.8z m-341.2-53.5c89.1 6.4 286.8 20 341.2 20 190.8 0 346.1-145 346.1-323.1S741.2 120.2 550.4 120.2s-346.1 145-346.1 323.1c0 80.2 31.7 157.1 89.2 216.5 3.4 3.5 5.1 8.3 4.6 13.2s-3 9.3-6.9 12.1c-17.8 12.6-54.4 40.3-82 61.3z"
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
