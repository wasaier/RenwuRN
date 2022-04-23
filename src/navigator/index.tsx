import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';

import MainTabScreen, { BottomTabParamList } from './BottomTabs';
import LoginScreen from '@/pages/me/login';
import SearchScreen from '@/pages/search';
import RankScreen from '@/pages/rank';
import ProjectScreen from '@/pages/project';
import H5Screen from '@/pages/h5';
import PostScreen from '@/pages/post';
import PublishScreen from '@/pages/publish'
import ScanScreen from '@/pages/scan';
import AboutUs from '@/pages/settings/about-us';
import AboutAuthor from '@/pages/settings/about-author';
import SettingScreen from '@/pages/settings';
import WelcomeScreen from '@/pages/welcome';
import { observer } from 'mobx-react';
import { useStore } from '@/model';

export type RootStackParamList = {
  MainTab: NavigatorScreenParams<BottomTabParamList>;
  Login: undefined;
  Search: undefined;
  LoginModal: undefined;
  Rank: undefined;
  Project: {
    id: number;
  };
  Post: {
    id: number;
  };
  H5: {
    url: string;
    title?: string;
  },
  PublishModal: undefined,
  Scan: undefined,
  AboutUs: undefined,
  AboutAuthor: undefined,
  Setting: undefined,
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const RootStack = createStackNavigator<RootStackParamList>();

function RootStackScreen() {
  const hideHeaderOptions = {
    title: '',
    headerBackTitle: '',
    headerShown: false,
  }
  return (
    <RootStack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <RootStack.Group>
        <RootStack.Screen
          name="MainTab"
          options={{headerShown: false}}
          component={MainTabScreen}
        />
        <RootStack.Screen
          name="Search"
          options={hideHeaderOptions}
          component={SearchScreen}
        />
        <RootStack.Screen
          name="Rank"
          options={hideHeaderOptions}
          component={RankScreen}
        />
        <RootStack.Screen
          name="Login"
          options={hideHeaderOptions}
          component={LoginScreen}
        />
        <RootStack.Screen
          name="Project"
          options={hideHeaderOptions}
          component={ProjectScreen}
        />
        <RootStack.Screen
          name="Post"
          options={hideHeaderOptions}
          component={PostScreen}
        />
        <RootStack.Screen
          name="Scan"
          options={hideHeaderOptions}
          component={ScanScreen}
        />
        <RootStack.Screen
          name="H5"
          options={hideHeaderOptions}
          component={H5Screen}
        />
        <RootStack.Screen
          name="AboutUs"
          options={hideHeaderOptions}
          component={AboutUs}
        />
        <RootStack.Screen
          name="AboutAuthor"
          options={hideHeaderOptions}
          component={AboutAuthor}
        />
        <RootStack.Screen
          name="Setting"
          options={hideHeaderOptions}
          component={SettingScreen}
        />
      </RootStack.Group>

      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen name="LoginModal" component={LoginScreen} />
      </RootStack.Group>

      <RootStack.Group screenOptions={{
        // presentation: 'modal'
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid
      }}>
        <RootStack.Screen name="PublishModal" component={PublishScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

function Navigator() {
  const { userStore } = useStore();

  if (userStore.showWelcome) {
    return <WelcomeScreen />
  }

  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  )
}

export default observer(Navigator);