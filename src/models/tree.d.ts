export interface TreeModel {
  open?: boolean;
  selected?: boolean;
  title?: string;
  titleKey?: string;
  children?: TreeModel[];
}

export interface TreeNodeHandler {
  nodeClicked: (node: TreeModel) => boolean;
}
