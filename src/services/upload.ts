import {request} from '../config/axios';
import {ResBase} from '../types/RespBase';

const UploadAPI = {
  getToken() {
    return request<ResBase<{token: string}>>({
      method: 'GET',
      url: `/upload/getToken`,
    });
  },
};

export default UploadAPI;
