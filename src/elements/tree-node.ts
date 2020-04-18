import {autoinject, bindable} from 'aurelia-framework';
import {TreeModel, TreeNodeHandler} from "../models/tree";

@autoinject
export class TreeNode {

  @bindable
  node: TreeModel;

  @bindable
  selectable: boolean;

  @bindable
  clickable: boolean;

  @bindable
  level: number;

  @bindable
  handler: TreeNodeHandler;

  padding: number;
  childLevel: number;

  bind() {
    if (this.node.children && this.node.children.length) {
      this.node.parent = true;
    }
    this.level = this.level || 0;
    this.childLevel = this.level + 1;
    this.padding = this.level * 17;
  }

  reverse() {
    this.node.open = !this.node.open;
    this.handler.nodeOpened(this.node);
  }

  select() {
    setTimeout(() => this.handler.nodeSelected(this.node), 100);
  }

  clickLabel() {
    let edited = this.handler && this.handler.nodeClicked(this.node);
    if (!edited) {
      if (this.selectable) {
        this.node.selected = !this.node.selected;
        this.handler.nodeSelected(this.node);
      } else {
        this.reverse();
      }
    }
  }
}
