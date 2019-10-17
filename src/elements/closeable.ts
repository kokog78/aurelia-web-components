import {computedFrom, bindable} from 'aurelia-framework';

export class Closeable {

  @bindable
  open: boolean;

  @bindable
  callback: Function;

  attached() {
    if (this.open === undefined) {
      this.open = true;
    }
  }

  closePanel() {
    this.open = false;
    this.callback && this.callback();
  }
}
