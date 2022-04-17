import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import BPage from '../../../components/BPage';
import BText from '../../../components/BText';

const window = Dimensions.get('window');
const g_width = window.width;
const topBanner = 'https://s1.huishoubao.com/static/m/wxapp/who.png';
const btmBanner = 'https://s1.huishoubao.com/static/m/wxapp/bottom-bg.png'

export default class AboutUs extends React.Component<any, any> {
  render() {
    return (
      <BPage title="关于我们">
        <View style={{display: 'flex', flex: 1}}>
          <ScrollView style={styles.body}>
            <Image style={styles.banner_img} source={{uri: topBanner }} />
            <BText size='small' type='gray' style={styles.text}>
              我们的主要建立用户对用户之间的桥梁，目标是构建具有高度锲约的信用社区，让尽可能多的人参与进来。我们会选择信用评定委员会，对不遵守锲约的用户进行惩罚，保证社区的稳健运行。唯一提升信用值的做法就是帮助别人，我们真诚的希望你能够加入进来，一起守卫社区。
            </BText>
          </ScrollView>
          <Image style={styles.btm_img} source={{ uri: btmBanner }} />
        </View>
      </BPage>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    position: 'relative',
    flex: 1,
  },
  banner_img: {
    width: g_width - 24,
    height: 120,
    marginHorizontal: 12,
    marginTop: 12,
  },
  text: {
    lineHeight: 20,
    marginTop: 12,
    marginHorizontal: 12,
    textAlign: 'justify',
  },
  btm_img: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: g_width,
    height: 62,
  },
  navigationBarStyle: {
    color: '#333',
    backgroundColor: '#fff',
  },
});
