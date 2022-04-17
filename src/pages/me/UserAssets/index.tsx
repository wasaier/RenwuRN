import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  IconDiamond,
  IconGuanzhu,
  IconShoucang,
  IconZan,
} from '@/assets/iconfont';
import {IAccountInfo} from '@/types/IAccountInfo';
import {Theme} from '@/utils/theme';

const UserAssets: React.FC<{accountInfo: IAccountInfo}> = ({accountInfo}) => {
  const menus = [
    {
      label: '关注',
      value: accountInfo.followNum,
      icon: <IconGuanzhu size={22} color="#333" />,
      onClick: () => {
        // router.goMyFollow({navigation});
      },
    },
    {
      label: '收藏',
      value: accountInfo.collectNum,
      icon: <IconShoucang size={22} color="#333"  />,
      onClick: () => {
        // router.goMyCollect({navigation});
      },
    },
    {
      label: '点赞',
      value: accountInfo.likeNum,
      icon: <IconZan size={22} color="#333"  />,
      onClick: () => {
        // router.goMyLike({navigation});
      },
    },
    {
      label: '积分',
      value: accountInfo.pointNum,
      icon: <IconDiamond size={22} color="#333"  />,
      onClick: () => {
        // router.goMyPoint({navigation});
      },
    },
  ];

  const renderItem = (menu: {
    label: string;
    value: number;
    icon: React.ReactNode;
    onClick: () => void;
  }, index: number) => {
    return (
      <View style={[styles.flex_auto, { flexDirection: 'row', alignItems: 'center' }]}>
        <View style={{ flex: 1 }}>
          <TouchableWithoutFeedback  onPress={menu.onClick}>
            <View style={styles.menu_item}>
              {menu.icon}
              <Text style={styles.menuText}>
                {menu.label}({menu.value})
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        {
          index !== menus.length - 1 &&
          <View style={{ width: StyleSheet.hairlineWidth, backgroundColor: '#888', height: 12 }}/>
        }
      </View>
    );
  };

  return <View style={[styles.menu, styles.flex]}>{menus.map(renderItem)}</View>;
};

export default UserAssets;

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    // backgroundColor: '#fff',
    borderRadius: 2,
  },
  menu_item: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex_row: {
    flexDirection: 'row',
  },
  flex_column: {
    flexDirection: 'column',
  },
  flex_auto: {
    flex: 1,
  },
  menuText: {
    fontSize: 12,
    marginTop: 6,
    color: '#333'
  },
});
