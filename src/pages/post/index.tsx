import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '@/navigator';

import BPage from '@/components/BPage';
import BText from '@/components/BText';
import BaseInfo from './BaseInfo';
import CommentInfo from './CommentInfo';
import {observer} from 'mobx-react';
import {useStore} from '@/model';
import ReplyBox from './ReplyBox';
import Footer from './Footer';
import {IconEllipsis} from '@/assets/iconfont';
import Loading from '@/components/Loading';

type Props = NativeStackScreenProps<RootStackParamList, 'Post'>;

const PostScreen: React.FC = () => {
  const {feedStore} = useStore();
  const route = useRoute<Props['route']>();
  const itemId = route.params.id;

  const detail = feedStore.detail;
  const comments = feedStore.commentList;

  useEffect(() => {
    feedStore.resetState();
    feedStore.fetchFeedDetail({ itemId });
    feedStore.fetchComments({itemId});
  }, [itemId]);

  const renderTalk = () => {
    if (!feedStore.replyVisible) {
      return <Footer itemId={itemId} />;
    }

    return (
      <ReplyBox
        onBlur={() => {
          // this.setState({
          //   fix_bottom: 0,
          //   commentTalkVisible: false
          // })
        }}
        onSubmit={(content: string) => {
          feedStore.addComment({ content, itemId })
        }}
        onFocus={(keyboardHeight: number) => {
          console.log(keyboardHeight);
        }}
      />
    );
  };

  const renderBody = () => {
    if (!detail) return <Loading />;
    return (
      <>
        <ScrollView>
          <BaseInfo detail={detail} />
          <CommentInfo comments={comments} />
        </ScrollView>
        {renderTalk()}
      </>
    );
  };

  const navRight = (
    <TouchableWithoutFeedback>
      <IconEllipsis />
    </TouchableWithoutFeedback>
  );

  return (
    <BPage title="" showNavBar={true} navRight={navRight}>
      {renderBody()}
    </BPage>
  );
};

export default observer(PostScreen);