// export const h5URL = 'http://192.168.0.101:8082'
// export const h5URL = 'http://renwu.airtlab.com'

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';
import {RootStackNavigation, RootStackParamList} from '../navigator';
import { BottomTabNavigation } from '../navigator/BottomTabs';

// export const h5URL = 'http://192.168.0.103:8080'
export const h5URL = 'http://172.20.56.185:8080';

interface BaseParams {
  navigation: RootStackNavigation | BottomTabNavigation;
  title?: string;
  url?: string;
}

interface H5Params extends BaseParams {
  url: string;
}

export default {
  // 跳转到H5页面
  goH5({navigation, title, url}: H5Params) {
    // navigation.
    // navigation.navigate('H5', {url, title});
  },

  // // 关于我们
  // goAboutUs({ navigation }) {
  //   this.goH5({
  //     navigation,
  //     url: `${h5URL}/about-us`,
  //     title: '关于我们',
  //   })
  // },

  // // 我的项目
  // goMyProject({ navigation }) {
  //   this.goH5({
  //     navigation,
  //     url: `${h5URL}/my-project`,
  //     title: '我的发布',
  //   })
  // },

  // // 需求详情
  // goH5ProjectDetail({ navigation, projectId, title }) {
  //   this.goH5({
  //     navigation,
  //     url: `${h5URL}/project/${projectId}`,
  //     title: title || '需求详情',
  //   })
  // },

  // // 我的接单
  // goMyEnroll({ navigation }) {
  //   this.goH5({
  //     navigation,
  //     url: `${h5URL}/user-enroll-project`,
  //     title: '我的接单',
  //   })
  // },

  // // 发布需求
  // goCreateProject({ navigation }) {
  //   this.goH5({
  //     navigation,
  //     url: `${h5URL}/demand/create`,
  //     title: '发布需求',
  //   })
  // },

  // // 我的资料
  // goMyUserInfo({ navigation }) {
  //   this.goH5({
  //     navigation,
  //     url: `${h5URL}/userInfo`,
  //     title: '我的资料',
  //   })
  // },

  // // 用户介绍
  // goUserProfile({ navigation, userId, title }) {
  //   this.goH5({
  //     navigation,
  //     url: `${h5URL}/userProfile/${userId}`,
  //     title: title || '他的主页',
  //   })
  // },

  // // 积分
  // goMyPoint({ navigation }) {
  //   this.goH5({
  //     navigation,
  //     url: `${h5URL}/point`,
  //     title: '我的积分',
  //   })
  // },

  // // 喜欢
  // goMyLike({ navigation }) {
  //   this.goH5({
  //     navigation,
  //     url: `${h5URL}/collect?typeId=2&objectId=2`,
  //     title: '我的点赞',
  //   })
  // },

  // // 收藏
  // goMyCollect({ navigation }) {
  //   this.goH5({
  //     navigation,
  //     url: `${h5URL}/collect?typeId=1&objectId=2`,
  //     title: '我的点赞',
  //   })
  // },

  // // 关注
  // goMyFollow({ navigation }) {
  //   this.goH5({
  //     navigation,
  //     url: `${h5URL}/follow`,
  //     title: '我的关注',
  //   })
  // },

  // // 聊天
  // goChatItem({ navigation, userId, avatar, nickname, title }) {
  //   this.goH5({
  //     navigation,
  //     url: `${h5URL}/chatItem/${userId}?avatar=${encodeURIComponent(avatar)}&nickname=${nickname}`,
  //     title: title,
  //     nickname: nickname
  //   })
  // },

  // // 系统设置
  // goSetting({ navigation }) {
  //   navigation.push('Setting')
  // },

  // 隐私协议
  goPrivacy({navigation}: H5Params) {
    this.goH5({
      navigation,
      url: `http://renwu.airtlab.com/project/109`,
      title: '隐私协议',
    });
  },

  // 用户协议
  goProtocol({navigation}: H5Params) {
    this.goH5({
      navigation,
      url: `http://renwu.airtlab.com/project/109`,
      title: '用户协议',
    });
  },

  // // 搜索页面
  // goSearch({ navigation }) {
  //   navigation.push('Search');
  // }
};
