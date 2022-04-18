import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IconGuanzhu, IconLabaY, IconMessage, IconNoticeO, IconTongzhiY, IconUser, IconXiaoxiY } from '@/assets/iconfont';
import BHStack from '@/components/BHStack';
import BPage from '@/components/BPage';
import BText from '@/components/BText';
import BVStack from '@/components/BVStack';
import theme, { Theme } from '@/utils/theme';

export default class ChatScreen extends React.Component {
  render() {
    return (
      <BPage title="消息" showBack={false} style={{flex: 1}}>
        <ScrollView style={{ backgroundColor: '#fff' }}>
          <BHStack style={{ marginTop: 20 }}>
            <BVStack style={styles.grid}>
              <IconGuanzhu size={30} color={theme.mainColor}/>
              <BText size='small'  style={styles.text}>赞和收藏</BText>
            </BVStack>
            <BVStack style={styles.grid}>
              <IconUser size={30} color={theme.mainColor} />
              <BText size='small'  style={styles.text}>新增关注</BText>
            </BVStack>
            <BVStack style={styles.grid}>
              <IconMessage size={30} color={theme.mainColor} />
              <BText size='small' style={styles.text}>评论和@</BText>
            </BVStack>
          </BHStack>
          <View style={{ marginTop: 20 }}>
            <BHStack>
              <View style={styles.avatarBox}>
                <IconLabaY size={32}/>
              </View>
              <BVStack style={{ flex: 1, marginTop: 20, marginLeft: 8 }}>
                <BText>消息通知</BText>
                <BText size='small' type='gray'>暂时没有新的消息通知～</BText>
              </BVStack>
            </BHStack>
            <BHStack>
              <View style={styles.avatarBox}>
                <IconTongzhiY size={32}/>
              </View>
              <BVStack style={{ flex: 1, marginTop: 20, marginLeft: 8 }}>
                <BText>消息通知</BText>
                <BText size='small' type='gray'>暂时没有新的消息通知～</BText>
              </BVStack>
            </BHStack>
            <BHStack>
              <View style={styles.avatarBox}>
                <IconXiaoxiY size={30} />
              </View>
              <BVStack style={{ flex: 1, marginTop: 20, marginLeft: 8 }}>
                <BText>消息通知</BText>
                <BText size='small' type='gray'>暂时没有新的消息通知～</BText>
              </BVStack>
            </BHStack>
          </View>
        </ScrollView>
      </BPage>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    marginTop: 4
  },
  grid: {
    flex: 1,
    alignItems: 'center'
  },
  avatarBox: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 23,
    marginLeft: 20,
    marginTop: 20,
  }
})