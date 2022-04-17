import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';
import BPage from '@/components/BPage';
import { RootStackParamList } from '@/navigator';

type IProps = NativeStackScreenProps<RootStackParamList, 'H5'>;

const H5Screen: React.FC<IProps> = ({ navigation, route }) => {
  return (
    <BPage title="" style={{ flex: 1 }}>
      <WebView
        style={{flex: 1}}
        source={{uri: route.params.url }}
      />
    </BPage>
  );
};

export default H5Screen;
