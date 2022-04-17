import {action, makeAutoObservable, observable} from 'mobx';
import {RootStore} from '.';

export class PublishStore {
  public rootStore: RootStore;

  constructor(store: RootStore) {
    this.rootStore = store;
    makeAutoObservable(this, {
      loading: observable,
    });
  }

  loading = false;
  createModalVisible = false;

  @action.bound
  setModal(bool: boolean) {
    this.createModalVisible = bool;
  }
}
