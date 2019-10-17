import {bindable} from 'aurelia-framework';

export class Collapsible {

  @bindable
  caption: string;

  @bindable
  callback: Function;

  @bindable
  group: string;

  open: boolean;

  private parent: any;

  bind(bindingContext) {
    this.parent = bindingContext;
    if (this.group) {
      this.parent[this.group] = this.parent[this.group] || [];
      this.parent[this.group].push(this);
    }
  }

  onClick() {
    this.open = !this.open;
    this.callback && this.callback({open: this.open});
    if (this.open && this.group) {
      this.parent[this.group].forEach(item => {
        if (item !== this) {
          item.open = false;
        }
      });
    }
  }

}
