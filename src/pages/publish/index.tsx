import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {RootStackNavigation} from '@/navigator';
import BNPage from '@/components/BPage/BNPage';
import BText from '@/components/BText';
import {IconIosArrowRoundBack} from '@/assets/iconfont';
import BHStack from '@/components/BHStack';
import MTouchableOpacity from '@/components/MTouchableOpacity';
import {Button} from 'native-base';
import {IDemandData, PublishContext} from './utils/context';
import { Toast } from '@ant-design/react-native';
import FeedAPI from '@/services/feed';
import DemandForm, { IDemandFormRef } from './components/DemandForm';

type IProps = {
  navigation: RootStackNavigation;
};

const PublishScreen: React.FC<IProps> = ({navigation}) => {
  const goBack = () => navigation.goBack();
  const dRef = React.useRef<IDemandFormRef>(null);

  const [state, setState] = useState({
    disabled1: true,
    disabled2: true,
    tabIndex: 0,
  });

  const setIndex = (index: number) => {
    setState(prev => ({...prev, tabIndex: index}));
  };

  const [demand, setDemand] = useState<IDemandData>({
    title: '',
    content: '',
    pics: [],
  });

  const clearForm = () => {
    setDemand({
      title: '',
      content: '',
      pics: [],
    });
    dRef.current?.clearPics();
  };

  const submitDemand = async () => {
    const s = Toast.loading({
      content: '加载中',
      duration: 0
    });
    try {
      const params = await dRef.current?.getParams();
      const r = await FeedAPI.addFeed({
        ...params,
        pics: params?.pics!.join(',')
      });
      if (r.errCode === '0') {
        clearForm();
        Toast.remove(s);
        Toast.success({ content: '操作成功' })
        goBack();
      } else {
        throw new Error(r.errMsg);
      }
    } catch (e) {
      Toast.remove(s);
      Toast.fail({ content: JSON.stringify(e) })
    }
  }

  const renderSubmitBtn = () => {
    if (state.tabIndex === 0) {
      return (
        <Button variant="ghost" disabled={!demand.title || !demand.content} onPress={submitDemand}>
          <BText>发布</BText>
        </Button>
      )
    }
    return (
      <Button variant="ghost" disabled={!demand.title || !demand.content} onPress={submitDemand}>
        <BText>发布</BText>
      </Button>
    )
  }

  const renderTitle = () => {
    const menus = [
      { name: '需求' },
      { name: '帖子' }
    ].map((it, index) => {
      return (
        <>
          <MTouchableOpacity onPress={() => setIndex(index)}>
            <BHStack style={styles.box}>
              <BText>{it.name}</BText>
              {state.tabIndex === index && <View style={styles.line}></View>}
            </BHStack>
          </MTouchableOpacity>
          {index === 0 && <View style={{width: 30}}></View>}
        </>
      )
    });

    return (
      <View style={styles.header}>
        <IconIosArrowRoundBack
          color={'#333'}
          style={{marginLeft: 10}}
          onPress={goBack}
          size={30}
        />
        <View style={styles.headerCenter}>
          <BHStack>{ menus }</BHStack>
        </View>
        {renderSubmitBtn()}
      </View>
    );
  };

  return (
    <PublishContext.Provider
      value={{
        ...state,
        demand,
        setIndex,
        setDemand: data => {
          setDemand(data);
        },
      }}>
      <BNPage
        navBarOptions={{showNavBar: false, showBack: false}}
        style={styles.screen}>
        {renderTitle()}
        <DemandForm ref={dRef} />
      </BNPage>
    </PublishContext.Provider>
  );
};

export default PublishScreen;

const styles = StyleSheet.create({
  screen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  line: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#333',
    justifyContent: 'center',
    transform: [{scaleX: 0.6}],
  },
  header: {
    height: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 6,
  },
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box: {
    position: 'relative',
    alignItems: 'center',
    height: 40,
  }
});
