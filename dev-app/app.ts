import {MasterDetailItem} from "../src/elements/master-detail-panel";

export class App {

  collapsibleResult: string;
  buttonResult: string;
  panelResult: string;
  panelOpen: boolean = true;
  overlapOpen: boolean;
  masterDetailResult: string;
  masterDetailItem: MasterDetailItem;
  masterDetailItemName: string;
  masterDetailItems: MasterDetailItem[] = [];

  attached() {
    this.addMasterDetailItem('1.json');
    this.addMasterDetailItem('2.json');
    this.addMasterDetailItem('3.json');
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

  selectDetail(item: MasterDetailItem) {
    this.masterDetailItem = item;
    if (item) {
      this.masterDetailResult = `selected: ${item['data']}`;
    } else {
      this.masterDetailResult = `no selection`;
    }
  }

  addMasterDetailItem(caption: string) {
    let item: MasterDetailItem = {
      caption: caption,
      html: '<i>test test test</i>',
      actions: [
        {
          caption: 'Delete',
          className: 'red',
          callback: () => this.deleteMasterDetailItem(item)
        }
      ],
      data: this.masterDetailItems.length * 10
    };
    this.masterDetailItems.push(item);
  }

  private deleteMasterDetailItem(deletedItem: MasterDetailItem) {
    this.masterDetailItems = this.masterDetailItems.filter(item => item != deletedItem);
  }
}
