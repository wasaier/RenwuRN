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

let IconZhibo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M657.365333 65.706667a32 32 0 0 1 53.034667 35.626666L621.056 256H853.333333a85.333333 85.333333 0 0 1 85.333334 85.333333v512a85.333333 85.333333 0 0 1-85.333334 85.333334H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333334-85.333333h232.234666L313.6 101.333333a32 32 0 0 1 53.034667-35.626666l2.432 3.626666L476.8 256h70.357333l107.776-186.666667zM426.666667 442.112a21.333333 21.333333 0 0 0-20.992 17.493333l-0.341334 3.84v267.776a21.333333 21.333333 0 0 0 28.416 20.138667l3.498667-1.578667 234.325333-133.930666a21.333333 21.333333 0 0 0 3.157334-34.858667l-3.157334-2.176-234.325333-133.930667a21.333333 21.333333 0 0 0-10.581333-2.773333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconZhibo.defaultProps = {
  size: 18,
};

IconZhibo = React.memo ? React.memo(IconZhibo) : IconZhibo;

export default IconZhibo;
