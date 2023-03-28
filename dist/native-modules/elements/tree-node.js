var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject, bindable } from 'aurelia-framework';
var TreeNode = (function () {
    function TreeNode() {
    }
    TreeNode.prototype.bind = function () {
        if (this.node.children && this.node.children.length) {
            this.node.parent = true;
        }
        this.level = this.level || 0;
        this.childLevel = this.level + 1;
        this.padding = this.level * 17;
    };
    TreeNode.prototype.reverse = function () {
        this.node.open = !this.node.open;
        this.handler.nodeOpened(this.node);
    };
    TreeNode.prototype.select = function () {
        var _this = this;
        setTimeout(function () { return _this.handler.nodeSelected(_this.node); }, 100);
    };
    TreeNode.prototype.clickLabel = function () {
        var edited = this.handler && this.handler.nodeClicked(this.node);
        if (!edited) {
            if (this.selectable) {
                this.node.selected = !this.node.selected;
                this.handler.nodeSelected(this.node);
            }
            else {
                this.reverse();
            }
        }
    };
    __decorate([
        bindable,
        __metadata("design:type", Object)
    ], TreeNode.prototype, "node", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Boolean)
    ], TreeNode.prototype, "selectable", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Boolean)
    ], TreeNode.prototype, "clickable", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Number)
    ], TreeNode.prototype, "level", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Object)
    ], TreeNode.prototype, "handler", void 0);
    TreeNode = __decorate([
        autoinject
    ], TreeNode);
    return TreeNode;
}());
export { TreeNode };
