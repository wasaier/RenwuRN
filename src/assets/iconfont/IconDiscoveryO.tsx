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

let IconDiscoveryO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M485.85386667 485.888a36.93226667 36.93226667 0 0 1 52.29226666 0 36.93226667 36.93226667 0 0 1 0 52.29226667 37.03466667 37.03466667 0 0 1-52.29226666 0 36.93226667 36.93226667 0 0 1 0-52.29226667z m158.99306666-106.7008l-211.2512 54.3744-53.99893333 210.8416 210.8416-53.99893333 54.40853333-211.2512z m-250.50453333 15.18933333l313.71946667-78.4384-78.4384 313.7536-313.7536 78.4384 78.4384-313.71946666zM512 123.76746667C297.54026667 123.76746667 123.6992 297.60853333 123.6992 512S297.54026667 900.26666667 512 900.26666667c214.4256 0 388.23253333-173.84106667 388.23253333-388.26666667S726.4256 123.76746667 512 123.76746667zM68.26666667 512A443.63093333 443.63093333 0 0 1 512.03413333 68.26666667c245.0432 0 443.73333333 198.656 443.73333334 443.6992 0.03413333 245.11146667-198.656 443.76746667-443.73333334 443.76746666s-443.73333333-198.62186667-443.73333333-443.73333333z"
        fill={getIconColor(color, 0, '#8a8a8a')}
      />
    </Svg>
  );
};

IconDiscoveryO.defaultProps = {
  size: 18,
};

IconDiscoveryO = React.memo ? React.memo(IconDiscoveryO) : IconDiscoveryO;

export default IconDiscoveryO;
