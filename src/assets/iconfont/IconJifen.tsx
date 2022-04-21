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

let IconJifen: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M124.8125 303.78125c0 98.34375 168.09375 178.03125 375.46875 178.03125S875.75 402.125 875.75 303.78125 707.65625 125.75 500.28125 125.75 124.8125 205.4375 124.8125 303.78125z m375.46875 231.5625c-153.375 0-285.28125-43.59375-343.5-106.125-20.53125 22.03125-31.96875 46.40625-31.96875 72 0 98.34375 168.09375 178.03125 375.46875 178.03125S875.75 599.5625 875.75 501.21875c0-25.59375-11.4375-49.96875-31.96875-71.90625-58.21875 62.4375-190.125 106.03125-343.5 106.03125z m0 202.40625c-155.34375 0-288.65625-44.71875-345.75-108.5625-19.125 21.375-29.71875 44.8125-29.71875 69.46875C124.8125 797 292.90625 876.6875 500.28125 876.6875S875.75 797 875.75 698.65625c0-24.65625-10.59375-48.09375-29.71875-69.46875-57.09375 63.75-190.40625 108.5625-345.75 108.5625z"
        fill={getIconColor(color, 0, '#040000')}
      />
    </Svg>
  );
};

IconJifen.defaultProps = {
  size: 18,
};

IconJifen = React.memo ? React.memo(IconJifen) : IconJifen;

export default IconJifen;
