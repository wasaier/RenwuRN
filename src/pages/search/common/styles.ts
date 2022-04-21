import Theme from '@/utils/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    paddingRight: 12,
    borderBottomColor: Theme.borderColor,
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10
  },
  item: {
    height: 30,
    lineHeight: 30,
    paddingHorizontal: 12,
  },
});