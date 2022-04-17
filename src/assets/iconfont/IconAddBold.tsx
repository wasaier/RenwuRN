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

let IconAddBold: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M882.78857422 413.12304687L610.87695313 413.12304687 610.87695313 141.21142578c0-13.65119934-11.06803894-24.71923828-24.71923829-24.71923828l-148.31542968 0c-13.65119934 0-24.71923828 11.06803894-24.71923829 24.71923828l0 271.91162109L141.21142578 413.12304687c-13.65119934 0-24.71923828 11.06803894-24.71923828 24.71923829l0 148.31542968c0 13.65119934 11.06803894 24.71923828 24.71923828 24.71923829l271.91162109 0 1e-8 271.91162109c0 13.65119934 11.06803894 24.71923828 24.71923828 24.71923828l148.31542968 0c13.65119934 0 24.71923828-11.06803894 24.71923829-24.71923828L610.87695313 610.87695313l271.91162109-1e-8c13.65119934 0 24.71923828-11.06803894 24.71923828-24.71923828l0-148.31542968C907.5078125 424.19108581 896.43977356 413.12304687 882.78857422 413.12304687z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconAddBold.defaultProps = {
  size: 18,
};

IconAddBold = React.memo ? React.memo(IconAddBold) : IconAddBold;

export default IconAddBold;
