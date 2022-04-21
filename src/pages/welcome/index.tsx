import {observer} from 'mobx-react';
import React, { useEffect } from 'react';
import {Image, StyleSheet, View} from 'react-native';
import MTouchableOpacity from '@/components/MTouchableOpacity';
import {useStore} from '@/model';
import {RootStackNavigation} from '@/navigator';
import {screen_height, screen_width} from '@/utils/screen';

type IProps = {};

const WelcomeScreen: React.FC<IProps> = ({}) => {
  const {userStore} = useStore();

  useEffect(() => {
    setTimeout(() => {
      userStore.updateShowWelcome(false);
    }, 2000)
  }, [])

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('./img/main.png')}
      />
      <MTouchableOpacity
        style={styles.btn}
        onPress={() => {
          userStore.updateShowWelcome(false);
        }}
      />
    </View>
  );
};

export default observer(WelcomeScreen);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: screen_width,
    height: screen_height,
    marginTop: -30,
  },
  btn: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: screen_width,
    height: screen_height,
  },
});
