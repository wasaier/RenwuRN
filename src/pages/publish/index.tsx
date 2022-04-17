import {observer} from 'mobx-react';
import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import IconClose from '../../assets/iconfont/IconClose';
import BPage from '../../components/BPage';
import MSegment from '../../components/BSegment';
import MSegmentedItem from '../../components/BSegment/Item';
import {RootStackNavigation} from '../../navigator';
import PublishTopic from './PublishTopic';

type IProps = {
  navigation: RootStackNavigation;
};

const PublishScreen: React.FC<IProps> = ({navigation}) => {
  const goBack = () => navigation.goBack();
  const [index, setIndex] = useState(0);

  const renderTitle = () => {
    return (
      <View style={{ width: 200, marginTop: -6 }}>
        <MSegment
          onSegmentSelected={index => {
            setIndex(index);
          }}
          style={undefined}>
          <MSegmentedItem index={0} title={'需求'} style={undefined} />
          <MSegmentedItem index={1} title={'帖子'} style={undefined} />
        </MSegment>
      </View>
    );
  };

  return (
    <BPage
      title={renderTitle}
      navLeft={<IconClose color={'#888'} onPress={goBack} size={30} />}
      showBack={false}
      style={styles.screen}>
      <PublishTopic />
    </BPage>
  );
};

export default observer(PublishScreen);

const styles = StyleSheet.create({
  screen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
