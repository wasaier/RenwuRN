import React from "react";

export interface IPostData {
  title?: string;
  content?: string;
  pics?: string[];
}

export interface IDemandData {
  title: string;
  reward: string;
  city: string;
  description: string;
  requires: string;
  appTypeId: number;
  projectTypeId: number;
  appType: string;
  projectType: string;
}

export interface IPublishContext {
  tabIndex: number;
  setIndex: (index: number) => void;

  demand: IDemandData
  setDemand: (data: IDemandData) => void;

  postData: IPostData;
  setPostData: (data: IPostData) => void;
}

export const PublishContext = React.createContext<IPublishContext|null>(null);