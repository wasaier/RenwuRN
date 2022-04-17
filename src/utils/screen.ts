import {
  Dimensions,
  Platform,
  NativeModules
} from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const {PlatformConstants = {}} = NativeModules;
const {minor = 0} = PlatformConstants.reactNativeVersion || {};

export const window = Dimensions.get('window');
export const screen_width = window.width;
export const screen_height = window.height;

// console.log(Platform)
// console.log(window)

// 屏幕尺寸
export const screenRect = {
  height: window.height,
  width: window.width,
};

export const isIOS = Platform.OS === 'ios';

export const isIphoneX = () => {
  const iPhoneXFlag = screen_height === X_HEIGHT && screen_width === X_WIDTH;
  const iPhone12Flag = screen_height === 844 && screen_width === 390;
  return (
    isIOS && (iPhoneXFlag || iPhone12Flag)
  );
};
