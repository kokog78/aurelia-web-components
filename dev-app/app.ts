import {MasterDetailItem} from "../src/models/master-detail-item";
import {Tab} from "../src/models/tab";

interface Item extends MasterDetailItem {
  data: number;
}

export class App {

  collapsibleResult: string;
  buttonResult: string;
  panelResult: string;
  panelOpen: boolean = true;
  overlapOpen: boolean;

  masterDetailResult: string;
  masterDetailItem: Item;
  masterDetailItemName: string;
  masterDetailItems: Item[] = [];

  verticalTabsResult: string;
  tabs: Tab[] = [];

  checkboxResult: string;
  checkboxValues: boolean[] = [false, true, false];
  checkboxLabels: string[] = ['Label One', 'Label Two', 'Label Three'];

  attached() {
    this.addMasterDetailItem('1.json');
    this.addMasterDetailItem('2.json');
    this.addMasterDetailItem('3.json');
    this.addTab('Tab 1');
    this.addTab('Tab 2');
    this.addTab('Tab 3');
  }

  collapsibleCallback(open: boolean, index: number) {
    this.collapsibleResult = `Collapsible #${index}: ${open}`;
  }

  buttonXCallback() {
    this.buttonResult = 'closed';
  }

  closeablePanelCallback() {
    this.panelResult = 'closed';
  }

  showOverlap() {
    this.overlapOpen = true;
  }

  selectDetail(item: Item) {
    this.masterDetailItem = item;
    if (item) {
      this.masterDetailResult = `selected: ${item['data']}`;
    } else {
      this.masterDetailResult = `no selection`;
    }
  }

  addMasterDetailItem(caption: string) {
    let item: Item = {
      caption: caption,
      html: '<i>test test test</i>',
      actions: [
        {
          title: 'Delete row',
          html: '<b>D</b>elete',
          className: 'red',
          callback: () => this.deleteMasterDetailItem(item)
        }
      ],
      data: this.masterDetailItems.length * 10
    };
    this.masterDetailItems.push(item);
  }

  addTab(caption: string) {
    let tab: Tab = {
      caption: caption
    };
    this.tabs.push(tab);
  }

  tabOpened(item: Tab) {
    this.verticalTabsResult = item.caption;
  }

  checkboxClicked(index: number) {
    this.checkboxResult = `clicked: ${index}, value: ${this.checkboxValues[index]}`;
  }

  addCheckbox() {
    let size = this.checkboxValues.length;
    this.checkboxValues.push(false);
    this.checkboxLabels.push(`Value #${size}`);
  }

  private deleteMasterDetailItem(deletedItem: Item) {
    this.masterDetailItems = this.masterDetailItems.filter(item => item != deletedItem);
  }
}
