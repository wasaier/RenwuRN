import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import { observer } from 'mobx-react';
import React from 'react';
import BListItem from '../../components/BListItem';
import BPage from '../../components/BPage';
import { useStore } from '../../model';
import {RootStackParamList} from '../../navigator';
import {BottomTabParamList} from '../../navigator/BottomTabs';

type IMeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'Me'>,
  StackScreenProps<RootStackParamList>
>;

const SettingScreen: React.FC<IMeScreenProps> = ({navigation}) => {
  const { userStore } = useStore();
  return (
    <BPage title="设置" style={{ backgroundColor: '#fff' }}>
      <BListItem
        title="关于我们"
        onPress={() => {
          navigation.navigate('AboutUs');
        }}></BListItem>
      <BListItem
        title="关于作者"
        onPress={() => {
          navigation.navigate('AboutAuthor');
        }}></BListItem>
           <BListItem
        title="退出登录"
        onPress={() => {
          userStore.updateShowWelcome(true)
        }}></BListItem>
    </BPage>
  );
};

export default observer(SettingScreen)
