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

  attached() {
    this.addMasterDetailItem('1.json');
    this.addMasterDetailItem('2.json');
    this.addMasterDetailItem('3.json');
    this.addTab('Tab 1', 'tab1');
    this.addTab('Tab 2', 'tab2');
    this.addTab('Tab 3', 'tab3');
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

  addTab(caption: string, id: string) {
    let tab: Tab = {
      caption: caption,
      id: id
    };
    this.tabs.push(tab);
  }

  tabOpened(item: Tab) {
    this.verticalTabsResult = item.caption;
  }

  private deleteMasterDetailItem(deletedItem: Item) {
    this.masterDetailItems = this.masterDetailItems.filter(item => item != deletedItem);
  }
}
