import {computedFrom} from 'aurelia-framework';
import {bindable} from "aurelia-templating";

export interface MasterDetailAction {
  className?: string;
  caption?: string;
  callback: Function;
}

export interface MasterDetailItem {
  caption?: string;
  html?: string;
  actions?: MasterDetailAction[];
  [key: string]: any;
}

export class MasterDetailPanel {

  @bindable
  caption: string;

  @bindable
  items: MasterDetailItem[];

  @bindable
  callback: Function;

  selectedItem: MasterDetailItem;

  select(item: MasterDetailItem) {
    this.selectedItem = item;
    this.callback && this.callback({item});
  }

  runAction(action: MasterDetailAction) {
    action.callback && action.callback();
  }
}
