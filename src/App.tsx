import './config/axios';
import React, { useEffect, useState } from 'react';
import rootStore, {StoreContext} from './model';
import Navigator from './navigator';
import { StatusBar, Text, View } from 'react-native';
import PublishScreen from './pages/publish';
import Demo from './demos/ImagePicker';
import DemoElements from './demos/Element';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { Provider } from '@ant-design/react-native';

import * as IMLib from '@rongcloud/react-native-imlib'
import * as CallLib from '@rongcloud/react-native-calllib'

// CallLib.init();
IMLib.init('mgb7ka1nm70ng');

IMLib.connect('4YVYJE8r54CwrJ/Vqn1ckjjKG1RvVyEr@cpq8.cn.rongnav.com;cpq8.cn.rongcfg.com', (userId) => {
  console.log('IM连接成功 userId ->' + userId)
}, (code) => {
  console.log('连接失败  code -> ' + code)
}, () => {
  console.log('111')
})

CallLib.onCallReceived((session) => {
  // 在此可设置来电时的视图
  console.log('call')
})

const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
    // Redefinig only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});

export default function App() {
  const [initial, setInitial] = useState(false);

  const initState = async () => {
    await rootStore.userStore.initStateFromCache();
    setInitial(true);
  }

  useEffect(() => {
    initState()
  }, [])

  if (!initial) return null;

  return (
    <StoreContext.Provider value={rootStore}>
      <Provider>
        <StatusBar
          translucent
          barStyle={'dark-content'}
          backgroundColor="transparent"
        />
        <NativeBaseProvider theme={theme}>
          <Navigator />
        </NativeBaseProvider>
      </Provider>
    </StoreContext.Provider>
  );
}