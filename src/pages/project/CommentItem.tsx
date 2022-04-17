import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {IComment} from '../../types/Comment';
import {IUser} from '../../types/User';
import { formatDate } from '../../utils/formatDate';

const gray_color = '#222';
const active_color = '#03a9f4';

const CommentItem: React.FC<{
  parent?: IComment;
  comment: IComment;
  talker?: IUser;
  showAt?: boolean;
  onClickReply?: (data: IComment, parent?: IComment) => void;
}> = ({comment, showAt, onClickReply, parent }) => {
  const item = comment;
  const author = comment.userInfo;

  const handleReply = () => onClickReply?.(comment, parent);

  if (!author) return null;

  return (
    <View style={styles.comment_item}>
      <View style={styles.comment_header}>
        <Image style={styles.comment_avatar} source={{uri: author.avatar}} />
        <View style={{ flex: 1 }}>
          <Text>{author.nickname || author.mobile}</Text>
          <Text style={[styles.gray_color, {marginTop: 8, fontSize: 12}]}>
            {formatDate(item.createTime)}
          </Text>
        </View>
        <TouchableWithoutFeedback onPress={handleReply}>
          <Text>回复</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.comment_body}>
        <Text style={[styles.comment_content, styles.gray_color]}>
          {showAt ? (
            <Text style={{}}>
              <Text>回复@</Text>
              <Text style={styles.active_color}>XX</Text>
              <Text>&nbsp;&nbsp;</Text>
            </Text>
          ) : null}
          <Text>{item.content}</Text>
        </Text>
      </View>
      <View style={styles.child_comment}>
        {comment.children?.map(it => {
          return (
            <CommentItem
              parent={comment}
              comment={it}
              showAt={true}
              onClickReply={onClickReply}
            />
          );
        })}
      </View>
    </View>
  );
};

export default CommentItem;

const styles = StyleSheet.create({
  gray_color: {
    color: gray_color,
  },
  active_color: {
    color: active_color,
  },
  // 评论模块
  comment_item: {
    position: 'relative',
    backgroundColor: '#fff',
  },
  comment_header: {
    position: 'relative',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderColor: '#f5f5f5',
  },
  comment_body: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 50,
    paddingTop: 6,
    paddingBottom: 16,
    borderColor: '#f5f5f5',
    borderBottomWidth: 0.5,
  },
  comment_content: {
    // backgroundColor: 'red'
  },
  replyBtn: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  comment_avatar: {
    width: 24,
    height: 24,
    borderRadius: 4,
    marginRight: 8,
    backgroundColor: '#f5f5f5'
  },
  child_comment: {
    paddingLeft: 30,
  },
  talker_name: {
    marginRight: 20,
    color: gray_color,
  },
});