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

let IconGuanzhu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M803.57 446.48c30.84 0 60.14 6.41 87.9 20.79 49.35-126.31-10.8-270.2-132.62-321.36-27.76-11.19-57.06-17.6-87.89-17.6-60.15-1.59-118.74 23.99-158.84 70.35l-26.21 33.58-24.68-30.37c-41.63-47.97-98.69-73.56-158.83-73.56-97.16 0-183.5 60.77-220.52 151.89-35.46 92.73-15.41 198.26 52.44 268.6L448.9 879.76c9.26 9.58 23.13 15.99 37.01 15.99 13.87 0 27.75-6.41 37.01-15.99l97.16-102.32c-58.6-103.93-26.22-238.23 74.02-300.58 33.9-19.19 70.91-30.38 109.47-30.38z m104.86 164.69h-52.44V556.8c1.55-20.78-9.24-38.37-24.67-49.57-24.67-15.98-57.05-6.39-72.47 19.19-6.17 9.59-7.71 20.79-7.71 30.38v54.37h-52.43c-29.31-1.6-53.98 22.38-55.53 51.16 0 11.19 1.55 22.38 7.72 30.38 9.26 17.6 27.76 27.18 47.81 27.18h52.43v54.37c-1.55 20.78 9.24 39.96 24.66 49.57 24.68 15.97 57.07 6.39 72.48-19.19 6.17-9.59 7.71-20.79 7.71-30.38v-54.37h52.44c29.3-1.6 52.43-27.18 50.88-57.56-1.54-27.19-23.12-49.57-50.88-51.16z m0 0"
        fill={getIconColor(color, 0, '#606060')}
      />
    </Svg>
  );
};

IconGuanzhu.defaultProps = {
  size: 18,
};

IconGuanzhu = React.memo ? React.memo(IconGuanzhu) : IconGuanzhu;

export default IconGuanzhu;
