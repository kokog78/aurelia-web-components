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
  startIndex: number;

  readonly CONTAINER_CLASS = 'drag-and-drop-cont';
  readonly CONTAINER_PROPERTY = 'drag-and-drop-index';

  attached() {
    setTimeout(() => this.initialize(), 0);
  }

  endDrag() {
    this.dragStarted = false;
  }

  initialize() {
    let children: HTMLElement[] = [];
    let element: HTMLElement = <HTMLElement>this.rootElement.firstElementChild;
    while (element) {
      let parent = element;
      let item = element;
      if (item.classList.contains(this.CONTAINER_CLASS)) {
        item = <HTMLElement>item.firstElementChild;
      }
      children.push(item);
      console.log(item.id);
      element = <HTMLElement>parent.nextElementSibling;
      this.rootElement.removeChild(parent);
    }
    let index: number = 0;
    for (let child of children) {
      let childId = child.id;
      let cont = document.createElement('div');
      let attr = document.createAttribute(this.CONTAINER_PROPERTY);
      attr.nodeValue = `${index}`;
      cont.attributes.setNamedItem(attr);
      cont.classList.add(this.CONTAINER_CLASS);
      cont.ondragstart = (event: Event) => {
        this.dragStarted = true;
        let htmlTarget = <HTMLElement>event.target;
        this.startIndex = this.getDragAndDropIndex(htmlTarget);
        return true;
      };
      cont.ondragover = (event: Event) => event.preventDefault();
      let dropIndex = index;
      cont.ondrop = (event: DragEvent) => this.drop(event, dropIndex);
      cont.draggable = true;
      cont.appendChild(child);
      this.rootElement.appendChild(cont);
      index++;
    }
  }

  private drop(event: DragEvent, dropIndex: number) {
    if (dropIndex !== this.startIndex) {
      this.sortElements(dropIndex);
      let ids: string[] = this.calculateIds();
      this.callback && this.callback({ids: ids});
      setTimeout(() => this.initialize(), 10);
    }
  }

  private sortElements(dropIndex: number) {
    let dragElement: HTMLElement;
    let dragIndex: number;
    let dropCont: HTMLElement;
    let cont: HTMLElement = <HTMLElement>this.rootElement.firstElementChild;
    let prevCont: HTMLElement;
    let prevElement: HTMLElement;
    while (cont && !(dropCont && dragElement)) {
      let removed = false;
      let element: HTMLElement = <HTMLElement>cont.firstElementChild;
      if (dragElement) {
        // balról jobbra húztunk
        cont.removeChild(element);
        prevCont.appendChild(element);
        removed = true;
      } else if (dropCont) {
        // jobbról balra húztunk
        cont.removeChild(element);
        cont.appendChild(prevElement);
        prevElement = element;
        removed = true;
      }
      let contIndex = this.getDragAndDropIndex(cont);
      if (contIndex === dropIndex) {
        dropCont = cont;
        if (!removed) {
          cont.removeChild(element);
        }
      } else if (contIndex === this.startIndex) {
        dragElement = element;
        if (!removed) {
          cont.removeChild(element);
        }
      }
      prevCont = cont;
      prevElement = element;
      cont = <HTMLElement>cont.nextElementSibling;
    }
    dropCont.appendChild(dragElement);
    if (this.items) {
      let item = this.items.splice(dragIndex, 1)[0];
      this.items.splice(dropIndex,0, item);
    }
  }

  private calculateIds(): string[] {
    let result: string[] = [];
    let child: HTMLElement = <HTMLElement>this.rootElement.firstElementChild;
    while (child) {
      if (child.classList.contains(this.CONTAINER_CLASS)) {
        let element = child.firstElementChild;
        result.push(element.id);
      }
      child = <HTMLElement>child.nextElementSibling;
    }
    return result;
  }

  private getDragAndDropIndex(element: HTMLElement) {
    return parseInt(element.attributes.getNamedItem(this.CONTAINER_PROPERTY).nodeValue, 10);
  }

}
