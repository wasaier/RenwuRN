import React from 'react';
import {View, Image, StyleSheet, Text, Alert} from 'react-native';
import type {IProject} from '@/types/Project';

import BText from '@/components/BText';
import BLine from '@/components/BLine';
import {IComment} from '@/types/Comment';
import CommentItem from './CommentItem';
import { observer } from 'mobx-react';
import { useStore } from '@/model';
import BEmpty from '@/components/BEmpty';

interface IProps {
  detail: IProject;
  comments: IComment[]
}

const CommentInfo: React.FC<IProps> = ({ comments }) => {
  const { projectStore } = useStore();

  const _handleReply = (data: IComment, parent: IComment) => {
    projectStore.clickCommentItemReplyBtn(data, parent);
  };

  const renderComments = (list: IComment[]) => {
    return list.map((item, index) => {
      return (
        <CommentItem
          comment={item}
          key={`comment_${index}`}
          onClickReply={(v, p) => _handleReply(v, p)}
          showAt={false}
        />
      );
    });
  }

  const _renderCommentList = (list: IComment[]) => {
    if (!list.length) return <BEmpty showIcon={false} />;
    return renderComments(list);
  };

  return (
    <View style={{backgroundColor: '#fff', marginTop: 8}}>
      <View style={styles.header}>
        <BText style={{fontSize: 14, fontWeight: '700'}}>评论列表</BText>
      </View>
      <BLine></BLine>
      {_renderCommentList(comments)}
    </View>
  );
};

export default observer(CommentInfo);

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
  },
});