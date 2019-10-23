import {bindable} from 'aurelia-framework';
import {Tab} from "../models/tab";

export class VerticalTabsPanel {

  @bindable
  items: Tab[];

  @bindable
  callback: Function;

  mainElement: Element;

  attached() {
    if (this.items && this.items.length) {
      let elements = this.getMainElements();
      let index = 0;
      for (let item of this.items) {
        if (index < elements.length) {
          item._displayValue = elements[index].style.display;
        }
        index++;
      }
      this.openTab(this.items[0]);
    }
  }

  openTab(tab: Tab) {
    let elements = this.getMainElements();
    let index = 0;
    for (let item of this.items) {
      if (index < elements.length) {
        if (item === tab) {
          elements[index].style.display = item._displayValue;
          item._active = true;
        } else {
          elements[index].style.display = 'none';
          item._active = false;
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
