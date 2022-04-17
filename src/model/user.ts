import {runInAction, makeAutoObservable, action, observable} from 'mobx';
import storage from '../utils/storage';
import {RootStore} from '.';
import AccountAPI, {ILoginRes, LoginDto, UserInfo} from '../services/account';
import {IUser} from '../types/User';
import {IAccountInfo} from '../types/IAccountInfo';

export class UserStore {
  public rootStore: RootStore;

  constructor(store: RootStore) {
    this.rootStore = store;
    makeAutoObservable(this, {
      loading: observable,
      userInfo: observable,
      showWelcome: observable
    });
  }

  showWelcome = true;
  loading = false;
  userInfo: UserInfo | null = null;
  accountInfo: IAccountInfo = {
    collectNum: 0,
    followNum: 0,
    likeNum: 0,
    pointNum: 0,
    rcoinNum: 0,
  };

  *initStateFromCache() {
    const userInfo: UserInfo = yield storage.getItem('userInfo');
    this.userInfo = userInfo;
  }

  @action.bound
  updateShowWelcome(bool: boolean) {
    console.log('333')
    this.showWelcome = bool;
  }

  // 获取账户信息
  async fetchAccountInfo() {
    this.loading = true;
    try {
      const res = await AccountAPI.getAccountInfo();
      if (res.retCode === '0') {
        runInAction(() => {
          this.accountInfo = res.data;
          this.loading = false;
        });
      }
    } catch (err) {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  // 登录
  async login(params: LoginDto) {
    this.loading = true;
    try {
      const res: ILoginRes = await AccountAPI.login(params);
      if (res.retCode === '0') {
        storage.setItem('userInfo', res.data);
        runInAction(() => {
          this.userInfo = res.data;
          this.loading = false;
        });
      }
    } catch (err) {
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}
