import {request} from '../config/axios';
import {ResBase} from '../types/RespBase';
import {IUser} from '../types/User';

const RankAPI = {
  getRankList() {
    return request({
      method: 'GET',
      url: `/user/users`,
    }) as unknown as Promise<ResBase<{
      list: IUser[]
    }>>;
  },
};

export default RankAPI;