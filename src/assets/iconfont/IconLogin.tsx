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

let IconLogin: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.360727 0H511.639273C229.038545 0.197818 0 229.352727 0 512c0 282.775273 229.224727 512 512 512s512-229.224727 512-512C1024 229.352727 794.961455 0.197818 512.360727 0"
        fill={getIconColor(color, 0, '#EEEEEE')}
      />
      <Path
        d="M384.418909 683.345455c-106.577455 38.423273-230.353455 106.496-244.596364 175.96509C231.819636 960.488727 364.497455 1024 512 1024s280.180364-63.511273 372.165818-164.677818c-14.242909-69.469091-138.018909-137.541818-244.596363-175.965091-8.238545-2.850909-47.325091-24.168727-25.448728-81.419636C670.196364 544.698182 712.634182 451.968 712.634182 360.727273c0-139.636364-92.613818-212.852364-200.645818-213.015273C403.968 147.874909 311.354182 221.090909 311.354182 360.727273c0 91.240727 42.437818 183.959273 98.513454 241.210182 21.888 57.239273-17.198545 78.568727-25.448727 81.408z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

IconLogin.defaultProps = {
  size: 18,
};

IconLogin = React.memo ? React.memo(IconLogin) : IconLogin;

export default IconLogin;
