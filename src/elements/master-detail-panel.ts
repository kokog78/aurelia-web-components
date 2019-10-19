import {computedFrom} from 'aurelia-framework';
import {bindable} from "aurelia-templating";

export interface MasterDetailItem {
  caption?: string;
  html?: string;
  [key: string]: any;
}

export class MasterDetailPanel {

  @bindable
  caption: string;

  @bindable
  items: MasterDetailItem[];

  @bindable
  selectedItem: MasterDetailItem;

  @bindable
  selectCallback: Function;

  @bindable
  backCallback: Function;

  @computedFrom('selectedItem')
  get selected(): boolean {
    return this.selectedItem != null;
  }

  select(item: MasterDetailItem) {
    this.selectedItem = item;
    this.selectCallback && this.selectCallback({item: item});
  }

  back() {
    let item: MasterDetailItem = this.selectedItem;
    this.selectedItem = null;
    this.backCallback && this.backCallback({item: item});
  }
}
