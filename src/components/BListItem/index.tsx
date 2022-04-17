import React from 'react';
import {StyleSheet, Text, TouchableOpacityProps, View} from 'react-native';
import {IconArrowRight} from '../../assets/iconfont';
import MTouchableOpacity from '../MTouchableOpacity';

interface IProps {
  title?: React.ReactNode;
  icon?: string | React.ReactNode;
  link?: boolean;
  border?: boolean;
  onPress?: TouchableOpacityProps['onPress'];
}

const BListItem: React.FC<IProps> = ({title, icon, link = true, border = true, ...rest}) => {
  return (
    <MTouchableOpacity {...rest}>
      <View style={styles.item}>
        <View style={styles.inner}>
          <Text style={styles.title}>{title}</Text>
          {link && <IconArrowRight color={'#ddd'} /> }
        </View>
        {border && <View style={styles.line}></View>}
      </View>
    </MTouchableOpacity>
  );
};

export default BListItem;

const styles = StyleSheet.create({
  item: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    height: 48,
  },
  line: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ebedf0',
  },
  title: {
    fontSize: 16,
  },
});
