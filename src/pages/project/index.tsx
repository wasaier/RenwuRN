import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../navigator';

import BPage from '../../components/BPage';
import BaseInfo from './BaseInfo';
import DescInfo from './DescInfo';
import EnrollInfo from './EnrollInfo';
import CommentInfo from './CommentInfo';
import {observer} from 'mobx-react';
import {useStore} from '../../model';
import ReplyBox from './ReplyBox';
import ProjectFooter from './Footer';
import {IconEllipsis} from '../../assets/iconfont';
import Loading from '../../components/Loading';
import {Popover} from '@ant-design/react-native';
import {Text} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Project'>;

const ProjectScreen: React.FC = () => {
  const {projectStore} = useStore();
  const route = useRoute<Props['route']>();
  const projectId = route.params.id;

  const detail = projectStore.detail;
  const enroll = projectStore.enrollList;
  const comments = projectStore.commentList;

  useEffect(() => {
    projectStore.resetState();
    projectStore.fetchProjectDetail({projectId});
    projectStore.fetchEnrollList({projectId});
    projectStore.fetchComments({projectId});
  }, [projectId]);

  const renderTalk = () => {
    if (!projectStore.replyVisible) {
      return <ProjectFooter itemId={projectId} />;
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
          if (projectStore.replyComment) {
            projectStore.commentToComment({content, projectId});
          } else {
            projectStore.commentToProject({content, projectId});
          }
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
          <DescInfo detail={detail} />
          <EnrollInfo detail={detail} enroll={enroll} />
          <CommentInfo detail={detail} comments={comments} />
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

  const renderNavRight = () => {
    return (
      <Popover
        placement="bottom"
        overlay={
          <>
            <Popover.Item style={{width: 100}} value={'share'}>
              <Text>分享</Text>
            </Popover.Item>
            <Popover.Item style={{width: 100}} value={'accusation'}>
              <Text>举报</Text>
            </Popover.Item>
            <Popover.Item style={{width: 100}} value={'deFriend'}>
              <Text>拉黑</Text>
            </Popover.Item>
          </>
        }
        styles={{
          arrow: {
            borderTopColor: 'transparent',
          },
        }}>
        {navRight}
      </Popover>
    );
  };

  return (
    <BPage title="" navRight={renderNavRight()}>
      {renderBody()}
    </BPage>
  );
};

export default observer(ProjectScreen);
