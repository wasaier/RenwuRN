import {request} from '../config/axios';
import {ResBase} from '../types/RespBase';
import {qs} from '../utils/request';

export enum CollectTypes {
  collect = 1, // 收藏操作
  like = 2, // 点赞操作
}

export enum ObjectTypes {
  project = 1, // 项目对象
  topic = 2, // 帖子对象
}

const CollectAPI = {
  // 创建
  addCollect({itemId, typeId, objectId}: IAddCollectDto) {
    const query = {typeId, objectId};
    return request({
      method: 'POST',
      url: `/collect/status?${qs(query)}`,
      data: {itemId: itemId},
    }) as unknown as Promise<ResBase<IAddCollectRes>>;
  },

  // 查询
  queryStatus({typeId, objectId, itemId}: IAddCollectDto) {
    return request({
      method: 'GET',
      url: `/collect/status?${qs({itemId: itemId, typeId, objectId})}`,
    }) as unknown as Promise<ResBase<IQueryStatus>>;
  },
};

export default CollectAPI;

export interface IAddCollectDto {
  itemId: number;
  typeId: CollectTypes;
  objectId: ObjectTypes;
}
export interface IAddCollectRes {
  createTime: string;
  id: number;
  itemId: number,
  objectId: number,
  typeId: number,
  uid: number,
  updateTime: string;
}

export interface IQueryStatus {
  status: number;
}