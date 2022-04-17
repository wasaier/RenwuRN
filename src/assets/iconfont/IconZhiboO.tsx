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

let IconZhiboO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M670.8 232.5H782c80.6 0 146 65.4 146 146v422.7c0 80.6-65.4 146-146 146H244c-80.6 0-146-65.4-146-146V378.5c0-80.6 65.4-146 146-146h107.1l-57.5-108.6c-7.6-15.2-1.5-33.6 13.7-41.3C322 75.2 340 80.8 348 95.2l72.7 137.3h180.5l72.7-137.3c7.9-15 26.5-20.8 41.6-12.8s20.8 26.5 12.8 41.6l-57.5 108.5zM244 294c-46.7 0-84.5 37.9-84.5 84.5v422.7c0 46.7 37.9 84.5 84.5 84.5h538c46.7 0 84.5-37.9 84.5-84.5V378.5c0-46.7-37.9-84.5-84.5-84.5H244z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M366.9 470.1V725c0 27.6 22.4 50 49.9 50 9.1 0 18-2.5 25.7-7.1L655 640.4c23.7-14.2 31.3-44.9 17.2-68.5-4.2-7-10.1-12.9-17.2-17.2L442.6 427.3c-23.7-14.2-54.3-6.5-68.5 17.1-4.7 7.7-7.2 16.6-7.2 25.7z m240 127.5L428.4 704.7V490.5l178.5 107.1z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconZhiboO.defaultProps = {
  size: 18,
};

IconZhiboO = React.memo ? React.memo(IconZhiboO) : IconZhiboO;

export default IconZhiboO;
