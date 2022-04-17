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

let IconSeekicon: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M948.5 882.28571416l-125.35714248-125.35714248A426.21428584 426.21428584 0 0 0 792.28571416 190.57142832 427.5 427.5 0 0 0 190.57142832 190.57142832a427.5 427.5 0 0 0 0 604.92857168 430.07142832 430.07142832 0 0 0 300.21428584 121.5 419.78571416 419.78571416 0 0 0 140.14285751-23.78571416 46.28571416 46.28571416 0 0 0 28.92857081-59.78571417 46.92857168 46.92857168 0 0 0-59.78571416-28.92857167 334.28571416 334.28571416 0 1 1 128.5714292-79.07142832 46.28571416 46.28571416 0 0 0 0 64.28571416l156.21428496 156.21428583a46.92857168 46.92857168 0 0 0 32.78571504 13.50000001 48.21428584 48.21428584 0 0 0 33.4285708-13.5 47.57142832 47.57142832 0 0 0-2.57142832-63.64285752z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSeekicon.defaultProps = {
  size: 18,
};

IconSeekicon = React.memo ? React.memo(IconSeekicon) : IconSeekicon;

export default IconSeekicon;
