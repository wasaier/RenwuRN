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

let IconUser: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M639.24906667 626.688l0.54613333-18.0224c84.65066667-58.9824 125.61066667-163.29386667 125.61066667-317.8496 0-148.54826667-92.84266667-237.568-249.0368-237.568h-8.192c-155.648 0-249.0368 89.01973333-249.0368 237.568 0 153.46346667 41.50613333 257.77493333 126.70293333 317.30346667v18.0224c-141.99466667 19.11466667-284.53546667 75.3664-284.53546667 162.2016 0 120.69546667 138.17173333 182.40853333 410.69226667 182.40853333s410.69226667-61.16693333 410.69226667-182.40853333c0-86.28906667-141.99466667-142.5408-283.4432-161.65546667z"
        fill={getIconColor(color, 0, '#0025ff')}
      />
    </Svg>
  );
};

IconUser.defaultProps = {
  size: 18,
};

IconUser = React.memo ? React.memo(IconUser) : IconUser;

export default IconUser;
