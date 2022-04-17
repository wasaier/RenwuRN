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

let IconHomeO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M930.6 452.1L591.2 104.6c-21.1-21.5-49.3-33.5-79.5-33.5-30.2 0-58.4 11.8-79.5 33.5L92.9 452.1C57.9 488 62.4 519 68.2 532c4.2 9.2 18.1 34.4 58.2 34.4h49.7v267.3c0 60.7 44.3 117.9 107.2 117.9h144.5V668.7c0-30.3-4.6-47.3 26.8-47.3h114.2c31.5 0 26.8 16.9 26.8 47.3v282.9H740c62.9 0 107.2-57.2 107.2-117.9V566.4H897c40.1 0 54-25.3 58.2-34.4 5.8-13 10.3-44-24.6-79.9zM897 511.4H791.3v322.3c0 30.3-19.9 62.8-51.4 62.8h-88.5V668.7c0-60.7-19.8-102.3-82.7-102.3H454.6c-62.9 0-82.7 41.6-82.7 102.3v227.9h-88.5c-31.5 0-51.4-32.5-51.4-62.8V511.5H126.3c-1 0-1.8-3.8-2.7-3.9 2-3.3 5.3-11.7 10.9-17.4l339.4-347.3c10.1-10.5 24.4-16.7 38.3-16.6 13.9-0.1 27.3 6.3 37.5 16.6L889 490.1c5.6 5.7 8.9 14.1 10.8 17.4-0.8 0.1-1.7 3.9-2.8 3.9z m0 0"
        fill={getIconColor(color, 0, '#888888')}
      />
    </Svg>
  );
};

IconHomeO.defaultProps = {
  size: 18,
};

IconHomeO = React.memo ? React.memo(IconHomeO) : IconHomeO;

export default IconHomeO;
