import {IbAction} from "./ib-action";

export interface IbItem {
  caption?: string;
  html?: string;
  actions?: IbAction[];
}
