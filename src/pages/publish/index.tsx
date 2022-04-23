import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {RootStackNavigation} from '@/navigator';
import BNPage from '@/components/BPage/BNPage';
import BText from '@/components/BText';
import {IconIosArrowRoundBack} from '@/assets/iconfont';
import BHStack from '@/components/BHStack';
import MTouchableOpacity from '@/components/MTouchableOpacity';
import {Button} from 'native-base';
import {IDemandData, IPostData, PublishContext} from './utils/context';
import {Toast} from '@ant-design/react-native';
import FeedAPI from '@/services/feed';
import PostForm, {IPostFormRef} from './components/PostForm';
import DemandForm, {IDemandFormRef} from './components/DemandForm';
import ProjectAPI from '@/services/project';

type IProps = {
  navigation: RootStackNavigation;
};

const PublishScreen: React.FC<IProps> = ({navigation}) => {
  const goBack = () => navigation.goBack();
  const demandRef = React.useRef<IDemandFormRef>(null);
  const postRef = React.useRef<IPostFormRef>(null);

  const [index, setIndex] = useState(0);
  const [postData, setPostData] = useState<IPostData>({
    title: '',
    content: '',
    pics: [],
  });
  const [demand, setDemand] = useState<IDemandData>({
    title: '',
    description: '',
    requires: '',
    reward: '',
    appType: 'H5应用',
    appTypeId: 1,
    projectType: '项目',
    projectTypeId: 1,
    city: ''
  });

  const submitDemand = async () => {
    const s = Toast.loading({
      content: '加载中',
      duration: 0,
    });
    try {
      if (index === 0) {
        const params = await postRef.current?.getParams();
        const r = await FeedAPI.addFeed({
          ...params,
          pics: params?.pics!.join(','),
        });
        if (r.errCode === '0') {
          Toast.remove(s);
          Toast.success({content: '操作成功'});
          goBack();
        } else {
          throw new Error(r.errMsg);
        }
      } else {
        const params = await demandRef.current?.getParams();
        const r = await ProjectAPI.createProject(params!);
        if (r.errCode === '0') {
          Toast.remove(s);
          Toast.success({content: '操作成功'});
          goBack();
        } else {
          throw new Error(r.errMsg);
        }
      }
    } catch (e) {
      Toast.remove(s);
      Toast.fail({content: JSON.stringify(e)});
    }
  };

  const renderSubmitBtn = () => {
    if (index === 0) {
      return (
        <Button
          width={60}
          variant="ghost"
          disabled={!(postData.title && postData.content)}
          onPress={submitDemand}>
          <BText>发布</BText>
        </Button>
      );
    }
    return (
      <Button
        width={60}
        variant="ghost"
        disabled={!(demand.title && demand.description && demand.requires && demand.reward)}
        onPress={submitDemand}>
        <BText>发布</BText>
      </Button>
    );
  };

  const renderTitle = () => {
    const menus = [{name: '帖子'}, {name: '需求'}].map((it, i) => {
      return (
        <>
          <MTouchableOpacity onPress={() => setIndex(i)}>
            <BHStack style={styles.box}>
              <BText>{it.name}</BText>
              {index === i && <View style={styles.line}></View>}
            </BHStack>
          </MTouchableOpacity>
          {i === 0 && <View style={{width: 20}}></View>}
        </>
      );
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
          <BHStack>{menus}</BHStack>
        </View>
        {renderSubmitBtn()}
      </View>
    );
  };

  const renderForms = () => {
    return index === 1 ? (
      <DemandForm ref={demandRef} />
    ) : (
      <PostForm ref={postRef} />
    );
  };

  return (
    <PublishContext.Provider
      value={{
        tabIndex: index,
        demand,
        setIndex,
        setDemand,
        postData,
        setPostData,
      }}>
      <BNPage
        navBarOptions={{showNavBar: false, showBack: false}}
        style={styles.screen}>
        {renderTitle()}
        {renderForms()}
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
  },
});