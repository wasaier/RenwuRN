import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import BPage from '../../components/BPage';
import BText from '../../components/BText';
import Loading from '../../components/Loading';
import {RootStackNavigation} from '../../navigator';
import RankAPI from '../../services/rank';
import {IUser} from '../../types/User';

type IProps = {
  navigation: RootStackNavigation;
};

const RankScreen: React.FC<IProps> = ({navigation}) => {
  const [state, setState] = useState({
    loading: true,
    list: [] as IUser[],
  });

  useEffect(() => {
    RankAPI.getRankList()
      .then(res => {
        if (res.retCode === '0') {
          setState(prev => ({
            ...prev,
            list: res.data.list,
          }));
        }
      })
      .finally(() => {
        setState(prev => ({...prev, loading: false}));
      });
  }, []);

  const renderItem = (it: IUser, index: number) => {
    return (
      <View key={it.id} style={styles.item}>
        <View style={styles.header}>
          <Text style={{fontStyle: 'italic', fontSize: 14}}>{index + 1}</Text>
        </View>
        <View style={styles.main}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Image source={{uri: it.avatar}} style={styles.avatar} />
          </TouchableWithoutFeedback>
          <View style={{display: 'flex', flex: 1}}>
            <Text numberOfLines={0} style={{fontSize: 16}}>
              {it.nickname}
            </Text>
            <BText
              type="gray"
              numberOfLines={0}
              style={{lineHeight: 18, marginTop: 6}}>
              {it.words || '这个人很懒什么也没说'}
            </BText>
            <BText type="gray" style={{marginTop: 2}}>
              成就：{it.nickname}
            </BText>
          </View>
          <TouchableHighlight style={{marginRight: 10}}>
            <View style={styles.askButton}>
              <TouchableWithoutFeedback onPress={() => {}}>
                <BText type="gray" size='small'>向他咨询</BText>
              </TouchableWithoutFeedback>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  const renderBody = () => {
    if (state.loading) {
      return <Loading />;
    }
    return <ScrollView>{state.list.map(renderItem)}</ScrollView>;
  };

  return <BPage title={'牛人榜'}>{renderBody()}</BPage>;
};

export default RankScreen;

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  header: {
    marginHorizontal: 10,
    width: 26,
    height: 26,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#faebd7',
    borderRadius: 4,
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
    marginRight: 10,
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingBottom: 8,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ccc'
  },
  askButton: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderColor: '#ddd',
    borderRadius: 2,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
