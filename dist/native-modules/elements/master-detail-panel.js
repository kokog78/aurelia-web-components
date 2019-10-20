var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable } from "aurelia-templating";
var MasterDetailPanel = (function () {
    function MasterDetailPanel() {
    }
    MasterDetailPanel.prototype.select = function (item) {
        this.selectedItem = item;
        this.callback && this.callback({ item: item });
    };
    MasterDetailPanel.prototype.runAction = function (action) {
        action.callback && action.callback();
    };
    __decorate([
        bindable,
        __metadata("design:type", String)
    ], MasterDetailPanel.prototype, "caption", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Array)
    ], MasterDetailPanel.prototype, "items", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Function)
    ], MasterDetailPanel.prototype, "callback", void 0);
    return MasterDetailPanel;
}());
export { MasterDetailPanel };
