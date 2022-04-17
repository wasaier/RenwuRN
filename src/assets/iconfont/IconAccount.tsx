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

let IconAccount: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512a225 225 0 1 0-225-225 225 225 0 0 0 225 225z m0 56.25c-248.625 0-450 100.6875-450 225v168.75h900v-168.75c0-124.3125-201.375-225-450-225z"
        fill={getIconColor(color, 0, '#0025ff')}
      />
    </Svg>
  );
};

IconAccount.defaultProps = {
  size: 18,
};

IconAccount = React.memo ? React.memo(IconAccount) : IconAccount;

export default IconAccount;
