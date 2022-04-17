import {request} from '../config/axios';
import {IComment} from '../types/Comment';
import {PageInfo} from '../types/IPageInfo';
import {ResBase} from '../types/RespBase';
import {qs} from '../utils/request';

const CommentAPI = {
  // 获取评论
  getComments(params: {
    itemId: number;
    pageIndex?: number;
    pageSize?: number;
    typeId: ObjectTypes;
  }) {
    return request({
      method: 'GET',
      url: `/comment?${qs(params)}`,
    }) as unknown as Promise<IGetCommentListRes>;
  },

  // 评论对象
  addComment(params: IAddCommentDto) {
    const {itemId, ...body} = params;
    return request({
      method: 'POST',
      url: `/comment?itemId=${itemId}`,
      data: body,
    }) as unknown as Promise<ResBase<IComment>>;
  },

  // 评论对象
  addChildComment(params: IAddChildCommentDto) {
    const {itemId, ...body} = params;
    return request({
      method: 'POST',
      url: `/comment?itemId=${itemId}`,
      data: body,
    }) as unknown as Promise<ResBase<IComment>>;
  },
};

export default CommentAPI;

// 获取评论列表
export type IGetCommentListRes = ResBase<{
  list: IComment[];
  pageInfo: PageInfo;
}>;

// 添加子评论
export interface IAddCommentDto {
  typeId: ICommentTypes;
  itemId: number;
  content: string;
}

// 添加子评论
export interface IAddChildCommentDto extends IAddCommentDto {
  parentId?: number;
  talkId?: number;
  talkUserId?: number;
}

export enum ICommentTypes {
  toComment = 1, // 添加子评论
  toProject = 2, // 评论项目
  toFeed = 3, // 评论帖子
}

export enum ObjectTypes {
  project = 1, // 项目对象
  topic = 2, // 帖子对象
}
