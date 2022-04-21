import React, {useState} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import BPage from '../../components/BPage';
import BText from '../../components/BText';
import { RootStackNavigation } from '../../navigator';
import ProjectAPI from '../../services/project';

type IProps = {
  navigation: RootStackNavigation
}

const SearchScreen: React.FC<IProps> = ({ navigation }) => {
  const [state, setState] = useState({
    hotList: ['二手笔记本'],
    history: [],
    search: '',
    searchList: [],
    pageSize: 10,
    pageIndex: 1,
  });

  const getProjectList = () => {
    ProjectAPI.getProjectList({
      pageSize: state.pageSize,
      pageIndex: state.pageIndex,
      keyword: state.search,
    }).then((res: any) => {
      setState(prev => ({
        ...prev,
        searchList: res.data.list,
      }));
    });
  };

  const back = () => {
    navigation.goBack()
  }

  const updateSearch = (search: string) => {};

  const renderSForm = () => {
    return (
      <View style={styles.formWrapper}>
        <View style={styles.formInner}>
          <TextInput autoFocus style={styles.input} placeholder='搜索关键词' />
          <TouchableWithoutFeedback onPress={back}>
            <BText type='info' style={styles.backBtn}>取消</BText>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  };

  return (
    <BPage title="搜索" showNavBar={false}>
      <View>{renderSForm()}</View>
      <ScrollView>
        
      </ScrollView>
    </BPage>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  formWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 0,
    height: 32,
    fontSize: 12,
    paddingHorizontal: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 2
  },
  formInner: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  backBtn: {
    marginLeft: 10
  }
});
