import {bindable} from 'aurelia-framework';

export class CheckboxList {

  @bindable
  values: boolean[];

  @bindable
  labels: string[];

  @bindable
  callback: Function;

  bind() {
    this.labels = this.labels || [];
    this.values = this.values || [];
    while (this.values.length < this.labels.length) {
      this.values.push(false);
    }
  }

  clickCheckbox(index: number) {
    this.callback && this.callback({index});
    return true;
  }
}
