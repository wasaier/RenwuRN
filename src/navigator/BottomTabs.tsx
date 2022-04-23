import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {RootStackNavigation, RootStackParamList} from '.';

import FindScreen from '@/pages/find';
import ChatScreen from '@/pages/chat';
import HomeScreen from '@/pages/home';
import MeScreen from '@/pages/me';
import {
  IconAccount,
  IconAccountOutline,
  IconDiscover,
  IconDiscoveryO,
  IconHome,
  IconHomeO,
  IconMessage,
  IconMessageO,
} from '@/assets/iconfont';
import {MyTabBar} from './MTabbar';

export type BottomTabParamList = {
  Home: undefined;
  Find: undefined;
  Chat: undefined;
  Me: undefined;
};

export type BottomTabNavigation = BottomTabNavigationProp<BottomTabParamList>;

interface IProps {
  navigation: RootStackNavigation;
  route: RouteProp<RootStackParamList, 'MainTab'>;
}

const MainTab = createBottomTabNavigator();

// 底部导航
const MainTabScreen: React.FC<IProps> = () => {
  const tabs = [
    {
      name: 'Home',
      options: {
        title: '主页',
        tabBarIcon: ({focused, color }: {focused: boolean, color: string }) => {
          return focused ? <IconHome color={color} /> : <IconHomeO color={color} />;
        },
        headerShown: false,
      },
      component: HomeScreen,
    },
    {
      name: 'Find',
      options: {
        title: '发现',
        tabBarIcon:({focused, color }: {focused: boolean, color: string }) =>
          focused ? <IconDiscover color={color}/> : <IconDiscoveryO color={color}/>,
        headerShown: false,
      },
      component: FindScreen,
    },
    {
      name: 'Chat',
      options: {
        title: '消息',
        tabBarIcon: ({focused, color }: {focused: boolean, color: string }) =>
          focused ? <IconMessage color={color}/> : <IconMessageO color={color}/>,
        headerShown: false,
      },
      component: ChatScreen,
    },
    {
      name: 'Me',
      options: {
        title: '我的',
        tabBarIcon: ({focused, color }: {focused: boolean, color: string }) =>
          focused ? <IconAccount color={color}/> : <IconAccountOutline color={color} />,
        headerShown: false,
      },
      component: MeScreen,
    },
  ];

  return (
    <MainTab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: '#0025ff',
      }}>
      <MainTab.Screen {...tabs[0]} />
      <MainTab.Screen {...tabs[1]} />
      <MainTab.Screen {...tabs[2]} />
      <MainTab.Screen {...tabs[3]} />
    </MainTab.Navigator>
  );
};

export default MainTabScreen;