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

let IconAdd: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z m0-73.142857A438.857143 438.857143 0 1 0 512 73.142857a438.857143 438.857143 0 0 0 0 877.714286z m218.112-403.236572H547.547429v182.564572a36.571429 36.571429 0 0 1-72.996572 0V547.620571H291.986286a36.571429 36.571429 0 0 1 0-72.996571h182.564571V291.986286a36.571429 36.571429 0 0 1 72.996572 0V474.697143h182.564571a36.571429 36.571429 0 0 1 0 72.996571z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconAdd.defaultProps = {
  size: 18,
};

IconAdd = React.memo ? React.memo(IconAdd) : IconAdd;

export default IconAdd;
