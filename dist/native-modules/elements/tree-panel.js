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
var TreePanel = (function () {
    function TreePanel() {
    }
    TreePanel.prototype.bind = function () {
        var _this = this;
        this.clickable = !!this.nodeClicked;
        this.handler = {
            nodeClicked: function (node) {
                if (_this.nodeClicked) {
                    if (_this.clickedNode) {
                        _this.clickedNode.clicked = false;
                    }
                    _this.clickedNode = node;
                    node.clicked = true;
                    _this.nodeClicked({ node: node });
                    return true;
                }
                return false;
            },
            nodeSelected: function (node) {
                if (_this.nodeSelected) {
                    _this.nodeSelected({ node: node });
                    return true;
                }
                return false;
            },
            nodeOpened: function (node) {
                if (_this.nodeOpened) {
                    _this.nodeOpened({ node: node });
                    return true;
                }
                return false;
            }
        };
    };
    __decorate([
        bindable,
        __metadata("design:type", Object)
    ], TreePanel.prototype, "nodes", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Boolean)
    ], TreePanel.prototype, "selectable", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Function)
    ], TreePanel.prototype, "nodeClicked", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Function)
    ], TreePanel.prototype, "nodeSelected", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Function)
    ], TreePanel.prototype, "nodeOpened", void 0);
    TreePanel = __decorate([
        autoinject
    ], TreePanel);
    return TreePanel;
}());
export { TreePanel };
