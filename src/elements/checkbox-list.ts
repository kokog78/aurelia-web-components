import {bindable} from 'aurelia-framework';

export class CheckboxList {

  @bindable
  values: any[];

  @bindable
  selectedValues: any[];

  @bindable
  labelField: string;

  @bindable
  selectedField: string;

  @bindable
  callback: Function;

  selectionItems: any[] = [];

  label(value: any): string {
    if (this.labelField) {
      return value[this.labelField];
    } else {
      return `${value}`;
    }
  }

  selection(index: number) {
    let selectionItem = this.selectionItems[index];
    if (!selectionItem) {
      let values: any[] = this.values;
      this.selectedValues = this.selectedValues || [];
      let selectedValues: any[] = this.selectedValues;
      let selectedField: string = this.selectedField;
      selectionItem = {
        get selected(): boolean {
          let item = values && values[index];
          return item && selectedValues.indexOf(item) >= 0;
        },
        set selected(s: boolean) {
          let item = values[index];
          if (selectedField) {
            item[selectedField] = s;
          }
          let pos: number = selectedValues.indexOf(item);
          if (s) {
            if (pos < 0) {
              selectedValues.push(item);
            }
          } else {
            if (pos >= 0) {
              selectedValues.splice(pos, 1);
            }
          }
        }
      };
      this.selectionItems[index] = selectionItem;
    }
    return selectionItem;
  }

  clickCheckbox(index: number) {
    this.callback && this.callback({index});
    return true;
  }
}
