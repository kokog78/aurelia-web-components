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
  selectedIndex: number;

  @bindable
  selectCallback: Function;

  @bindable
  backCallback: Function;

  selectedItem: MasterDetailItem;
  selected: boolean;

  attached() {
    this.selected = (this.selectedIndex !== undefined && this.selectedIndex >= 0);
  }

  select(item: MasterDetailItem, index: number) {
    this.selectedIndex = index;
    this.selectedItem = item;
    this.selected = true;
    this.selectCallback && this.selectCallback({item: item, index: index});
  }

  back() {
    let index: number = this.selectedIndex;
    this.selectedIndex = -1;
    this.selectedItem = null;
    this.selected = false;
    this.backCallback && this.backCallback({index: index});
  }
}
