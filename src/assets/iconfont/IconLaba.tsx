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

let IconLaba: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M372.2496 329.9584L208.64 481.4592h-107.52v163.84a64.1792 64.1792 0 0 0 64 64h212.48l107.52 99.5328V289.4592c0-35.2-58.1376-10.1632-112.8704 40.4992z"
        fill={getIconColor(color, 0, '#EE7C3D')}
      />
      <Path
        d="M572.16 243.9936v533.7856l-138.9056-128.6144-23.552-21.7856H183.04v-232.96H409.6l23.552-21.8112 139.008-128.6144m65.8944-139.9296c-21.0688 0-59.7248 22.5792-96.8448 56.9344l-163.6096 151.5008h-212.48a64.1792 64.1792 0 0 0-64 64v268.8a64.1792 64.1792 0 0 0 64 64h212.48l163.6096 151.4752c37.0944 34.3552 75.776 56.9344 96.8448 56.9344 10.0096 0 16.0256-5.12 16.0256-16.4096v-780.8c0-11.3408-6.0416-16.4352-16.0256-16.4352zM881.92 551.8592h-86.8608a40.96 40.96 0 0 1 0-81.92h86.8608a40.96 40.96 0 0 1 0 81.92zM880.64 921.9328a40.8064 40.8064 0 0 1-28.9792-12.0064l-90.3424-90.3424A40.96 40.96 0 0 1 819.2 761.6512l90.3424 90.3424A40.96 40.96 0 0 1 880.64 921.9328zM795.2384 269.312a40.96 40.96 0 0 1-28.9536-69.9136l85.3248-85.3248a40.96 40.96 0 0 1 57.9328 57.9328L824.32 257.3312a40.96 40.96 0 0 1-29.0816 11.9808z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconLaba.defaultProps = {
  size: 18,
};

IconLaba = React.memo ? React.memo(IconLaba) : IconLaba;

export default IconLaba;
