import {observable, makeAutoObservable, action} from 'mobx';
import {RootStore} from '.';
import CommentAPI, {
  ICommentTypes,
  IGetCommentListRes,
} from '../services/comment';
import FeedAPI, {IGetFeedDetail} from '../services/feed';
import {IComment} from '../types/Comment';
import {IFeed} from '../types/IFeed';

export class FeedStore {
  public rootStore: RootStore;

  constructor(store: RootStore) {
    this.rootStore = store;
    makeAutoObservable(this, {
      detail: observable,
      replyVisible: observable,
      commentList: observable,
      replyComment: observable,
    });
  }

  detail: IFeed | null = null;
  loading = false;
  replyVisible = false;
  commentList: IComment[] = [];
  replyComment: IComment | null = null;
  parentComment: IComment | null = null;

  @action.bound
  resetState() {
    this.detail = null;
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
  *addComment(params: {itemId: number; content: string}) {
    this.loading = true;
    try {
      if (this.replyComment) {
        const body = {
          ...params,
          typeId: ICommentTypes.toComment,
          parentId: this.parentComment
            ? this.parentComment.id
            : this.replyComment!.id,
          talkId: this.replyComment!.id,
          talkUserId: this.replyComment!.userInfo.id,
        };
        CommentAPI.addChildComment(body).then(res => {
          if (res.retCode === '0') {
            this.fetchComments({itemId: params.itemId});
          }
        });
      } else {
        CommentAPI.addComment({
          ...params,
          typeId: ICommentTypes.toFeed,
        }).then(res => {
          if (res.retCode === '0') {
            this.fetchComments({itemId: params.itemId});
          }
        });
      }
    } catch (err) {
      console.log('commentToProject error', err);
    }
    this.loading = false;
  }

  // 评论列表
  *fetchComments({itemId}: {itemId: number}) {
    this.loading = true;
    try {
      const res: IGetCommentListRes = yield CommentAPI.getComments({
        itemId,
        typeId: 3,
      });
      if (res.retCode === '0') {
        this.setCommentList(res.data.list);
      }
    } catch (err) {
      console.log('fetchComments error', err);
    }
    this.loading = false;
  }

  // 获取详情
  *fetchFeedDetail({itemId}: {itemId: number}) {
    this.loading = true;
    try {
      let res: IGetFeedDetail = yield FeedAPI.getFeedDetail({itemId});
      if (res.retCode === '0') {
        this.detail = res.data;
      }
    } catch (err) {
      console.log('fetchFeedDetail error', err);
    }
    this.loading = false;
  }
}
