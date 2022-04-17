import { IUser } from "./User";

export interface IComment {
  content: string;
  createTime: string;
  id: number;
  itemId: number;
  parentId: number;
  talkId: null;
  talkUserId: null;
  typeId: number;
  uid: number;
  updateTime: string;
  userInfo: IUser;
  children?: IComment[];
}
