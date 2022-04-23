import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
} from 'react';
import {
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  StyleSheet,
} from 'react-native';
import BInput from '@/components/BInput';
import BImagePicker, {IBImagePickerRef} from '@/components/BImagePicker';
import BTextArea from '@/components/BTextArea';
import Theme from '@/utils/theme';
import {IPostData, PublishContext} from '../utils/context';

export interface IPostFormRef {
  getParams: () => Promise<IPostData>;
  clearPics: () => void;
}

const PostForm: ForwardRefRenderFunction<IPostFormRef> = (_, ref) => {
  const imagePickerRef = useRef<IBImagePickerRef>(null);
  const context = React.useContext(PublishContext);

  useImperativeHandle(ref, () => {
    return {
      getParams: async () => {
        const pics = (await imagePickerRef.current?.getPics()) || [];
        return {
          ...context?.postData,
          pics: pics.map(it => it)
        }
      },
      clearPics: () => {
        imagePickerRef.current?.setPics([]);
      }
    };
  });

  const setFiledValue = (filedName: string) => {
    return function (e: NativeSyntheticEvent<TextInputChangeEventData>) {
      const text = e.nativeEvent.text;
      context?.setPostData({
        ...context.postData,
        [filedName]: text,
      });
    };
  };

  const clearTitle = () => {
    context?.setPostData({
      ...context.postData,
      title: '',
    })
  }

  return (
    <View style={styles.wrapper}>
      <View style={{marginTop: 10}}>
        <BInput
          onClear={clearTitle}
          placeholder="标题"
          value={context?.postData.title}
          onChange={setFiledValue('title')}
        />
        <BTextArea
          placeholder="描述"
          value={context?.postData.content}
          onChange={setFiledValue('content')}
        />
        <BImagePicker ref={imagePickerRef} />
      </View>
    </View>
  );
};

export default forwardRef(PostForm);

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: Theme.borderColor,
  }
})