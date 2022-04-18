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

let IconVoice401: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M658.78 681.57a30 30 0 0 1-19.87-52.48 150 150 0 0 0-9.51-232.64 30 30 0 1 1 36-48 210 210 0 0 1 13.29 325.64 29.92 29.92 0 0 1-19.91 7.48z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M810.58 828.2a30 30 0 0 1-20.84-51.58c70.86-68.46 109.89-160.42 109.89-258.94A360.41 360.41 0 0 0 778.4 248.25a30 30 0 1 1 39.81-44.89 419.69 419.69 0 0 1 13.21 616.41 29.87 29.87 0 0 1-20.84 8.43zM525.09 165.19a30 30 0 0 0-31.44 2.88l-247 186H98.37a30 30 0 0 0-30 30v256.14a30 30 0 0 0 30 30h148L493.68 856a30 30 0 0 0 48-24V192a30 30 0 0 0-16.59-26.81z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconVoice401.defaultProps = {
  size: 18,
};

IconVoice401 = React.memo ? React.memo(IconVoice401) : IconVoice401;

export default IconVoice401;
