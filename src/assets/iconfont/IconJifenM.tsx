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

let IconJifenM: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 116.4921875a395.5078125 395.5078125 0 1 0 395.5078125 395.5078125A395.5078125 395.5078125 0 0 0 512 116.4921875z m158.203125 355.95703125h-118.65234375v79.1015625h118.65234375v79.1015625h-118.65234375v118.65234375H472.44921875v-118.65234375H353.796875v-79.1015625h118.65234375V472.44921875H353.796875V393.34765625h81.07910156L371.99023437 330.46191406 428.15234375 274.6953125 512 358.54296875 595.84765625 274.6953125l55.76660156 55.76660156L589.12402344 393.34765625H670.203125z"
        fill={getIconColor(color, 0, '#2c2c2c')}
      />
    </Svg>
  );
};

IconJifenM.defaultProps = {
  size: 18,
};

IconJifenM = React.memo ? React.memo(IconJifenM) : IconJifenM;

export default IconJifenM;
