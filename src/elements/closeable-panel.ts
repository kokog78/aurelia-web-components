import {bindable} from 'aurelia-framework';

export class CloseablePanel {

  @bindable
  open: boolean;

  @bindable
  caption: string;

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
