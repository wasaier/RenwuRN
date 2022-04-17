import {request} from '../config/axios';
import {IFeed} from '../types/IFeed';
import {PageInfo} from '../types/IPageInfo';
import {ResBase} from '../types/RespBase';

export type IGetFeedListRes = ResBase<{
  list: IFeed[];
  pageInfo: PageInfo;
}>;

export type IGetFeedDetail = ResBase<IFeed>;

const FeedAPI = {
  getFeedList() {
    return request<IGetFeedListRes>({
      method: 'GET',
      url: `/topic`,
    });
  },
  getFeedDetail({itemId}: {itemId: number}) {
    return request<IGetFeedDetail>({
      method: 'GET',
      url: `/topic/${itemId}`,
    });
  },
  addFeed(data: {
    title?: string
    content?: string;
    pics?: string;
  }) {
    return request<IGetFeedDetail>({
      method: 'POST',
      url: `/topic`,
      data: data
    });
  }
};

export default FeedAPI;