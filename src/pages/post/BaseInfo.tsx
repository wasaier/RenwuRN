import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import BText from '@/components/BText';
import {IFeed} from '@/types/IFeed';
import { formatDate } from '@/utils/formatDate';

const BaseInfo: React.FC<{detail: IFeed}> = ({detail}) => {
  const pics = (detail.pics || '').split(',');
  return (
    <>
      <Image
        style={{width: '100%', height: 260 }}
        source={{uri: pics[0] || ''}}
      />
      <View style={styles.card}>
        <Text style={styles.title}>{detail.title}</Text>
        <Text style={styles.content}>{detail.content}</Text>
        <View style={styles.footer}>
          <View style={[styles.flex, styles.auto]}>
            <Image
              style={styles.avatar}
              source={{uri: detail.userInfo.avatar}}></Image>
            <BText type="gray">{detail.userInfo.nickname}</BText>
          </View>
          <View style={styles.flex}>
            <BText type="gray">{formatDate(detail.createTime)}</BText>
          </View>
        </View>
      </View>
    </>
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
  content: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
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
