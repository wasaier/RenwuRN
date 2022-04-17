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

let IconHome: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M942.944 449.408L589.664 82.016a114.624 114.624 0 0 0-165.504 0L70.976 449.408c-36.48 38.4-31.776 70.752-25.824 84.384a61.44 61.44 0 0 0 60.576 36.48h51.84v282.624c0 64.128 46.08 124.8 111.648 124.8h150.336V678.368c0-32.064-4.8-49.92 27.936-49.92h118.848c32.832 0 27.936 17.856 27.936 49.92v299.136h150.432c65.472 0 111.648-60.48 111.648-124.8V570.272h51.744a61.44 61.44 0 0 0 60.576-36.48c6.048-13.632 10.752-46.464-25.728-84.384z"
        fill={getIconColor(color, 0, '#0025ff')}
      />
    </Svg>
  );
};

IconHome.defaultProps = {
  size: 18,
};

IconHome = React.memo ? React.memo(IconHome) : IconHome;

export default IconHome;
