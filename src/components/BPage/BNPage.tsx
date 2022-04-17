import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  ViewProps,
} from 'react-native';
import {BNavBar, IBNavBar} from './BNavBar';

export const TOP_INSERT_HEIGHT = Platform.OS === 'android' ? 24 : 42;

const BNPage: React.FC<{ navBarOptions: IBNavBar } & ViewProps> = ({
  navBarOptions = {},
  children,
  style = {},
  ...restProps
}) => {
  const _style = {
    flex: 1,
    // backgroundColor: '#fafafa',
  };

  return (
    <View style={[_style, style]} {...restProps}>
      <BNavBar {...navBarOptions} />
      <View style={{flex: 1, width: '100%'}}>{children}</View>
    </View>
  );
};

export default BNPage;