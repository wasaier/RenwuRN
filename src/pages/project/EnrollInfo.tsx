import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import type {IProject} from '@/types/Project';

import BText from '@/components/BText';
import BLine from '@/components/BLine';
import {IEnroll} from '@/types/Enroll';
import BEmpty from '@/components/BEmpty';

interface IProps {
  detail: IProject;
  enroll: IEnroll[]
}

const EnrollInfo: React.FC<IProps> = ({ enroll }) => {
  const renderAvatars = () => {
    if (!enroll.length) {
      return <BEmpty showIcon={false} />;
    }
    const list = enroll.map(it => {
      return (
        <View style={styles.item}>
          <Image style={styles.avatar} source={{uri: it.userInfo.avatar}} />
          <BText size="mini">{it.userInfo.nickname}</BText>
        </View>
      );
    });
    return <View style={{padding: 10, flexDirection: 'row'}}>{list}</View>;
  };

  return (
    <View style={{backgroundColor: '#fff', marginTop: 8}}>
      <View style={styles.header}>
        <BText style={{fontSize: 14, fontWeight: '700'}}>投标列表</BText>
      </View>
      <BLine></BLine>
      {renderAvatars()}
    </View>
  );
};

export default EnrollInfo;

const styles = StyleSheet.create({
  header: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  item: {
    marginRight: 16,
    alignItems: 'center',
  },
  avatar: {
    width: 24,
    height: 24,
    marginBottom: 4,
    borderRadius: 12,
    backgroundColor: '#f5f5f5'
  },
});