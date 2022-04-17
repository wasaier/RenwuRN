import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import type {IProject} from '../../types/Project';

import BText from '../../components/BText';
import BRow from '../../components/BRow';
import { formatDate } from '../../utils/formatDate';

const BaseInfo: React.FC<{detail: IProject}> = ({detail}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {detail.title}
      </Text>
      <BRow label="需求预算" value={'¥' + detail.reward / 100}></BRow>
      <BRow label="技能要求" value={detail.requires}></BRow>
      <BRow label="发布日期" value={formatDate(detail.createTime)}></BRow>
      <View style={styles.footer}>
        <View style={[styles.flex, styles.auto]}>
          <Image
            style={styles.avatar}
            source={{uri: detail.userInfo.avatar}}></Image>
          <BText type="gray">{detail.userInfo.nickname}</BText>
        </View>
        <View style={styles.flex}>
          <BText type="gray">0人报名</BText>
        </View>
      </View>
    </View>
  );
};

export default BaseInfo;

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    color: '#000',
    lineHeight: 50,
    fontWeight: '600',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  auto: {
    flex: 1,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
    backgroundColor: '#f5f5f5'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#f5f5f5',
  },
});
