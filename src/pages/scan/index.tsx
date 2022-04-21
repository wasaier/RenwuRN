import React, {PureComponent, Component} from 'react';
import {
  AppRegistry,
  Alert,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import BPage from '@/components/BPage';

export default class ScanScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      moveAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    this.state.moveAnim.setValue(0);
    Animated.timing(this.state.moveAnim, {
      toValue: -200,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => this.startAnimation());
  };

  //  识别二维码
  onBarCodeRead = (result: any) => {
    this.props.navigation.navigate('H5', {
      url: result.data
    })
  };

  render() {
    return (
      <BPage title="扫一扫" style={styles.container}>
        <RNCamera
          ref={ref => {
            (this as any).camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          onBarCodeRead={this.onBarCodeRead}>
          <View style={styles.rectangleContainer}>
            <View style={styles.rectangle} />
            <Animated.View
              style={[
                styles.border,
                {transform: [{translateY: this.state.moveAnim}]},
              ]}
            />
            <Text style={styles.rectangleText}>
              将二维码放入框内，即可自动扫描
            </Text>
          </View>
        </RNCamera>
      </BPage>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  rectangle: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },
  rectangleText: {
    flex: 0,
    color: '#fff',
    marginTop: 10,
  },
  border: {
    flex: 0,
    width: 200,
    height: 2,
    backgroundColor: '#00FF00',
  },
});
