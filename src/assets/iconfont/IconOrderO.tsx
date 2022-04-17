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

let IconOrderO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M797.78128 978.023876H226.20644c-53.735855 0-97.447403-43.711548-97.447403-97.447403v-737.13862c0-53.735855 43.711548-97.447403 97.447403-97.447403h395.257136v64.965618H226.20644c-17.911952 0-32.482809 14.570857-32.482809 32.482808v737.13862c0 17.911952 14.570857 32.482809 32.482809 32.482809h571.57484c17.911952 0 32.482809-14.570857 32.482809-32.482809V319.765791h64.965617v560.810682c-0.001023 53.735855-43.712571 97.447403-97.448426 97.447403z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M862.757131 352.248599H686.439426c-53.735855 0-97.447403-43.711548-97.447403-97.447402V78.472236a32.464389 32.464389 0 0 1 20.047592-30.008454c12.138458-5.064342 26.128077-2.242064 35.401278 7.042393L885.723192 296.79973a32.465412 32.465412 0 0 1 7.042393 35.401278c-5.02341 12.138458-16.876366 20.047592-30.008454 20.047591zM653.956617 156.887167v97.913006c0 17.911952 14.570857 32.482809 32.482809 32.482809h97.902774L653.956617 156.887167zM306.27094 522.824533H717.71678v64.965617H306.27094zM306.27094 686.421518H717.71678v64.965618H306.27094z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconOrderO.defaultProps = {
  size: 18,
};

IconOrderO = React.memo ? React.memo(IconOrderO) : IconOrderO;

export default IconOrderO;
