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

let IconNotice: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 85.333333a85.333333 85.333333 0 0 1 85.276444 82.346667C736.583111 205.184 839.111111 332.401778 839.111111 483.555556v184.888888l49.649778 85.12A56.888889 56.888889 0 0 1 839.623111 839.111111l-181.845333 0.014222C635.022222 897.393778 578.332444 938.666667 512 938.666667s-123.022222-41.272889-145.777778-99.541334L184.376889 839.111111a56.888889 56.888889 0 0 1-49.137778-85.546667L184.888889 668.444444V483.555556c0-151.153778 102.528-278.371556 241.834667-315.875556l0.170666-3.384889A85.333333 85.333333 0 0 1 512 85.333333z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconNotice.defaultProps = {
  size: 18,
};

IconNotice = React.memo ? React.memo(IconNotice) : IconNotice;

export default IconNotice;
