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

let IconZhuanyepaiming: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M526.97 553.27l-96.46-80.04-152.75 122.76v-53.03L430.5 420.18l96.47 80.06 142.09-119.21-52.53-50.32c-0.69-0.67-0.95-1.71-0.56-2.65 0.4-0.94 1.33-1.51 2.3-1.51h125.48c0.63 0 1.28 0.23 1.76 0.71 0.49 0.47 0.73 1.1 0.73 1.72v120.17c0 0.95-0.57 1.86-1.52 2.24-0.95 0.4-2.02 0.16-2.71-0.5L698.6 409.3M348.04 690.16c0 1.86-0.73 3.73-2.18 5.14a7.586 7.586 0 0 1-5.29 2.14h-54.93a7.56 7.56 0 0 1-5.29-2.14 7.176 7.176 0 0 1-2.18-5.14v-51.81l69.88-56.17-0.01 107.98zM465.43 544.9v145.26c0 1.86-0.73 3.73-2.18 5.14a7.586 7.586 0 0 1-5.29 2.14h-54.95c-1.91 0-3.82-0.71-5.28-2.14a7.136 7.136 0 0 1-2.18-5.14V543.99l34.96-28.06 34.92 28.97z m117.41 4.2v141.06a7.1 7.1 0 0 1-2.2 5.14 7.545 7.545 0 0 1-5.28 2.14h-54.94a7.56 7.56 0 0 1-5.29-2.14 7.136 7.136 0 0 1-2.18-5.14V584.31l14.03 11.64 55.86-46.85z m117.41 141.06a7.1 7.1 0 0 1-2.2 5.14 7.545 7.545 0 0 1-5.28 2.14H637.8c-1.91 0-3.82-0.71-5.28-2.14a7.136 7.136 0 0 1-2.18-5.14v-180.9l69.91-58.66v239.56z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
      <Path
        d="M512 112c220.91 0 400 179.09 400 400S732.91 912 512 912 112 732.91 112 512s179.09-400 400-400z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
      <Path
        d="M512 112c220.91 0 400 179.09 400 400S732.91 912 512 912 112 732.91 112 512s179.09-400 400-400z"
        fill={getIconColor(color, 2, '#fbfb82')}
        fillOpacity=".502"
      />
      <Path
        d="M512 912c-189.81 0-348.63-132.25-389.61-309.6 58.55-24.57 144.19-21.82 202.95 29.6 80 70 190 63.33 260 0s186.67-40 233.33 6.67c14.66 14.66 30.63 37.88 45.65 62.83C796.77 826.81 664.35 912 512 912z"
        fill={getIconColor(color, 3, '#f4ea2a')}
        fillOpacity=".502"
      />
      <Path
        d="M902.15 600.06C862.03 778.59 702.64 912 512 912c-143.76 0-269.75-75.88-340.26-189.73 81.09-108.35 245.83-183.73 360.26-83.6 80 70 190 63.33 260 0 30.95-28.01 71.03-39.02 110.15-38.61z"
        fill={getIconColor(color, 4, '#f4ea2a')}
        fillOpacity=".502"
      />
      <Path
        d="M352.38 698.73c0-9.69 7.85-17.58 17.58-17.58h283.73c9.69 0 17.58 7.85 17.58 17.58 0 9.69-7.85 17.58-17.58 17.58H369.96c-9.69 0-17.58-7.89-17.58-17.58z m358.67-227.52c1.54-4.54 1.24-9.6-1.16-14.06-0.04-0.13-0.13-0.21-0.17-0.34v-0.04c-2.49-4.59-6.99-8.06-12.56-9-6.09-1.03-11.96 1.24-15.86 5.49l-68.08 48.57-87.2-97.62c-0.6-0.64-1.2-1.24-1.84-1.8l-0.09-0.09c-7.25-6.47-18.35-5.83-24.78 1.41l-87.97 98.52-68.98-49.17c-3.9-4.07-9.65-6.22-15.65-5.23-7.5 1.24-13.12 7.12-14.36 14.23-0.56 2.79-0.43 5.66 0.39 8.36L350 641.41c0.09 2.27 0.6 4.42 1.46 6.39 2.96 7.59 10.93 12.35 19.25 10.93 0.6-0.09 1.2-0.21 1.8-0.39h283.56c5.7 0 10.76-2.7 13.98-6.9 1.84-2.27 3.17-5.06 3.69-8.19l37.31-172.04z"
        fill={getIconColor(color, 5, '#333333')}
      />
      <Path
        d="M511.82 307.69c-29.62 0-53.59 24.01-53.59 53.59 0 29.58 24.01 53.59 53.59 53.59 29.58 0 53.59-24.01 53.59-53.59 0-29.58-23.96-53.59-53.59-53.59z"
        fill={getIconColor(color, 6, '#333333')}
      />
    </Svg>
  );
};

IconZhuanyepaiming.defaultProps = {
  size: 18,
};

IconZhuanyepaiming = React.memo ? React.memo(IconZhuanyepaiming) : IconZhuanyepaiming;

export default IconZhuanyepaiming;
