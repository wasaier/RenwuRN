import { IUser } from "./User";

export interface IProject {
  appType: string;
  appTypeId: string;
  createTime: string;
  description: string;
  id: number;
  projectType: string;
  projectTypeId: number;
  requires: string;
  reward: number;
  title: string;
  userId: number;
  userInfo: IUser;
  enrollList: any[];
  updateTime: string;
}
