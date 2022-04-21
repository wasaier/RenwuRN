import { IconArrowLeft, IconIosArrowDropleftCircle, IconIosArrowRoundBack } from '@/assets/iconfont';
import MTouchableOpacity from '@/components/MTouchableOpacity';
import {IProject} from '@/types/Project';
import {Theme} from '@/utils/theme';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import BPage from '@/components/BPage';
import BText from '@/components/BText';
import {RootStackNavigation} from '@/navigator';
import ProjectAPI from '@/services/project';
import SearchHistory from './widgets/History';
import PopularSearch from './widgets/Popular';

type IProps = {
  navigation: RootStackNavigation;
};

const SearchScreen: React.FC<IProps> = ({navigation}) => {
  const [state, setState] = useState({
    hotList: ['二手笔记本'],
    history: [],
    searchList: [] as IProject[],
    pageSize: 10,
    pageIndex: 1,
  });
  const [formData, setFormData] = useState({
    search: '',
  });

  const getProjectList = (keyword: string) => {
    ProjectAPI.getProjectList({
      pageSize: state.pageSize,
      pageIndex: state.pageIndex,
      keyword,
    }).then((res: any) => {
      setState(prev => ({
        ...prev,
        searchList: res.data.list,
      }));
    });
  };

  useEffect(() => {
    if (formData.search) {
      getProjectList(formData.search);
    }
  }, [formData.search, getProjectList, state]);

  const back = () => {
    navigation.goBack();
  };

  const renderSForm = () => {
    return (
      <View style={styles.formWrapper}>
        <View style={styles.formInner}>
          <TouchableWithoutFeedback onPress={back}>
            <IconIosArrowRoundBack size={30} style={{ marginRight: 10 }} />
          </TouchableWithoutFeedback>
          <TextInput
            autoFocus
            onChangeText={content => {
              setFormData(() => ({search: content}));
            }}
            value={formData.search}
            style={styles.input}
            placeholder="搜索关键词"
          />
        </View>
      </View>
    );
  };

  const list = state.searchList.map(it => {
    return (
      <MTouchableOpacity onPress={() => {
        navigation.navigate('Project', {
          id: it.id
        })
      }}>
        <View style={styles.item}>
          <BText type="second" style={{lineHeight: 40, paddingHorizontal: 10}}>
            {it.title}
          </BText>
        </View>
      </MTouchableOpacity>
    );
  });

  const renderBody = () => {
    if (!formData.search) {
      return (
        <>
          <SearchHistory />
          <View style={{height: 10}}></View>
          <PopularSearch />
        </>
      );
    }
    return list;
  };

  return (
    <BPage title="搜索" showNavBar={false}>
      <View>{renderSForm()}</View>
      <ScrollView>{renderBody()}</ScrollView>
    </BPage>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  formWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.white,
    padding: 10,
    borderBottomColor: Theme.grayBorderColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    flex: 1,
    padding: 0,
    height: 32,
    fontSize: 12,
    paddingHorizontal: 10,
    backgroundColor: Theme.borderColor,
    borderRadius: 2,
  },
  formInner: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  backBtn: {
    marginLeft: 10,
  },
  item: {
    paddingVertical: 0,
    backgroundColor: Theme.white,
    borderBottomColor: Theme.borderColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
