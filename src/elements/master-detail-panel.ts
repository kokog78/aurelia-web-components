import {computedFrom} from 'aurelia-framework';
import {bindable} from "aurelia-templating";

export interface MasterDetailItem {
  caption?: string;
  html?: string;
  [key: string]: any;
}

export interface MasterDetailManager {
  setSelectedItem?: (item: MasterDetailItem) => void;
  select?: (item: MasterDetailItem) => void;
}

export class MasterDetailPanel {

  @bindable
  caption: string;

  @bindable
  items: MasterDetailItem[];

  @bindable
  manager: MasterDetailManager;

  selectedItem: MasterDetailItem;

  attached() {
    if (this.manager) {
      this.manager.select = (item) => this.select(item);
    }
  }

  select(item: MasterDetailItem) {
    this.selectedItem = item;
    this.manager && this.manager.setSelectedItem && this.manager.setSelectedItem(item);
  }

  back() {
    let item: MasterDetailItem = this.selectedItem;
    this.selectedItem = null;
    this.manager && this.manager.setSelectedItem && this.manager.setSelectedItem(null);
  }
}
