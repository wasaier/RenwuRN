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

let IconShoucang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M914.60949333 425.49248c0-75.80330667-210.80746667-80.60928-238.98794666-113.59573333-28.18048-32.98645333-105.51296-202.28778667-163.62154667-202.28778667-58.10858667 0-135.22261333 168.64597333-163.40309333 201.41397333-28.18048 32.54954667-239.2064 38.44778667-239.2064 114.46954667 0 59.20085333 91.31349333 143.30538667 131.94581333 193.76810667 89.34741333-141.33930667 244.66773333-227.19146667 411.78453333-227.62837334-201.41397333 0-355.42357333 185.24842667-400.20650666 312.16981334-22.28224 63.56992-33.20490667 168.86442667-12.45184 188.74368 74.27413333 70.34197333 235.9296-50.68117333 271.53749333-50.68117334 35.60789333 0 197.48181333 121.02314667 271.75594667 50.46272 27.96202667-26.43285333-20.09770667-206.21994667-20.09770667-240.08021333s150.95125333-151.16970667 150.95125333-226.75456z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShoucang.defaultProps = {
  size: 18,
};

IconShoucang = React.memo ? React.memo(IconShoucang) : IconShoucang;

export default IconShoucang;
