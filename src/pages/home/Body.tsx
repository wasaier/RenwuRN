import {observer} from 'mobx-react';
import React from 'react';
import {Text, View, StyleSheet, useWindowDimensions} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import {useStore} from '@/model';
import theme from '@/utils/theme';
import ProjectList from './ProjectList';

const HomeBody: React.FC = () => {
  const {homeStore} = useStore();
  const layout = useWindowDimensions();
  const routes = homeStore.categoryList.map(el => {
    return {key: `${el.id}`, title: el.name};
  });

  const renderTabBar = (props: any) => {
    const renderLabel = ({route, focused, color}: any) => (
      <View style={{position: 'relative' }}>
        {
          focused ? (
            <View style={{ position: 'relative' }}>
              {/* <View style={{ transform: [{ scale: 1.3 }], borderRadius: 10, width: '100%', height: '100%', position: 'absolute', backgroundColor: theme.brandColor }} />  */}
              <Text style={{ color }}>{route.title}</Text>
            </View>
          ) : (
            <Text style={{ color }}>{route.title}</Text>
          )
        }
        {/* {focused ? <View style={style.line} /> : null} */}
      </View>
    );
    return (
      <TabBar
        {...props}
        scrollEnabled
        indicatorStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: '#fff' }}
        contentContainerStyle={{ backgroundColor: '#fff' }}
        tabStyle={{width: 'auto', backgroundColor: '#fff'}}
        activeColor="#000"
        inactiveColor={theme.textSecondColor}
        renderLabel={renderLabel}
      />
    );
  };

  const renderScene = ({
    route,
  }: {
    route: {
      key: string;
    };
  }) => {
    return (
      <ProjectList categoryId={route.key} projectList={homeStore.projectList} />
    );
  };

  return routes.length ? (
    <TabView
      lazy={true}
      renderTabBar={renderTabBar}
      navigationState={{index: homeStore.categoryIndex, routes: routes}}
      renderScene={renderScene}
      onIndexChange={index => homeStore.setCategoryIndex(index)}
      initialLayout={{width: layout.width}}
    />
  ) : null;
};

const style = StyleSheet.create({
  line: {
    position: 'absolute',
    width: 20,
    height: 2,
    borderRadius: 4,
    left: '50%',
    bottom: -16,
    marginLeft: -10,
    backgroundColor: '#222',
  },
});

export default observer(HomeBody);
