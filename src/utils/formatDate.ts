import dayjs from 'dayjs';

export const formatDate = (value: string, mode = 'YYYY-MM-DD hh:mm:ss') => {
  return dayjs(value).format(mode);
};