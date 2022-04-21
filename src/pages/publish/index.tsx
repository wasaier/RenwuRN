import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RootStackNavigation} from '@/navigator';
import PublishTopic, { IPublishTopicRef } from './PublishTopic';
import BNPage from '@/components/BPage/BNPage';
import BText from '@/components/BText';
import {IconIosArrowRoundBack} from '@/assets/iconfont';
import BHStack from '@/components/BHStack';
import MTouchableOpacity from '@/components/MTouchableOpacity';
import { Button } from 'native-base';
import { IDemandData, PublishContext } from './context';

type IProps = {
  navigation: RootStackNavigation;
};

const PublishScreen: React.FC<IProps> = ({ navigation }) => {
  const goBack = () => navigation.goBack();
  const dRef = React.useRef<IPublishTopicRef>(null);

  const [state, setState] = useState({
    disabled1: true,
    disabled2: true,
    tabIndex: 0,
  });

  const setIndex = (index: number) => {
    setState(prev => ({ ...prev, tabIndex: index }))
  }

  const [demand, setDemand] = useState<IDemandData>({
    title: '',
    content: '',
    pics: []
  })

  const sbmBtn = (
    <Button variant="ghost" onPress={() => {
      dRef.current?.submit()
    }}>
      <BText>发布</BText>
    </Button>
  )

  const renderTitle = () => {
    return (
      <View style={styles.header}>
        <IconIosArrowRoundBack
          color={'#333'}
          style={{marginLeft: 10}}
          onPress={goBack}
          size={30}
        />
        <View style={{flex: 1, flexDirection: 'row', height: '100%', justifyContent: 'center'}}>
          <BHStack style={{ height: '100%'}}>
            <MTouchableOpacity onPress={() => setIndex(0)}>
              <BHStack style={{position: 'relative', alignItems: 'center', height: 40 }}>
                <BText>需求</BText>
                {state.tabIndex === 0 && <View style={styles.line}></View>}
              </BHStack>
            </MTouchableOpacity>
            <View style={{ width: 30 }}></View>
            <MTouchableOpacity onPress={() => setIndex(1)}>
              <BHStack style={{position: 'relative', alignItems: 'center', height: 40 }}>
                <BText style={{textAlign: 'center'}}>帖子</BText>
                {state.tabIndex === 1 && <View style={styles.line}></View>}
              </BHStack>
            </MTouchableOpacity>
          </BHStack>
        </View>
        {sbmBtn}
      </View>
    );
  };

  return (
    <PublishContext.Provider value={{
      ...state,
      demand,
      setIndex,
      setDemand: (data) => {
        setDemand(data)
      }
    }}>
      <BNPage
        navBarOptions={{
          showNavBar: false,
          showBack: false,
        }}
        style={styles.screen}>
        {renderTitle()}
        <PublishTopic ref={dRef} />
      </BNPage>
    </PublishContext.Provider>
  )
}

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
  }
});
