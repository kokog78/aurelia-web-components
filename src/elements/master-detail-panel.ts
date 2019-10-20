import {bindable} from "aurelia-templating";
import {MasterDetailItem, MasterDetailAction} from "../models/master-detail-item";

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
