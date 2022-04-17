import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Text, TouchableWithoutFeedback, View, Image} from 'react-native';
import {
  ImagePickerResponse,
  Asset,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

export default () => {
  const [files, setFiles] = useState<ImagePickerResponse['assets']>([]);

  const handleClick = async () => {
    // launchCamera(options?, callback);
    // You can also use as a promise without 'callback':
    const result = await launchImageLibrary({
      mediaType: 'mixed',
    });
    setFiles(result.assets);
    console.log(result);
  };

  const renderImages = (it: Asset) => {
    return (
      <View>
        <Image style={{width: 100, height: 100}} source={{uri: it.uri}}></Image>
      </View>
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {files?.map(renderImages)}
      <TouchableWithoutFeedback onPress={handleClick}>
        <Text>hello</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};
