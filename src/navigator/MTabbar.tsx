import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {IconAddSquare} from '../assets/iconfont';
import { isIphoneX } from '../utils/screen';
import { useStore } from '../model';
import Theme from '../utils/theme';

const activeColor = '#333';

export function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const { publishStore } = useStore();
  const renderList = () => {
    return state.routes.map((route, index) => {
      const {options} = descriptors[route.key];
      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });
        if (!isFocused && !event.defaultPrevented) {
          // The `merge: true` option makes sure that the params inside the tab screen are preserved
          /*@ts-ignore*/
          navigation.navigate({name: route.name, merge: true});
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      return (
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityState={isFocused ? {selected: true} : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={styles.item}>
          {options.tabBarIcon?.({
            focused: isFocused,
            color: isFocused ? activeColor : '#888',
            size: 20,
          })}
          <Text
            style={{
              marginTop: 4,
              fontSize: 12,
              color: isFocused ? activeColor : '#888',
            }}>
            {label}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  const list = renderList();

  list.splice(
    2,
    0,
    <TouchableOpacity style={styles.item} onPress={() => {
      // publishStore.setModal(true);
      navigation.navigate('PublishModal')
    }}>
      <IconAddSquare size={40} color={'#333'} />
    </TouchableOpacity>,
  );

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopColor: '#eee',
        borderTopWidth: 1,
      }}>
      {list}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 50,
    paddingTop: 4,
    marginBottom: isIphoneX() ? 26 : 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
