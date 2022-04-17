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

let IconCloseBold: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 415.45635413L319.03209813 222.48845227C292.64129813 196.09765227 249.0288544 195.7092704 222.3690624 222.3690624 195.52340373 249.21472107 195.7627232 292.30636907 222.48845227 319.03209813L415.45635413 512 222.48845333 704.9679008C196.09765333 731.3587008 195.7092704 774.9711456 222.3690624 801.6309376 249.21472107 828.47659627 292.30637013 828.23727573 319.0320992 801.51154667L512 608.54364587 704.9679008 801.51154667C731.3587008 827.90234667 774.9711456 828.2907296 801.6309376 801.6309376 828.47659627 774.78527893 828.23727573 731.69362987 801.51154667 704.9679008L608.54364587 512 801.51154773 319.03209813C827.90234773 292.64129813 828.2907296 249.0288544 801.6309376 222.3690624 774.78527893 195.52340373 731.69363093 195.7627232 704.96790187 222.48845227L512 415.45635413Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCloseBold.defaultProps = {
  size: 18,
};

IconCloseBold = React.memo ? React.memo(IconCloseBold) : IconCloseBold;

export default IconCloseBold;
