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

let IconMessage: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M355 888.3L215 952c-11.8 5.4-19.3-0.7-16.8-13.6L222.5 814C126.1 736 65 619.8 65 490 65 254.9 265.6 64.4 513 64.4S961 254.9 961 490 760.4 915.6 513 915.6c-55.6 0-108.9-9.6-158-27.3z m-55.3-331.1c35.3 0 64-30.1 64-67.2s-28.7-67.2-64-67.2-64 30.1-64 67.2 28.6 67.2 64 67.2z m213.3 0c35.3 0 64-30.1 64-67.2s-28.7-67.2-64-67.2-64 30.1-64 67.2 28.7 67.2 64 67.2z m213.3 0c35.3 0 64-30.1 64-67.2s-28.7-67.2-64-67.2-64 30.1-64 67.2 28.7 67.2 64 67.2z"
        fill={getIconColor(color, 0, '#0025ff')}
      />
    </Svg>
  );
};

IconMessage.defaultProps = {
  size: 18,
};

IconMessage = React.memo ? React.memo(IconMessage) : IconMessage;

export default IconMessage;
