import {MasterDetailItem} from "../src/elements/master-detail-panel";

export class App {

  collapsibleResult: string;
  buttonResult: string;
  panelResult: string;
  panelOpen: boolean = true;
  overlapOpen: boolean;
  masterDetailResult: string;
  masterDetailItem: MasterDetailItem;
  masterDetailItems: MasterDetailItem[] = [
    {
      caption: 'One',
      html: '<button>1</button>',
      data: 12
    },
    {
      html: '<b>Two</b>',
      data: 34
    },
    {
      caption: 'Three',
      html: '<button>3</button>',
      data: 56
    }
  ];

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
    this.masterDetailResult = `selected: ${item['data']}`;
    this.masterDetailItem = item;
  }

  backToMaster(item: MasterDetailItem) {
    this.masterDetailResult = `unselected: ${item['data']}`;
    this.masterDetailItem = null;
  }
}
