import * as React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import BHStack from '@/components/BHStack';
import BText from '@/components/BText';
import {IFeed} from '@/types/IFeed';

const window = Dimensions.get('window');
const space = 6;
const width = (window.width - space * 3) / 2;

interface IProps {it: IFeed, toDetail: ({ id }: { id: number }) => void }

const FeedItem: React.FC<IProps> = ({it, toDetail}) => {
  const pics = it.pics.split(',');
  const {userInfo} = it;
  return (
    <TouchableWithoutFeedback onPress={() => toDetail({ id: it.id })}>
      <View style={styles.item}>
        <Image style={styles.image} source={{uri: pics[0]}} />
        <View style={styles.titleBox}>
          <Text numberOfLines={2} style={styles.title}>{it.title}</Text>
        </View>
        <BHStack style={styles.bottom}>
          <BHStack>
            <Image style={styles.avatar} source={{uri: userInfo.avatar}} />
            <BText type='gray' size='small'>{userInfo.nickname}</BText>
          </BHStack>
          <BHStack>
            <BText type='gray' size='small' >{it.likeCount}</BText>
            <BText type='gray' size='small' >{it.collectCount}</BText>
          </BHStack>
        </BHStack>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  item: {
    width: width,
    backgroundColor: '#fff',
    marginLeft: space,
    marginBottom: space,
    borderRadius: 4,
  },
  bottom: {
    paddingHorizontal: 8, 
    paddingVertical: 8,
    paddingTop: 4,
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 4,
  },
  image: {
    width: width,
    height: 150,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: '#ccc'
  },
  titleBox: {
    marginTop: 4,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 12,
    lineHeight: 16,
    paddingHorizontal: 8,
  }
});
