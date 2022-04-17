import {observable, makeAutoObservable, flow, action} from 'mobx';
import {RootStore} from '.';
import { IProjectCategory } from '../types/ProjectCategory';
import ProjectAPI from '../services/project';
import { ResBase } from '../types/RespBase';
import { IProject } from '../types/Project';

export class HomeStore {
  static storeName = 'homeStore';
  public rootStore: RootStore;

  constructor(store: RootStore) {
    this.rootStore = store;
    makeAutoObservable(this, {
      projectList: observable,
      categoryList: observable,
      categoryIndex: observable,
      fetchCategoryList: flow
    })
  }

  loading = false;
  categoryIndex = 0;
  projectList: IProject[] = [];
  categoryList: IProjectCategory[] = [];

  @action.bound
  setCategoryIndex(index: number) {
    this.categoryIndex = index;
  }

  // 获取项目列表
  *fetchProjectList() {
    this.loading = true;
    try {
      const res: ResBase<{ list: IProject[] }> = yield ProjectAPI.getProjectList({
        pageIndex: 1,
        pageSize: 10
      });
      if (res.retCode === '0') {
        this.projectList = res.data.list;
      }
    } catch (err) {
      console.log("fetchProjectList error", err)
    }
    this.loading = false;
  }

  // 获取分类列表
  *fetchCategoryList() {
    this.loading = true;
    try {
      const res: ResBase<{ list: IProjectCategory[] }> = yield ProjectAPI.projectCategory();
      if (res.retCode === '0') {
        this.categoryList = res.data.list;
      }
    } catch (err) {
      console.log("fetchCategoryList error", err)
    }
    this.loading = false;
  }
}