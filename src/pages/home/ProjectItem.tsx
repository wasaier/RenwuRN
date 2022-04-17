import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Text} from 'react-native-svg';
import {IHomeScreenProps} from '.';
import BText from '@/components/BText';
import {IProject} from '@/types/Project';
import { formatDate } from '@/utils/formatDate';

interface IProps {
  project: IProject;
  index: number;
}

const ProjectItem: React.FC<IProps> = ({project, index}) => {
  const navigation = useNavigation<IHomeScreenProps['navigation']>();
  const goProject = () => {
    navigation.navigate('Project', {id: project.id});
  }
  const { avatar, nickname } = project.userInfo;

  return (
    <TouchableWithoutFeedback onPress={goProject}>
      <View style={[styles.item, { marginTop: 0 }]}>
        <View style={styles.header}>
          <BText>{index + 1}. {project.title}</BText>
          <Text></Text>
        </View>
        <View>
          <View style={styles.row}>
            <BText type="second" size='small'>需求预算：</BText>
            <BText type="second" size='small'>¥{project.reward / 100}</BText>
          </View>
          <View style={styles.row}>
            <BText type="second" size='small'>技能要求：</BText>
            <BText type="second" size='small' numberOfLines={0} style={styles.requires}>
              {project.requires}
            </BText>
          </View>
          <View style={styles.row}>
            <BText type="second" size='small'>发布时间：</BText>
            <BText type="second" size='small'>{formatDate(project.createTime)}</BText>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={[styles.flex, styles.flex_auto]}>
            <Image style={styles.avatar} source={{uri: avatar}} />
            <BText type="second" size='small'>{nickname}</BText>
          </View>
          <View style={styles.flex}>
            <BText type="second" size='small'>{project.enrollList.length}人报名</BText>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProjectItem;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 6,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 2,
    fontSize: 12,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 14,
    marginBottom: 10,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex_auto: {
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
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#f5f5f5',
  },
  requires: {
    overflow: 'hidden',
    flex: 1,
  },
  lh_sm: {
    lineHeight: 18,
  },
});