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
import {IDemandData, PublishContext} from '../utils/context';

export interface IDemandFormRef {
  getParams: () => Promise<IDemandData>;
  clearPics: () => void;
}

const DemandForm: ForwardRefRenderFunction<IDemandFormRef> = (_, ref) => {
  const imagePickerRef = useRef<IBImagePickerRef>(null);
  const context = React.useContext(PublishContext);

  useImperativeHandle(ref, () => {
    return {
      getParams: async () => {
        const pics = (await imagePickerRef.current?.getPics()) || [];
        return {
          ...context?.demand!,
          pics: pics.map(it => it),
        };
      },
      clearPics: () => {
        imagePickerRef.current?.setPics([]);
      },
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

  const clearFieldValue = (key: string) => {
    return function () {
      context?.setDemand({
        ...context.demand,
        [key]: ''
      })
    }
  }

  return (
    <View style={styles.wrapper}>
      <View style={{marginTop: 10}}>
        <BInput
          placeholder="标题"
          value={context?.demand.title}
          onChange={setFiledValue('title')}
          onClear={clearFieldValue('title')}
        />
        <BInput
          placeholder="悬赏金额"
          value={`${context?.demand.reward}`}
          onChange={setFiledValue('reward')}
          onClear={clearFieldValue('reward')}
        />
        <BInput
          placeholder="技能要求"
          value={context?.demand.requires}
          onChange={setFiledValue('requires')}
          onClear={clearFieldValue('requires')}
        />
        <BTextArea
          placeholder="描述"
          value={context?.demand.description}
          onChange={setFiledValue('description')}
        />
        <BImagePicker ref={imagePickerRef} />
      </View>
    </View>
  );
};

export default forwardRef(DemandForm);

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: Theme.borderColor,
  },
});
