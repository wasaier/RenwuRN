import React, {useEffect, useState} from 'react';
import {RefreshControl, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import BEmpty from '@/components/BEmpty';
import ProjectAPI from '@/services/project';
import {IProject} from '@/types/Project';
import Theme from '@/utils/theme';
import ProjectItem from './ProjectItem';

interface IProps {
  projectList: IProject[];
  categoryId: string;
}

const ProjectList = ({categoryId}: IProps) => {
  const [projectList, setList] = useState([] as IProject[]);
  const [refreshing, setRefreshing] = useState(false);
  const [state, setState] = useState({
    hasMore: true,
    pageIndex: 1,
  });

  const fetchData = async () => {
    if (refreshing) return;

    try {
      setRefreshing(true);
      const res = await ProjectAPI.getProjectList({
        pageIndex: 1,
        pageSize: 10,
        appTypeId: categoryId,
      });
      if (res.retCode === '0') {
        setList(res.data.list);
        setState(prev => ({
          ...prev,
          pageIndex: 1,
          hasMore: res.data.pageInfo.total! <= res.data.list.length,
        }));
      }
    } catch (e) {
      console.error(e);
    }

    setRefreshing(false);
  };

  const loadMore = async () => {
    if (refreshing) {
      return;
    }

    setRefreshing(true);
    try {
      const res = await ProjectAPI.getProjectList({
        pageIndex: state.pageIndex + 1,
        pageSize: 10,
        appTypeId: categoryId,
      });
      if (res.retCode === '0') {
        setList(prev => [...prev, ...res.data.list]);
        setState(prev => ({
          ...prev,
          pageIndex: state.pageIndex + 1,
          hasMore: res.data.pageInfo.total <= res.data.list.length,
        }));
      }
    } catch (e) {
      console.error(e);
    }

    setRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = () => {
    fetchData();
  };

  const onMomentumScrollEnd = (e: any) => {
    // 滑动距离
    let offsetY = e.nativeEvent.contentOffset.y;
    // scrollView contentSize 高度
    let contentSizeHeight = e.nativeEvent.contentSize.height;
    // scrollView高度
    let scrollHeight = e.nativeEvent.layoutMeasurement.height;
    if (offsetY + scrollHeight + 40 >= contentSizeHeight) {
      // 在这里面加入你需要指行得方法和加载数据
      loadMore();
    } else if (offsetY + scrollHeight <= 1) {
      // 这个是没有数据了然后给了false  得时候还在往上拉
    } else if (offsetY === 0) {
      // 这个地方是下拉刷新，意思是到顶了还在指行，可以在这个地方进行处理需要刷新得数据
    }
  };

  const refreshControl = (
    <RefreshControl refreshing={refreshing} tintColor={Theme.indictorColor} onRefresh={onRefresh} />
  );

  const renderList = () => {
    if (projectList.length) {
      return (
        <View style={{paddingTop: 10}}>
          {projectList.map((it, index) => {
            return <ProjectItem key={index} index={index} project={it} />;
          })}
        </View>
      );
    }
    if (!refreshing) return <BEmpty />;
  };

  return (
    <ScrollView
      style={{flex: 1}}
      refreshControl={refreshControl}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{flexGrow: 1}}
      onMomentumScrollEnd={onMomentumScrollEnd}
      scrollEventThrottle={10}>
      {renderList()}
    </ScrollView>
  );
};

export default ProjectList;
