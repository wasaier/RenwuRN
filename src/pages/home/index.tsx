import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import {observer} from 'mobx-react';
import type {CompositeScreenProps} from '@react-navigation/native';
import {useStore} from '@/model';
import HomeMenu from './Header';
import HomeBody from './Body';
import {BottomTabParamList} from '@/navigator/BottomTabs';
import {RootStackParamList} from '@/navigator';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {StackScreenProps} from '@react-navigation/stack';
import BPage from '@/components/BPage';
import {BoxShadow} from 'react-native-shadow';
import {Text} from 'react-native-svg';

export type IHomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'Home'>,
  StackScreenProps<RootStackParamList>
>;

const HomeScreen: React.FC<IHomeScreenProps> = ({navigation, route}) => {
  const {homeStore} = useStore();

  useEffect(() => {
    if (!homeStore.categoryList.length) {
      homeStore.fetchCategoryList();
    }
  }, []);

  const goRank = () => navigation.navigate('Rank');
  const goSearch = () => navigation.navigate('Search');
  const goScan = () => navigation.navigate('Scan');

  useEffect(() => {
    if (homeStore.categoryList.length) {
      homeStore.fetchProjectList();
    }
  }, [homeStore.categoryList.length]);

  const shadowOpt = {
    width: 160,
    height: 170,
    color: '#ccc',
    border: 8,
    radius: 3,
    opacity: 0.2,
    x: 1,
    y: 3,
  };

  return (
    <BPage style={styles.page_container} showNavBar={false}>
      <HomeMenu goSearch={goSearch} goRank={goRank} onScan={goScan}/>
      <View style={{flex: 1, marginTop: -10}}>
        <HomeBody />
      </View>
    </BPage>
  );
};

const styles = StyleSheet.create({
  page_container: {
    flex: 1,
  },
});

export default observer(HomeScreen);