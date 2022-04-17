import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  ViewStyle,
  ViewProps,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import IconBack from '../../assets/iconfont/IconArrowLeft';
import BText from '../BText';

export const TOP_INSERT_HEIGHT = Platform.OS === 'android' ? 24 : 42;

export const TopInsertView: React.FC<ViewProps> = ({ style, ...restProps }) => {
  return <View style={[{ height: TOP_INSERT_HEIGHT }, style]} {...restProps}></View>
}

export interface IBNavBar {
  title?: React.ReactNode | (() => React.ReactNode);
  showBack?: boolean;
  navRight?: React.ReactNode;
  navLeft?: React.ReactNode;
  useTopInsert?: boolean;
  showNavBar?: boolean;
  containerStyle?: ViewStyle;
  navbarStyle?: ViewStyle;
  border?: boolean;

  backIconStyle?: {
    color?: string;
    size?: number;
  }
}

const BNavBar: React.FC<IBNavBar> = ({
  showBack = true,
  useTopInsert = true,
  showNavBar = true,
  navRight,
  navLeft,
  title,
  backIconStyle = {},
  containerStyle = {},
  navbarStyle = {},
  border = true
}) => {
  const route = useRoute();
  const navigation = useNavigation();
  const back = () => navigation.goBack();

  const renderLeft = () => {
    const getContent = () => {
      if (navLeft) return navLeft;
      if (showBack) {
        return (
          <TouchableWithoutFeedback onPress={back}>
            <IconBack size={24} color="#333" {...backIconStyle} />
          </TouchableWithoutFeedback>
        );
      }
    };
    return <View style={{width: 60, paddingLeft: 10}}>{getContent()}</View>;
  };

  const renderRight = () => {
    return (
      <View style={{width: 60, paddingRight: 12, alignItems: 'flex-end'}}>
        {navRight}
      </View>
    );
  };

  const renderTitle = () => {
    if (typeof title === 'function') {
      return <View style={styles.title}>{title()}</View>;
    }
    return (
      <View style={styles.title}>
        <BText style={{fontSize: 18, fontWeight: '600'}} type="main">
          {title !== undefined ? title : route.name}
        </BText>
      </View>
    );
  };

  const borderStyle = border ? {
    borderBottomColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth,
  } : {
    borderBottomColor: '#ddd',
    borderBottomWidth: 0,
  }

  return (
    <View style={[styles.header, containerStyle]}>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor="transparent"
      />
      {useTopInsert && <View style={styles.topInsert}></View>}
      {showNavBar && (
        <View style={[styles.navbar, borderStyle, navbarStyle]}>
          {renderLeft()}
          {renderTitle()}
          {renderRight()}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
  },
  topInsert: {
    height: Platform.OS === 'android' ? 24 : 42,
  },
  navbar: {
    marginTop: 14,
    paddingBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export { BNavBar }