import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import BHStack from '../components/BHStack';
import {Button, ImagePicker, WhiteSpace} from '@ant-design/react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import CameraRoll from '@react-native-community/cameraroll';
import RNHeicConverter from 'react-native-heic-converter';
import BInput from '../components/BInput';
import { baseURL } from '../config';
import { request } from '../config/axios';
import FeedAPI from '../services/feed';

const TextAreaCell = () => {
  const [state, setState] = useState({
    height: 0,
    content: '',
  });

  return (
    <BHStack
      style={{
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#fff',
      }}>
      <TextInput
        textAlignVertical="top"
        value={state.content}
        multiline={true}
        style={{
          minHeight: 24,
          padding: 0,
          height: Math.max(state.height, 48),
        }}
        placeholder="标题"
        onContentSizeChange={event => {
          const {height} = event.nativeEvent.contentSize;
          setState(prev => ({...prev, height}));
        }}
        onChange={event => {
          const text = event.nativeEvent.text;
          event.nativeEvent && setState(prev => ({...prev, content: text}));
        }}
      />
    </BHStack>
  );
};

class ImagePickerExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      files: [],
    };
  }

  handleFileChange = (files: any) => {
    this.setState({ files });
  };

  async requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: '需要访问相册',
          message: '需要访问相册',
        } as any,
      );
      this.setState({
        granted: granted === PermissionsAndroid.RESULTS.GRANTED,
      });
    } catch (err) {
      console.warn(err);
    }
  }

  async componentDidMount() {
    if (Platform.OS === 'android') {
      await this.requestCameraPermission();
    }
  }

  onAddImageClick = async () => {
    const result = await launchImageLibrary({ mediaType: 'mixed' });
    if (result.assets?.length) {
      this.setState({
        files: [...this.state.files, ...result.assets]
      })
    }
  };

  uploadImage = async (uri: string) => {
    const formData = new FormData();
    const File = {
      uri: uri,
      name: 'test.jpeg',
      fileType: 'image/jpeg',
    };
    formData.append('file', File);
    const res = await fetch(baseURL + '/upload/s3?token=8ca09c190eb8c5431e2ae94c077a9f61', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });
    console.log(res)
    return await res.json();
  }

  upload = async () => {
    const files = this.state.files;
    console.log(files)
    const promises = files.map((it: any) => {
      return this.uploadImage(it.uri);
    })
    const res = await Promise.all(promises)

    const r = await FeedAPI.addFeed({
      title: "33333",
      content: "44444",
      pics: res.map(it => (it as any).url).join(',')
    });

    console.log(r)
  };

  render() {
    if (Platform.OS === 'android' && !this.state.granted) {
      return <Text>需要访问相册的权限</Text>;
    }

    const files = this.state.files.map((it: any) => ({
      ...it,
      url: it.uri
    }));

    return (
      <View style={{marginTop: 20, marginLeft: 20}}>
        <ImagePicker
          onChange={this.handleFileChange}
          files={files}
          onAddImageClick={() => {
            this.onAddImageClick();
          }}
          onImageClick={(index, files) => {
            console.log(files);
          }}
        />
        <Button
          type="primary"
          style={{marginTop: 20, marginBottom: 20}}
          onPress={this.upload}>
          提交
        </Button>
      </View>
    );
  }
}

export default () => {
  return (
    <View style={{paddingHorizontal: 10, flex: 1, backgroundColor: '#f5f5f5'}}>
      <View style={{marginTop: 10}}>
        <BInput placeholder='标题' />
        <TextAreaCell />
        <View style={{backgroundColor: '#fff', marginTop: 10}}>
          <ImagePickerExample />
        </View>
      </View>
    </View>
  );
};
