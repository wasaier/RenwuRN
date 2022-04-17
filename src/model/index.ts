import React from "react";
import { FeedStore } from "./feed";
import { HomeStore } from "./home";
import { ProjectStore } from "./project";
import { PublishStore } from "./publish";
import { UserStore } from "./user";

export { UserStore }

export class RootStore {
  userStore: UserStore;
  homeStore: HomeStore;
  projectStore: ProjectStore;
  feedStore: FeedStore;
  publishStore: PublishStore;

  constructor () {
    this.userStore = new UserStore(this);
    this.homeStore = new HomeStore(this);
    this.projectStore = new ProjectStore(this);
    this.feedStore = new FeedStore(this);
    this.publishStore = new PublishStore(this);
  }
}

const rootStore = new RootStore();

export const StoreContext = React.createContext<{
  userStore: UserStore;
  homeStore: HomeStore;
  projectStore: ProjectStore;
  feedStore: FeedStore;
  publishStore: PublishStore;
}>(rootStore);

export function useStore() {
  return React.useContext(StoreContext)
}

export default rootStore;