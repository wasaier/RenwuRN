import { IUser } from "./User";

export interface IEnroll {
  createTime: string;
  id: number;
  projectId: number;
  status: string;
  updateTime: string;
  userId: number;
  userInfo: IUser;
}
