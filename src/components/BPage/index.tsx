import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  ViewProps,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import IconBack from '../../assets/iconfont/IconArrowLeft';
import BText from '../BText';
import {BNavBar} from './BNavBar';

export const TOP_INSERT_HEIGHT = Platform.OS === 'android' ? 24 : 42;

const BPage: React.FC<
  {
    title?: React.ReactNode | (() => React.ReactNode);
    showNavBar?: boolean;
    showBack?: boolean;
    navRight?: React.ReactNode;
    navLeft?: React.ReactNode;
    useTopInsert?: boolean;
  } & ViewProps
> = ({
  showBack = true,
  showNavBar = true,
  useTopInsert = true,
  navRight,
  navLeft,
  title,
  children,
  style = {},
  ...restProps
}) => {
  const _style = {
    flex: 1,
    backgroundColor: '#fafafa',
  };

  return (
    <View style={[_style, style]} {...restProps}>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor="transparent"
      />
      <BNavBar
        {...{
          showBack,
          showNavBar,
          useTopInsert,
          navRight,
          navLeft,
          title,
        }}
      />
      <View style={{flex: 1, width: '100%'}}>{children}</View>
    </View>
  );
};

export default BPage;