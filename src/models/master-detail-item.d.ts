export interface MasterDetailAction {
  className?: string;
  title?: string;
  html?: string;
  callback: Function;
}
export interface MasterDetailItem {
  caption?: string;
  html?: string;
  actions?: MasterDetailAction[];
}
