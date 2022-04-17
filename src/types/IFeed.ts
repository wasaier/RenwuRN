import {IUser} from './User';

export interface IFeed {
  id: number;
  title: string;
  content: string;
  pics: string;
  userId: number;
  clickCount: number;
  status: number;
  isDelete: number;
  createTime: string;
  updateTime: string;
  userInfo: IUser;
  likeCount: number;
  collectCount: number;
  isLiked: boolean;
  isCollected: boolean;
}