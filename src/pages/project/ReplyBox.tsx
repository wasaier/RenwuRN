import {observer} from 'mobx-react';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {useStore} from '@/model';

interface IProps {
  onBlur: () => void;
  onSubmit: (content: string) => void;
  onFocus: (keyboardHeight: number) => void;
}

const ReplyBox: React.FC<IProps> = ({onFocus, onBlur, onSubmit}) => {
  const {projectStore} = useStore();
  const {replyComment} = projectStore;
  const [state, setState] = useState({
    content: '',
  });

  const handleFocus = () => {
    onFocus && onFocus(366);
  };

  const handleBlur = () => {
    projectStore.setReplyComment(null);
    projectStore.setReplyVisible(false);
  };

  const handleSubmit = () => {
    if (state.content) {
      onSubmit?.(state.content);
    }
  };

  const renderUser = () => {
    if (!replyComment) return null;
    return (
      <Text style={{marginRight: 6}}>@{replyComment.userInfo.nickname}</Text>
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.input_wrapper}>
        {renderUser()}
        <TextInput
          style={styles.input}
          onChangeText={content => setState({content})}
          value={state.content}
          placeholder="写评论..."
          onFocus={handleFocus}
          autoFocus={true}
          onBlur={handleBlur}
        />
      </View>
      <Text style={styles.submit_btn} onPress={handleSubmit}>
        发送
      </Text>
      <Text style={styles.submit_btn} onPress={handleBlur}>
        取消
      </Text>
    </View>
  );
};

export default observer(ReplyBox);

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    paddingBottom: 30,
    backgroundColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
  },
  input_wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  submit_btn: {
    marginLeft: 8,
  },
  input: {
    height: 24,
  },
});
