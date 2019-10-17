import {bindable} from 'aurelia-framework';

export class CloseButton {

  @bindable
  callback: Function;

  onClick() {
    this.callback && this.callback();
  }
}
