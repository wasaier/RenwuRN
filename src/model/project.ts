import {observable, makeAutoObservable, flow, action} from 'mobx';
import {RootStore} from '.';
import ProjectAPI, {IGetCommentListRes, IGetProjectDetailRes} from '../services/project';
import {IProject} from '../types/Project';
import {IEnroll} from '../types/Enroll';
import {IComment} from '../types/Comment';

export class ProjectStore {
  public rootStore: RootStore;

  constructor(store: RootStore) {
    this.rootStore = store;
    makeAutoObservable(this, {
      detail: observable,
      replyVisible: observable,
      enrollList: observable,
      commentList: observable,
      fetchEnrollList: flow,
      replyComment: observable,
    });
  }

  detail: IProject | null = null;
  loading = false;
  replyVisible = false;
  enrollList: IEnroll[] = [];
  commentList: IComment[] = [];
  replyComment: IComment | null = null;
  parentComment: IComment | null = null;

  @action.bound
  resetState() {
    this.detail = null;
    this.enrollList = [];
    this.commentList = [];
  }

  @action.bound
  clickCommentItemReplyBtn(data: IComment, parent?: IComment) {
    this.replyComment = data;
    this.parentComment = parent || null;
    this.replyVisible = true;
  }

  @action.bound
  clickFooterReplyBtn() {
    this.replyComment = null;
    this.parentComment = null;
    this.replyVisible = true;
  }

  @action.bound
  setReplyVisible(flag: boolean) {
    this.replyVisible = flag;
  }

  @action.bound
  setReplyComment(data: IComment | null) {
    this.replyComment = data;
  }

  @action.bound
  setCommentList(list: IComment[]) {
    this.commentList = list;
  }

  // 评论项目
  *commentToProject({
    content,
    projectId,
  }: {
    projectId: number;
    content: string;
  }) {
    this.loading = true;
    try {
      ProjectAPI.commentToProject({
        projectId,
        content,
      }).then(res => {
        if (res.retCode === '0') {
          this.fetchComments({projectId});
        }
      });
    } catch (err) {
      console.log('commentToProject error', err);
    }
    this.loading = false;
  }

  // 评论评论
  *commentToComment({
    projectId,
    content,
  }: {
    projectId: number;
    content: string;
  }) {
    this.loading = true;
    try {
      ProjectAPI.commentToComment({
        projectId,
        content,
        parentId: this.parentComment
          ? this.parentComment.id
          : this.replyComment!.id,
        talkId: this.replyComment!.id,
        talkUserId: this.replyComment!.userInfo.id,
      }).then(res => {
        if (res.retCode === '0') {
          this.fetchComments({projectId});
        }
      });
    } catch (err) {
      console.log('commentToProject error', err);
    }
    this.loading = false;
  }

  // 评论列表
  *fetchComments({projectId}: {projectId: number}) {
    this.loading = true;
    try {
      const res: IGetCommentListRes = yield ProjectAPI.projectComments({
        projectId,
        typeId: 2,
      });
      if (res.retCode === '0') {
        this.setCommentList(res.data.list);
      }
    } catch (err) {
      console.log('fetchProjectDetail error', err);
    }
    this.loading = false;
  }

  // 获取项目详情
  *fetchProjectDetail({projectId}: {projectId: number}) {
    this.loading = true;
    try {
      let res: IGetProjectDetailRes = yield ProjectAPI.projectDetail(projectId);
      if (res.retCode === '0') {
        this.detail = res.data;
      }
    } catch (err) {
      console.log('fetchProjectDetail error', err);
    }
    this.loading = false;
  }

  // 报名列表
  *fetchEnrollList({projectId}: {projectId: number}) {
    this.loading = true;
    try {
      ProjectAPI.enrollList({
        projectId: projectId,
        pageIndex: 0,
        pageSize: 10,
      }).then(res => {
        if (res.retCode === '0') {
          this.enrollList = res.data.list;
        }
      });
    } catch (err) {
      console.log('fetchEnrollList error', err);
    }
    this.loading = false;
  }
}
