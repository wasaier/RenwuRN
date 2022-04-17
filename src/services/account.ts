import {ResBase} from '../types/RespBase';
import {IUser} from '../types/User';
import {qs} from '../utils/request';
import {request} from '../config/axios';
import { IAccountInfo } from '../types/IAccountInfo';

export interface LoginDto {
  email: string;
  password: string;
}

export interface UserInfo extends IUser {
  token: string;
}

export type ILoginRes = ResBase<UserInfo>;

const AccountAPI = {
  // 登录
  login(params: LoginDto) {
    return request({
      method: 'POST',
      url: `/user/login`,
      data: params
    }) as unknown as Promise<ILoginRes>;
  },

  /**
   * 注册
   */
  register(params: any) {
    return request({
      method: 'POST',
      url: `/user/register/`,
      data: qs(params),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },

  /**
   * 获取用户信息
   */
  getUserInfo() {
    return request({
      method: 'GET',
      url: `/user/userInfo`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },

  /**
   * 获取账户信息
   */
  getAccountInfo() {
    return request({
      method: 'GET',
      url: `/user/getUserAssets`,
    }) as unknown as Promise<ResBase<IAccountInfo>>;
  },
};

export default AccountAPI;
