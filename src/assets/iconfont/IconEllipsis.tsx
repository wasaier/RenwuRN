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

let IconEllipsis: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M192.992 488q0-26.016 19.008-44.992t45.504-19.008 44.992 19.008 18.496 44.992-18.496 44.992-44.992 19.008-45.504-19.008-19.008-44.992z m256 0q0-26.016 19.008-44.992t44.992-19.008 44.992 19.008 19.008 44.992-19.008 44.992-44.992 19.008-44.992-19.008-19.008-44.992z m256 0q0-26.016 18.496-44.992t44.992-19.008 45.504 19.008 19.008 44.992-19.008 44.992-45.504 19.008-44.992-19.008-18.496-44.992z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconEllipsis.defaultProps = {
  size: 18,
};

IconEllipsis = React.memo ? React.memo(IconEllipsis) : IconEllipsis;

export default IconEllipsis;
