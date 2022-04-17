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

let IconAccountOutline: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 563.78153127c-138.25668741 0-414.25224651 68.86943645-414.25224651 207.12612265v155.34459259h828.50449302v-155.34459259c0-138.25668741-275.9955591-207.12612386-414.25224651-207.12612265m0-466.03377778a207.12612386 207.12612386 0 0 0-207.12612386 207.12612265 207.12612386 207.12612386 0 0 0 207.12612386 207.12612386 207.12612386 207.12612386 0 0 0 207.12612386-207.12612386 207.12612386 207.12612386 0 0 0-207.12612386-207.12612265m0 564.41868561c153.79114667 0 315.86733868 75.60103466 315.86733868 108.74121482v56.95968476H196.13266132V770.90765392c0-33.14018016 160.52274608-108.74121482 315.86733868-108.74121482m0-466.03377778A108.74121482 108.74121482 0 0 1 620.74121482 304.87387614a108.74121482 108.74121482 0 0 1-108.74121482 108.74121481A108.74121482 108.74121482 0 0 1 403.25878518 304.87387614 108.74121482 108.74121482 0 0 1 512 196.13266132z"
        fill={getIconColor(color, 0, '#8a8a8a')}
      />
    </Svg>
  );
};

IconAccountOutline.defaultProps = {
  size: 18,
};

IconAccountOutline = React.memo ? React.memo(IconAccountOutline) : IconAccountOutline;

export default IconAccountOutline;
