import { IconShanchu, IconShanchu1, IconShanchu2 } from '@/assets/iconfont';
import BHStack from '@/components/BHStack';
import BText from '@/components/BText';
import Theme from '@/utils/theme';
import React from 'react';
import {View} from 'react-native';
import { styles } from '../common/styles';

const PopularSearch = () => {
  return (
    <View style={{ backgroundColor: Theme.white }}>
      <View style={{ marginLeft: 12 }}>
        <BHStack style={styles.header}>
          <BText>热门搜索</BText>
          <IconShanchu2 />
        </BHStack>
      </View>
      <View style={{ paddingVertical: 6 }}>
        {
          new Array(6).fill(1).map((it) => {
            return <BText style={styles.item}>小程序开发</BText>
          })
        }
      </View>
    </View>
  );
};

export default PopularSearch;