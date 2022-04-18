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

let IconTongzhi1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M848.4 735.6l-0.4-0.2c-11.2-7.1-14.3-21.5-8.1-33.1 81.7-152 21.5-324.6-3.5-383.1-5-11.8-0.3-25.4 11.1-31.4l0.5-0.3c12.6-6.6 28.2-1.4 33.9 11.7 28.6 65.8 94.9 255.6 0.8 428.1-6.6 12.2-22.5 15.7-34.3 8.3zM614.8 121.1L335.5 315c-3.3 1.7-7 2.6-10.7 2.6h-184c-27.3 0-49.5 22.2-49.5 49.5v301.3c0 27.3 22.2 49.5 49.5 49.5h183.1l294.7 189.2c32.8 13.4 68.7-10.7 68.7-46.1V165.6c-0.1-37.2-39.3-61.3-72.5-44.5z"
        fill={getIconColor(color, 0, '#3259CE')}
      />
    </Svg>
  );
};

IconTongzhi1.defaultProps = {
  size: 18,
};

IconTongzhi1 = React.memo ? React.memo(IconTongzhi1) : IconTongzhi1;

export default IconTongzhi1;
