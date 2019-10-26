import {bindable} from 'aurelia-framework';
import {initializableViewModel} from "../models/view-models";

export class DragAndDropPanel implements initializableViewModel {

  @bindable
  items: any[];

  @bindable
  vertical: boolean;

  @bindable
  callback: Function;

  rootElement: HTMLElement;
  dragStarted: boolean;
  startId: string;

  attached() {
    setTimeout(() => this.initialize(), 0);
  }

  endDrag() {
    this.dragStarted = false;
  }

  initialize() {
    let index: number = 0;
    let child: HTMLElement = <HTMLElement>this.rootElement.firstElementChild;
    while (child) {
      let childId = child.id;
      child.ondragstart = (event: Event) => {
        this.dragStarted = true;
        this.startId = event.target['id'];
        return true;
      };
      child.ondragover = (event: Event) => event.preventDefault();
      child.ondrop = (event: DragEvent) => this.drop(event, childId);
      child.draggable = true;
      child = <HTMLElement>child.nextElementSibling;
      index++;
    }
  }

  private drop(event: DragEvent, dropId: string) {
    if (dropId !== this.startId) {
      this.sortElements(dropId);
      let ids: string[] = this.calculateIds();
      this.callback && this.callback({ids: ids});
      setTimeout(() => this.initialize(), 10);
    }
  }

  private sortElements(dropId: string) {
    let dragElement: HTMLElement;
    let dragIndex: number;
    let dropElement: HTMLElement;
    let dropIndex: number;
    let index = 0;
    let child: HTMLElement = <HTMLElement>this.rootElement.firstElementChild;
    while (child) {
      if (child.id === dropId) {
        dropElement = child;
        dropIndex = index;
      } else if (child.id === this.startId) {
        dragElement = child;
        dragIndex = index;
      }
      child = <HTMLElement>child.nextElementSibling;
      index++;
    }
    this.rootElement.removeChild(dragElement);
    dropElement.before(dragElement);
    if (this.items) {
      let item = this.items.splice(dragIndex, 1)[0];
      this.items.splice(dropIndex,0, item);
    }
  }

  private calculateIds(): string[] {
    let result: string[] = [];
    let child: HTMLElement = <HTMLElement>this.rootElement.firstElementChild;
    while (child) {
      if (!child.classList.contains('drop-target')) {
        result.push(child.id);
      }
      child = <HTMLElement>child.nextElementSibling;
    }
    return result;
  }

}
