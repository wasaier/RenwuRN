import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  IconGuanzhu,
  IconGuanzhuO,
  IconMessageO,
  IconShoucang,
  IconShoucangO,
  IconZan,
  IconZanO,
} from '@/assets/iconfont';
import BText from '@/components/BText';
import {useStore} from '@/model';
import CollectAPI, {ObjectTypes} from '@/services/collect';
import {CollectTypes} from '@/services/project';
import { isIphoneX } from '@/utils/screen';
import {Theme} from '@/utils/theme';

interface IProps {
  itemId: number;
}

const ProjectFooter: React.FC<IProps> = ({itemId}) => {
  const {projectStore} = useStore();
  const [state, setState] = useState({
    isCollect: false,
    isLike: false,
  });

  const queryCollectState = () => {
    CollectAPI.queryStatus({
      itemId,
      typeId: CollectTypes.collect,
      objectId: ObjectTypes.project,
    }).then(res => {
      if (res.retCode === '0') {
        setState(prev => ({...prev, isCollect: res.data.status === 1}));
      }
    });
  };

  const queryLikeState = () => {
    CollectAPI.queryStatus({
      itemId,
      typeId: CollectTypes.like,
      objectId: ObjectTypes.project,
    }).then(res => {
      if (res.retCode === '0') {
        setState(prev => ({...prev, isLike: res.data.status === 1}));
      }
    });
  };

  const handleReply = () => projectStore.clickFooterReplyBtn();

  const handleCollect = () => {
    CollectAPI.addCollect({
      itemId,
      typeId: CollectTypes.collect,
      objectId: ObjectTypes.project,
    }).then(res => {
      queryCollectState();
    });
  };

  const handleLike = () => {
    CollectAPI.addCollect({
      itemId,
      typeId: CollectTypes.like,
      objectId: ObjectTypes.project,
    }).then(res => {
      queryLikeState();
    });
  };

  useEffect(() => {
    queryCollectState();
    queryLikeState();
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.left}>
        <TouchableWithoutFeedback onPress={handleCollect}>
          <View style={{alignItems: 'center', marginRight: 18}}>
            {state.isCollect ? (
              <IconShoucang size={20} />
            ) : (
              <IconShoucangO size={20} />
            )}
            <BText size="small">收藏</BText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleLike}>
          <View style={{alignItems: 'center', marginRight: 18}}>
            {state.isLike ? <IconZan size={20} /> : <IconZanO size={20} />}
            <BText size="small">点赞</BText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleReply}>
          <View style={{alignItems: 'center'}}>
            <IconMessageO size={20} />
            <BText size="small">评论</BText>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.right}>
        <TouchableWithoutFeedback style={styles.submitBtn}>
          <Text style={styles.btnText}>立即取消</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={styles.submitBtn}>
          <Text style={styles.btnText}>提交任务</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default observer(ProjectFooter);

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    paddingBottom: isIphoneX() ? 26 : 6,
    backgroundColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
  },
  left: {
    flex: 1,
    flexDirection: 'row',
  },
  right: {
    flexDirection: 'row',
  },
  submitBtn: {
    marginLeft: 8,
    borderRadius: 14,
    paddingHorizontal: 10,
    backgroundColor: Theme.primaryColor,
  },
  btnText: {
    color: '#fff',
    height: 28,
    lineHeight: 28,
    fontSize: 12,
  },
});