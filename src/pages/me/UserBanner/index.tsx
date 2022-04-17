import React from 'react';
import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import {IUser} from '@/types/User';
import avatar from '@/assets/imgs/avatar.png';
import BButton from '@/components/BButton';
import Theme from '@/utils/theme';

const UserBanner: React.FC<{userInfo: IUser}> = ({userInfo}) => {
  const renderAvatar = () => {
    return userInfo.avatar ? (
      <Image style={styles.user_avatar} source={{uri: userInfo.avatar}}></Image>
    ) : (
      <Image style={styles.user_avatar} source={avatar}></Image>
    );
  };

  const renderBtn = () => {
    return (
      <BButton titleStyle={{ color: '#666', fontSize: 12 }} style={styles.check_in_btn} title="立即签到" />
    );
  };

  const loginBtn = (
    <BButton
      title="登录/注册"
      style={styles.check_in_btn}
      onPress={() => {
        Alert.alert('111');
      }}
    />
  );

  const renderMain = () => {
    return (
      <View style={styles.userCard}>
        <View style={[styles.flex, styles.user_card_main]}>
          {renderAvatar()}
          <View style={{flex: 1}}>
            <Text style={{color: '#333', fontWeight: '600', fontSize: 16 }}>
              {userInfo.nickname}
            </Text>
            <Text style={{color: '#333', marginTop: 8, fontSize: 12 }}>{userInfo.email}</Text>
          </View>
          {userInfo.avatar ? renderBtn() : loginBtn}
        </View>
      </View>
    );
  };

  return renderMain();
};

export default UserBanner;

const styles = StyleSheet.create({
  userCard: {
    height: '100%',
    borderRadius: 2,
  },
  user_card_main: {
    position: 'relative',
    display: 'flex',
    height: 80,
    marginTop: 30,
    paddingHorizontal: 16,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  user_avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  check_in_btn: {
    width: 70,
    height: 28,
    borderColor: '#666',
    backgroundColor: '#fff',
  }
});
