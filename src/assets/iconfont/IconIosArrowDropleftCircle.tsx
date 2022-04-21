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

let IconIosArrowDropleftCircle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 96C282.2 96 96 282.2 96 512s186.2 416 416 416 416-186.2 416-416S741.8 96 512 96z m86.8 578.2c15 15 15 39.6 0 54.6-7.6 7.6-17.4 11.2-27.2 11.2s-19.8-3.8-27.4-11.4l-188-188.6c-13.8-15.2-13.4-38.6 1.2-53.2l190.8-191.4c15-15 39.4-15.2 54.6 0 15 15 15.2 39.4 0 54.6l-163.8 162 159.8 162.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIosArrowDropleftCircle.defaultProps = {
  size: 18,
};

IconIosArrowDropleftCircle = React.memo ? React.memo(IconIosArrowDropleftCircle) : IconIosArrowDropleftCircle;

export default IconIosArrowDropleftCircle;
