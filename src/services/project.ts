import {request} from '../config/axios';
import {IComment} from '../types/Comment';
import {IEnroll} from '../types/Enroll';
import {PageInfo} from '../types/IPageInfo';
import {IProject} from '../types/Project';
import {IProjectCategory} from '../types/ProjectCategory';
import {ResBase} from '../types/RespBase';
import {qs} from '../utils/request';

const ProjectAPI = {
  // 项目分类
  projectCategory() {
    return request({
      method: 'GET',
      url: `/demand-category`,
    }) as unknown as Promise<ResBase<{list: IProjectCategory[]}>>;
  },

  // 获取大厅项目列表
  getProjectList(params: any) {
    return request<ResBase<{
      list: IProject[];
      pageInfo: PageInfo;
    }>>({
      method: 'GET',
      url: `/demand?${qs(params)}`,
    })
  },

  // 项目详情
  projectDetail(projectId: number) {
    return request({
      method: 'GET',
      url: `/demand/${projectId}`,
    }) as unknown as Promise<IGetProjectDetailRes>;
  },

  // 榜单
  rankList() {
    return request({
      method: 'GET',
      url: '/nuser',
    });
  },

  // 获取报名列表
  enrollList(params: {projectId: number; pageIndex: number; pageSize: number}) {
    return request({
      method: 'GET',
      url: `/order/demand?${qs(params)}`,
    }) as unknown as Promise<
      ResBase<{
        list: IEnroll[];
        pageInfo: PageInfo;
      }>
    >;
  },

  // 获取项目的评论
  projectComments(params: {
    projectId: number;
    pageIndex?: number;
    pageSize?: number;
    typeId: number;
  }) {
    const body = {
      ...params,
      itemId: params.projectId,
    };
    return request({
      method: 'GET',
      url: `/comment?${qs(body)}`,
    }) as unknown as Promise<IGetCommentListRes>;
  },

  // 评论子项目
  commentToComment(params: ICommentToCommentDto) {
    const body = {
      ...params,
      typeId: 1,
    }
    console.log(body);
    return request({
      method: 'POST',
      url: `/comment?itemId=${params.parentId}`,
      data: body
    }) as unknown as Promise<ResBase<IComment>>;
  },

  // 评论项目
  commentToProject({projectId, content}: {projectId: number; content: string}) {
    const body = { content, typeId: 2 };
    return request({
      method: 'POST',
      url: `/comment?itemId=${projectId}`,
      data: body
    }) as unknown as Promise<ResBase<IComment>>;
  },

  // 收藏|点赞
  addCollect({ projectId }: IAddCollectDto) {
    const query = {  typeId: 1, objectId: 1 };
    return request({
      method: 'POST',
      url: `/collect/status?${qs(query)}`,
      data: { itemId: projectId }
    }) as unknown as Promise<ResBase<IComment>>;
  }
};

export default ProjectAPI;

// 获取评论列表
export type IGetCommentListRes = ResBase<{
  list: IComment[];
  pageInfo: PageInfo;
}>;

// 添加子评论
export interface ICommentToCommentDto {
  projectId: number;
  parentId: number;
  talkId: number;
  talkUserId: number;
  content: string;
}

export enum CollectTypes {
  collect = 1,
  like = 2
}

// 收藏|点赞
export interface IAddCollectDto {
  projectId: number;
  typeId: CollectTypes;
}

export type IGetProjectDetailRes = ResBase<IProject>;