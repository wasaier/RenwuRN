import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from 'react-native';
import {observer} from 'mobx-react';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '@/navigator/BottomTabs';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '@/navigator';
import ArrowLeftIcon from '@/assets/imgs/arrow_left.png';
import {styles} from './styles';
import {useStore} from '@/model';
import router from '@/utils/router';

type ILoginScreenProps = StackScreenProps<RootStackParamList>

const LoginScreen: React.FC<ILoginScreenProps> = ({navigation}) => {
  const {userStore} = useStore();
  const [state, _setState] = useState({
    email: '1056834607@qq.com',
    password: '199389',
    isLogin: true,
    isRegister: false,
    userInfo: null,
    borderColor1: '#eff0f6',
    borderColor2: '#eff0f6',
    borderColor: '#eff0f6',
    borderColorHint: '#333',
    privacyChecked: true,
  });

  const setState = (state: Record<string, any>) => {
    _setState(prev => ({...prev, ...state}));
  };

  const doLogin = () => {
    userStore
      .login({
        email: state.email,
        password: state.password,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch(error => {
        Alert.alert(error);
      });
  };

  const handleSubmit = () => {
    doLogin();
  };

  const {isLogin} = state;

  const small_btn_stl = {
    fontSize: 12,
    color: '#888',
  };

  const FormBox = (
    <View style={styles.formBox}>
      <View style={{...styles.inputItem, borderColor: state.borderColor1}}>
        <TextInput
          style={styles.input}
          onChangeText={email => setState({email})}
          value={state.email}
          placeholder="输入登录户名"
          onFocus={() => {
            setState({borderColor1: state.borderColorHint});
          }}
          onBlur={() => {
            setState({borderColor1: state.borderColor});
          }}
        />
      </View>
      <View style={{...styles.inputItem, borderColor: state.borderColor2}}>
        <TextInput
          style={{...styles.input}}
          onChangeText={password => setState({password})}
          value={state.password}
          placeholder="输入登录密码"
          secureTextEntry={true}
          onFocus={() => {
            setState({borderColor2: state.borderColorHint});
          }}
          onBlur={() => {
            setState({borderColor2: state.borderColor});
          }}
        />
      </View>
      <View style={{marginTop: 20}}>
        <TouchableWithoutFeedback onPress={handleSubmit}>
          <Text style={styles.loginBtn}>
            {userStore.loading ? 'LOADING' : isLogin ? '立即登录' : '立即注册'}
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.bwtWrapper}>
        <View style={styles.tipWrapper}>
          <Text style={{color: '#999'}}>
            {isLogin ? '没有账户？' : '已有账户？'}
          </Text>
          <TouchableWithoutFeedback
            onPress={() => {
              setState({isLogin: !isLogin});
            }}>
            <Text>{isLogin ? '注册' : '登录'}</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
        translucent={true}
      />
      {/* <AntDesign
          style={styles.btn_close}
          name="arrowleft"
          size={24}
          onPress={() => navigation.goBack()}
        /> */}
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <Image
          source={ArrowLeftIcon}
          style={{width: 24, height: 24, marginTop: 60, marginLeft: 20}}
        />
      </TouchableWithoutFeedback>
      <View style={styles.cardBox}>
        <Text style={{fontSize: 24, fontWeight: '700', marginTop: 80}}>
          蚂蚁任务
        </Text>
      </View>
      {FormBox}
      <View
        style={{
          position: 'absolute',
          bottom: '20%',
          width: '100%',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <CheckBox
              containerStyle={{
                margin: 0,
                padding: 0,
                marginRight: 4,
              }}
              center
              checkedColor="#615963"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={state.privacyChecked}
              onPress={v => {
                // setState({
                //   privacyChecked: !state.privacyChecked
                // })
              }}
            /> */}
          <Text style={small_btn_stl}>阅读并同意</Text>
          <TouchableWithoutFeedback
            onPress={() => {
              console.log(1111);
              // router.goPrivacy({ navigation: props.navigation })
            }}>
            <Text style={small_btn_stl}>《用户协议》</Text>
          </TouchableWithoutFeedback>
          <Text style={small_btn_stl}>和</Text>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('H5', {
                url: 'http://renwu.airtlab.com/project/109'
              })
              // router.
              // router.goProtocol({ navigation })
            }}>
            <Text style={small_btn_stl}>《隐私政策》</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default observer(LoginScreen);
