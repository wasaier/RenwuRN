import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {observer} from 'mobx-react';
import type {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabParamList} from '@/navigator/BottomTabs';
import {RootStackParamList} from '@/navigator';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {StackScreenProps} from '@react-navigation/stack';
import {useStore} from '@/model';
import UserBanner from './UserBanner';
import UserAssets from './UserAssets';
import BListItem from '@/components/BListItem';
import {IconSetting} from '@/assets/iconfont';
import LinearGradient from 'react-native-linear-gradient';
import MTouchableOpacity from '@/components/MTouchableOpacity';
import {TopInsertView} from '@/components/BPage/BNavBar';
import BNPage from '@/components/BPage/BNPage';

type IMeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'Me'>,
  StackScreenProps<RootStackParamList>
>;

const HomeScreen: React.FC<IMeScreenProps> = ({navigation, route}) => {
  const {userStore} = useStore();
  const {userInfo, accountInfo} = userStore;
  const goRank = () => navigation.navigate('Login');

  useEffect(() => {
    userStore.fetchAccountInfo();
  }, [userInfo]);

  const renderNavRight = () => {
    return (
      <MTouchableOpacity
        onPress={() => {
          navigation.navigate('Setting');
        }}>
        <IconSetting size={20} />
      </MTouchableOpacity>
    );
  };

  return (
    <BNPage
      style={styles.page_container}
      navBarOptions={{
        title : "",
        navRight: renderNavRight(),
        showBack: false,
        border: false,
        navbarStyle: {
          borderColor: 'transparent'
        },
        containerStyle: {
          position: 'absolute',
          backgroundColor: 'transparent',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2
        }
      }}
      >
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        // colors={['#fbffff', '#fff']}
        colors={['#f0f8fb', '#fff']}
        // colors={['#f0f8fb', '#fff']}
        // colors={['#f4e8f7', '#fff']}
        style={{flex: 1}}>
        <ScrollView style={{backgroundColor: 'transparent'}}>
          <TopInsertView />
          <View style={{position: 'relative', marginTop: 20, height: 190}}>
            {userInfo && <UserBanner userInfo={userInfo} />}
            <UserAssets accountInfo={accountInfo} />
          </View>
          <View style={{  margin: 10, borderRadius: 2}}>
            <BListItem title="我的接单"></BListItem>
            <BListItem title="我的需求"></BListItem>
            <BListItem title="账户设置"></BListItem>
            <BListItem
              title="立即登录"
              border={false}
              onPress={goRank}></BListItem>
          </View>
        </ScrollView>
      </LinearGradient>
    </BNPage>
  );
};

const styles = StyleSheet.create({
  page_container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex_row: {
    flexDirection: 'row',
  },
  flex_column: {
    flexDirection: 'column',
  },
  flex_auto: {
    flex: 1,
  },
});

export default observer(HomeScreen);