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
import {IconClose} from '../assets/iconfont';
import BHStack from '../components/BHStack';
import {Button, ImagePicker, WhiteSpace} from '@ant-design/react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import CameraRoll from '@react-native-community/cameraroll';
import axios from 'axios';
import UploadAPI from '../services/upload';
import { convertHeic } from '../utils/convertHeic';

const InputCell = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        borderRadius: 24,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        marginBottom: 10,
      }}>
      <BHStack style={{paddingVertical: 10}}>
        <TextInput
          style={{minHeight: 24, padding: 0, paddingRight: 10}}
          placeholder="标题"
        />
        <IconClose color={'#888'} />
      </BHStack>
      <View
        style={{
          height: StyleSheet.hairlineWidth,
          backgroundColor: '#f5f5f5',
        }}></View>
    </View>
  );
};

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
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({
          granted: true,
        });
      } else {
        this.setState({
          granted: false,
        });
      }
    } catch (err) {
      console.warn(err);
    }
  }

  async componentDidMount() {
    if (Platform.OS === 'android') {
      await this.requestCameraPermission();
    }
  }

  handleClick = async () => {
    // launchCamera(options?, callback);
    // You can also use as a promise without 'callback':
    // const result = await launchImageLibrary({
    //   mediaType: 'mixed',
    // });
    // console.log(result);
    CameraRoll.getPhotos({
      assetType: 'All',
      first: 1000,
    })
      .then(result => {
        console.log(result);
        this.setState({
          files: result.edges.map(it => {
            const {node} = it;
            return {
              url: node.image.uri,
              node,
            };
          }),
        });
        // this.setState({ images: result.edges, cursorEnd: pageInfo.end_cursor, hasNextPage: pageInfo.has_next_page });
      })
      .catch(error => {
        console.log(error);
      });
  };

  doUpload = async (file: any, uri: string) => {
    const formData = new FormData();
    const File = {
      uri: uri,
      name: 'test.jpeg',
      fileType: 'image/jpeg',
    };
    formData.append('file', File);
    const res = await fetch('http://192.168.1.6:8088/upload/s3', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });
    const data = await res.json();
    console.log(data);
  };

  upload = async () => {
    const file = this.state.files[0];
    // convertHeic(file.uri)
  };

  render() {
    if (Platform.OS === 'android' && !this.state.granted) {
      return <Text>需要访问相册的权限</Text>;
    }
    return (
      <View style={{marginTop: 20, marginLeft: 20}}>
        <ImagePicker
          onChange={this.handleFileChange}
          files={this.state.files}
          onAddImageClick={() => {
            console.log(111);
            this.handleClick();
          }}
          onImageClick={(index, files) => {
            console.log(files);
          }}
        />
        <Button
          type="primary"
          style={{marginTop: 20, marginBottom: 20}}
          onPress={() => {
            this.upload();
          }}>
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
        <InputCell />
        <TextAreaCell />
        <View style={{backgroundColor: '#fff', marginTop: 10}}>
          <ImagePickerExample />
        </View>
      </View>
    </View>
  );
};
