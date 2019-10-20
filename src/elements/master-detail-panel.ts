import {bindable} from "aurelia-templating";
import {IbItem} from "../models/ib-item";
import {IbAction} from "../models/ib-action";

export class MasterDetailPanel {

  @bindable
  caption: string;

  @bindable
  items: IbItem[];

  @bindable
  callback: Function;

  selectedItem: IbItem;

  select(item: IbItem) {
    this.selectedItem = item;
    this.callback && this.callback({item});
  }

  runAction(action: IbAction) {
    action.callback && action.callback();
  }
}
