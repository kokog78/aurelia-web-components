import {autoinject, bindable} from 'aurelia-framework';
import {TreeModel, TreeNodeHandler} from "../models/tree";

@autoinject
export class TreePanel {

  @bindable
  nodes: TreeModel;

  @bindable
  selectable: boolean;

  @bindable
  nodeClicked: Function;

  handler: TreeNodeHandler;
  clickable: boolean;

  bind() {
    this.clickable = !!this.nodeClicked;
    this.handler = {
      nodeClicked: (node: TreeModel) => {
        if (this.nodeClicked) {
          this.nodeClicked({node: node});
          return true;
        }
        return false;
      }
    };
  }
}
