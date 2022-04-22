import React from "react";

export interface IDemandData {
  title?: string;
  content?: string;
  pics?: string[];
}

export interface IPublishContext {
  disabled1: boolean;
  disabled2: boolean;

  tabIndex: number;
  setIndex: (index: number) => void;

  demand: IDemandData
  setDemand: (data: IDemandData) => void;
}

export const PublishContext = React.createContext<IPublishContext|null>(null);