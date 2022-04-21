import React, {useRef, useState} from 'react';
import {
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import FeedAPI from '@/services/feed';
import BInput from '@/components/BInput';
import BImagePicker, {IBImagePickerRef} from '@/components/BImagePicker';
import BTextArea from '@/components/BTextArea';
import {Button} from 'native-base';
import Theme from '@/utils/theme';

const PublishTopic = () => {
  const imagePickerRef = useRef<IBImagePickerRef>(null);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    title: '',
    content: '',
  });

  const clearForm = () => {
    setState({
      title: '',
      content: '',
    });
    imagePickerRef.current?.setPics([]);
  };

  const submit = async () => {
    setLoading(true);
    try {
      const pics = (await imagePickerRef.current?.getPics()) || [];
      const r = await FeedAPI.addFeed({
        ...state,
        pics: pics.map(it => it).join(','),
      });
      clearForm();
    } catch (e) {
      console.log(`submit_topic`, e);
    }
    setLoading(false);
  };

  const setFiledValue = (filedName: string) => {
    return function (e: NativeSyntheticEvent<TextInputChangeEventData>) {
      const text = e.nativeEvent.text;
      setState(prev => ({...prev, [filedName]: text}));
    };
  };

  const isDisabled = loading || !state.title.length || !state.content.length;

  return (
    <View
      style={{
        paddingHorizontal: 10,
        flex: 1,
        backgroundColor: Theme.borderColor,
      }}>
      <View style={{marginTop: 10}}>
        <BInput
          onClear={() => setState(prev => ({...prev, title: ''}))}
          placeholder="标题"
          value={state.title}
          onChange={setFiledValue('title')}
        />
        <BTextArea
          placeholder="描述"
          value={state.content}
          onChange={setFiledValue('content')}
        />
        <View style={{backgroundColor: Theme.white, marginTop: 10}}>
          <BImagePicker ref={imagePickerRef} />
          <Button
            isLoading={loading}
            isDisabled={isDisabled}
            onPress={submit}
            size="lg"
            colorScheme={'green'}
            style={{
              marginHorizontal: 16,
              height: 44,
              borderRadius: 2,
              marginVertical: 20,
            }}>
            提 交
          </Button>
        </View>
      </View>
    </View>
  );
};

export default PublishTopic;