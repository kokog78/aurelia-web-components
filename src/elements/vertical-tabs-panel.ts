import {bindable} from 'aurelia-framework';
import {Tab} from "../models/tab";

export class VerticalTabsPanel {

  @bindable
  tabs: Tab[];

  @bindable
  callback: Function;

  mainElement: Element;

  attached() {
    if (this.tabs && this.tabs.length) {
      let elements = this.getMainElements();
      let index = 0;
      for (let item of this.tabs) {
        if (index < elements.length) {
          item._displayValue = elements[index].style.display;
        }
        index++;
      }
      this.openTab(this.tabs[0]);
    }
  }

  openTab(tab: Tab) {
    let elements = this.getMainElements();
    let index = 0;
    for (let item of this.tabs) {
      if (index < elements.length) {
        if (item === tab) {
          elements[index].style.display = item._displayValue;
        } else {
          elements[index].style.display = 'none';
        }
      }
      index++;
    }
    this.callback && this.callback({item: tab});
  }

  private getMainElements(): HTMLElement[] {
    let result: HTMLElement[] = [];
    let child = this.mainElement.firstChild;
    while (child) {
      if (child.nodeType === this.mainElement.ELEMENT_NODE) {
        result.push(<HTMLElement>child);
      }
      child = child.nextSibling;
    }
    return result;
  }

}
