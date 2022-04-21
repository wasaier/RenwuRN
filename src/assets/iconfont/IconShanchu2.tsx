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

let IconShanchu2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M593.92 151.552h-163.84c-14.336 0-26.624-12.288-26.624-26.624s12.288-26.624 26.624-26.624h163.84c14.336 0 26.624 12.288 26.624 26.624s-12.288 26.624-26.624 26.624z"
        fill={getIconColor(color, 0, '#231815')}
      />
      <Path
        d="M440.32 706.56c-14.336 0-26.624-12.288-26.624-26.624v-204.8c0-14.336 12.288-26.624 26.624-26.624s26.624 12.288 26.624 26.624v204.8c-2.048 16.384-12.288 26.624-26.624 26.624zM583.68 706.56c-14.336 0-26.624-12.288-26.624-26.624v-204.8c0-14.336 12.288-26.624 26.624-26.624s26.624 12.288 26.624 26.624v204.8c0 16.384-12.288 26.624-26.624 26.624z"
        fill={getIconColor(color, 1, '#4C7FFE')}
      />
      <Path
        d="M815.104 235.52H208.896c-14.336 0-24.576-12.288-24.576-26.624S196.608 184.32 208.896 184.32h604.16c14.336 0 24.576 12.288 24.576 26.624s-10.24 24.576-22.528 24.576zM630.784 923.648H393.216c-79.872 0-145.408-63.488-147.456-143.36l-16.384-479.232c0-14.336 10.24-26.624 24.576-26.624s26.624 10.24 26.624 24.576l14.336 479.232c2.048 53.248 45.056 94.208 96.256 94.208h237.568c53.248 0 96.256-40.96 96.256-94.208l16.384-479.232c0-14.336 12.288-24.576 26.624-24.576 14.336 0 24.576 12.288 24.576 26.624l-16.384 479.232c0 79.872-65.536 143.36-145.408 143.36z"
        fill={getIconColor(color, 2, '#231815')}
      />
    </Svg>
  );
};

IconShanchu2.defaultProps = {
  size: 18,
};

IconShanchu2 = React.memo ? React.memo(IconShanchu2) : IconShanchu2;

export default IconShanchu2;
