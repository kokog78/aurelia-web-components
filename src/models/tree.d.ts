export interface TreeModel {
  open?: boolean;
  selected?: boolean;
  title?: string;
  tooltip?: string;
  parent?: boolean;
  children?: TreeModel[];
}

export interface TreeNodeHandler {
  nodeClicked: (node: TreeModel) => boolean;
  nodeSelected: (node: TreeModel) => boolean;
  nodeOpened: (node: TreeModel) => boolean;
}
