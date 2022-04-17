import React from 'react';
import {View, StyleSheet} from 'react-native';
import type {IProject} from '../../types/Project';

import BText from '../../components/BText';
import BLine from '../../components/BLine';

const DescInfo: React.FC<{detail: IProject}> = ({detail}) => {
  return (
    <View style={{backgroundColor: '#fff', marginTop: 8}}>
      <View style={styles.header}>
        <BText style={{fontSize: 14, fontWeight: '700'}}>需求描述</BText>
      </View>
      <BLine style={undefined} />
      <View style={{padding: 10}}>
        <BText type="second" style={{}}>
          {detail.description}
        </BText>
      </View>
    </View>
  );
};

export default DescInfo;

const styles = StyleSheet.create({
  header: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
});
