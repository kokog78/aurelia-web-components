import {bindable, computedFrom} from 'aurelia-framework';

export class CheckboxPanel {

  @bindable
  columns: number;

  @bindable
  values: boolean[];

  @bindable
  labels: string[];

  @bindable
  callback: Function;

  container: HTMLElement;

  attached() {
    this.columns = this.columns || 3;
    let gtc = '';
    for (let i=0; i < this.columns; i++) {
      gtc += ' 1fr';
    }
    this.container.style.gridTemplateColumns = gtc;
  }

  clickCheckbox(index: number) {
    console.log(this.values);
    this.callback && this.callback({index});
    return true;
  }

}
