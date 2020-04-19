import {MasterDetailItem} from "../src/models/master-detail-item";
import {Tab} from "../src/models/tab";
import {DragAndDropPanel} from "../src/elements/drag-and-drop-panel";
import {TreeModel} from "../src/models/tree";

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

  checkboxListResult: string;
  checkboxListItems: any[] = [
    {
      label: 'Label One'
    },
    {
      label: 'Label Two'
    },
    {
      label: 'Label Three'
    }
  ];
  checkboxListSelectedItems: any[] = [];
  checkboxListStrings: string[] = ['Label1', 'Label2', 'Label3'];
  checkboxListSelectedStrings: string[] = [];

  dragAndDropResult: string;
  dragAndDropItems: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  dragAndDropModel: DragAndDropPanel;

  treeNodes: TreeModel[] = [
    {
      title: 'Node #1',
      subtitle: "a subtitle",
      tooltip: "Tooltip #1"
    },
    {
      title: 'Node #2',
      children: [
        {
          title: "Node #3",
          subtitle: "something",
          children: [
            {
              title: "Node #4",
              parent: true
            },
            {
              title: "Node #5",
              tooltip: "Tooltip #5"
            }
          ]
        }
      ]
    }
  ];

  treeResult: string;

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

  checkboxListClicked(index: number) {
    let content1: string = this.checkboxListSelectedItems
      .map(i => i.label)
      .join(', ');
    let content2: string = this.checkboxListSelectedStrings.join(', ');
    this.checkboxListResult = `clicked: ${index}, selected: ${content1}, ${content2}`;
  }

  addCheckboxToList() {
    this.checkboxListItems.push({
      label: `Label #${this.checkboxListItems.length}`
    });
    this.checkboxListStrings.push(`Label #${this.checkboxListStrings.length}`);
  }

  addDragAndDrop() {
    this.dragAndDropItems.push(`${this.dragAndDropItems.length + 1}`);
    setTimeout(() => this.dragAndDropModel.initialize(), 0);
  }

  dragAndDropFinished(ids: string[]) {
    this.dragAndDropResult = ids.join(', ');
  }

  clickTreeNode(node: TreeModel) {
    this.treeResult = 'clicked: ' + node.title;
  }

  openTreeNode(node: TreeModel) {
    if (node.open) {
      this.treeResult = 'opened: ' + node.title;
    } else {
      this.treeResult = 'closed: ' + node.title;
    }
  }

  selectTreeNode(node: TreeModel) {
    if (node.selected) {
      this.treeResult = 'selected: ' + node.title;
    } else {
      this.treeResult = 'unselected: ' + node.title;
    }
  }

  private deleteMasterDetailItem(deletedItem: Item) {
    this.masterDetailItems = this.masterDetailItems.filter(item => item != deletedItem);
  }
}
