import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import { IconIconSaoma, IconNiuren, IconNiurenbang, IconSaoma, IconSeekicon, IconZhuanyepaiming } from '@/assets/iconfont';
import MTouchableOpacity from '@/components/MTouchableOpacity';

interface IProps {
  goRank: () => void;
  goSearch: () => void;
  onScan?: () => void;
}

const HomeMenu: React.FC<IProps> = (props) => {
  return (
    <View style={style.wrapper}>
      <MTouchableOpacity style={{ marginRight: 10 }} onPress={props.onScan}>
        {/* <IconSaoma color='#000' /> */}
        <IconIconSaoma size={22}/>
      </MTouchableOpacity>
      <MTouchableOpacity style={style.input} onPress={props.goSearch}>
        <IconSeekicon color={'#888'} size={16} />
        <Text style={style.inputText}>搜索关键字</Text>
      </MTouchableOpacity>
      <MTouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={props.goRank}>
        <IconNiuren size={18} color="#000" style={{ marginRight: 4 }}/>
        {/* <IconZhuanyepaiming size={30} /> */}
      </MTouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingBottom: 10,
    paddingTop: Platform.OS === 'android' ? 10 : 0
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 30,
    paddingLeft: 10,
    marginRight: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10
  },
  inputText: {
    fontSize: 12,
    color: '#888b8e',
    marginLeft: 6
  },
});

export default HomeMenu;
