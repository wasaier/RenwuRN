import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Alert
} from 'react-native';
import FeedAPI from '@/services/feed';
import BInput from '@/components/BInput';
import BImagePicker, {IBImagePickerRef} from '@/components/BImagePicker';
import BTextArea from '@/components/BTextArea';
import Theme from '@/utils/theme';
import {PublishContext} from '../context';

export interface IPublishTopicRef {
  submit: () => void;
}

const PublishTopic: ForwardRefRenderFunction<IPublishTopicRef> = (_, ref) => {
  const imagePickerRef = useRef<IBImagePickerRef>(null);
  const [loading, setLoading] = useState(false);
  const context = React.useContext(PublishContext);

  const clearForm = () => {
    context?.setDemand({
      title: '',
      content: '',
      pics: [],
    });
    imagePickerRef.current?.setPics([]);
  };

  const submit = async () => {
    Alert.alert(JSON.stringify(context?.demand))
    // setLoading(true);
    // try {
    //   const pics = (await imagePickerRef.current?.getPics()) || [];
    //   const r = await FeedAPI.addFeed({
    //     ...context?.demand,
    //     pics: pics.map(it => it).join(','),
    //   });
    //   clearForm();
    // } catch (e) {
    //   console.log(`submit_topic`, e);
    // }
    // setLoading(false);
  };

  useImperativeHandle(ref, () => {
    return {
      submit,
    };
  });

  const setFiledValue = (filedName: string) => {
    return function (e: NativeSyntheticEvent<TextInputChangeEventData>) {
      const text = e.nativeEvent.text;
      context?.setDemand({
        ...context.demand,
        [filedName]: text,
      });
    };
  };

  return (
    <View
      style={{
        paddingHorizontal: 10,
        flex: 1,
        backgroundColor: Theme.borderColor,
      }}>
      <View style={{marginTop: 10}}>
        <BInput
          onClear={() =>
            context?.setDemand({
              ...context.demand,
              title: '',
            })
          }
          placeholder="标题"
          value={context?.demand.title}
          onChange={setFiledValue('title')}
        />
        <BTextArea
          placeholder="描述"
          value={context?.demand.content}
          onChange={setFiledValue('content')}
        />
        <View style={{backgroundColor: Theme.white, marginTop: 10}}>
          <BImagePicker ref={imagePickerRef} />
        </View>
      </View>
    </View>
  );
};

export default forwardRef(PublishTopic);