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

let IconNiurenbang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M95.744 772.608h844.8c12.288 0 23.04-10.24 25.088-23.04L1024 150.016c2.048-14.336-8.192-25.088-23.04-27.136-8.192 0-14.336 2.048-20.992 8.192l-178.688 197.12c-8.192 10.24-25.088 10.24-35.328 2.048l-2.048-2.048-238.592-286.208c-8.192-10.24-25.088-12.288-35.328-2.048l-4.096 4.096-216.064 282.112c-8.192 10.24-23.04 12.288-35.328 4.096l-2.048-2.048L44.032 129.024c-10.24-10.24-25.088-10.24-35.328 0C2.56 135.168 0.512 141.312 0.512 150.016l70.656 599.552c1.536 12.288 12.288 23.04 24.576 23.04z"
        fill={getIconColor(color, 0, '#2E79FD')}
      />
      <Path
        d="M89.6 884.224h852.992c14.336 0 25.088 10.24 25.088 25.088V967.68c0 14.336-10.24 25.088-25.088 25.088H89.6c-14.336 0-25.088-10.24-25.088-25.088v-60.416c0-12.288 10.24-23.04 25.088-23.04z"
        fill={getIconColor(color, 1, '#F18430')}
      />
      <Path
        d="M459.776 316.928L360.96 522.24c-15.36 32.256 8.192 69.12 43.52 69.12h193.024c35.328 0 58.88-36.352 44.032-68.608L546.816 317.44c-16.896-37.376-69.632-37.376-87.04-0.512z"
        fill={getIconColor(color, 2, '#CEDFF9')}
      />
    </Svg>
  );
};

IconNiurenbang.defaultProps = {
  size: 18,
};

IconNiurenbang = React.memo ? React.memo(IconNiurenbang) : IconNiurenbang;

export default IconNiurenbang;
