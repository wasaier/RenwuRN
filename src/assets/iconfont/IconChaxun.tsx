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

let IconChaxun: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M339.21875 296C363.21875 185.5625 444.78125 94.4375 550.4375 60.78125s225.5625-9.5625 312 62.4375c86.4375 76.78125 124.78125 192 100.78125 302.4375C929.65625 598.4375 761.65625 708.875 588.78125 670.4375c-172.78125-33.65625-283.21875-206.4375-249.5625-374.4375z m360-177.5625C564.78125 89.5625 435.21875 176 406.4375 310.4375s57.5625 264 192 292.78125 264-57.5625 292.78125-192S833.5625 147.21875 699.21875 118.4375z m264.84375 846.5625H59c-19.21875 0-27-9.65625-27-22.5s7.875-22.5 27-22.5h904.96875c19.21875 0 27.9375 9.65625 27.9375 22.5 0.09375 12.84375-8.71875 22.5-27.84375 22.5z m-719.0625-384H59c-19.21875 0-27-9.65625-27-22.5s7.875-22.5 27-22.5h185.90625c19.21875 0 27 9.65625 27 22.5 0.09375 12.84375-7.78125 22.5-26.90625 22.5z m0-336H59.9375c-19.21875 0-27.9375-9.65625-27.9375-22.5s8.8125-22.5 27.9375-22.5h184.96875c19.21875 0 27 9.65625 27 22.5s-7.78125 22.5-26.90625 22.5z"
        fill={getIconColor(color, 0, '#868686')}
      />
      <Path
        d="M911.4 798.7l-97.3-143.4c-10.2-20.5-10.2-46.1 10.2-56.3s46.1-10.2 56.3 10.2l97.3 143.4c10.2 20.5 10.2 46.1-10.2 56.3s-46.1 5.2-56.3-10.2z"
        fill={getIconColor(color, 1, '#868686')}
      />
    </Svg>
  );
};

IconChaxun.defaultProps = {
  size: 18,
};

IconChaxun = React.memo ? React.memo(IconChaxun) : IconChaxun;

export default IconChaxun;
