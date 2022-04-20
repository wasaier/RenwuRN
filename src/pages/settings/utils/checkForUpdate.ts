import {Alert} from 'react-native';
import CodePush from 'react-native-code-push';

export const checkForUpdate = () => {
  CodePush.sync(
    {
      installMode: CodePush.InstallMode.IMMEDIATE,
    },
    (status: CodePush.SyncStatus) => {
      console.log(status);
      Alert.alert(JSON.stringify(status));
      switch (status) {
        case CodePush.SyncStatus.UP_TO_DATE:
          {
            Alert.alert('提示', '当前已经是最新版本');
          }
          break;
        case CodePush.SyncStatus.UPDATE_INSTALLED:
          {
            Alert.alert('提示', '最新版本已安装');
          }
          break;
        default:
          break;
      }
    },
    e => {
      console.log(e);
    },
  );
};
