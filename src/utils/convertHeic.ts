import RNHeicConverter from 'react-native-heic-converter';

export const convertHeic = (url: string) => {
  return RNHeicConverter.convert({
    path: url,
  }).then((res: any) => {
    return res.path
  })
};
