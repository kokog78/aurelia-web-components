"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_templating_1 = require("aurelia-templating");
var MasterDetailPanel = (function () {
    function MasterDetailPanel() {
    }
    MasterDetailPanel.prototype.attached = function () {
        this.selected = (this.selectedIndex !== undefined && this.selectedIndex >= 0);
    };
    MasterDetailPanel.prototype.select = function (item, index) {
        this.selectedIndex = index;
        this.selectedItem = item;
        this.selected = true;
        this.selectCallback && this.selectCallback({ item: item, index: index });
    };
    MasterDetailPanel.prototype.back = function () {
        var index = this.selectedIndex;
        this.selectedIndex = -1;
        this.selectedItem = null;
        this.selected = false;
        this.backCallback && this.backCallback({ index: index });
    };
    __decorate([
        aurelia_templating_1.bindable,
        __metadata("design:type", String)
    ], MasterDetailPanel.prototype, "caption", void 0);
    __decorate([
        aurelia_templating_1.bindable,
        __metadata("design:type", Array)
    ], MasterDetailPanel.prototype, "items", void 0);
    __decorate([
        aurelia_templating_1.bindable,
        __metadata("design:type", Number)
    ], MasterDetailPanel.prototype, "selectedIndex", void 0);
    __decorate([
        aurelia_templating_1.bindable,
        __metadata("design:type", Function)
    ], MasterDetailPanel.prototype, "selectCallback", void 0);
    __decorate([
        aurelia_templating_1.bindable,
        __metadata("design:type", Function)
    ], MasterDetailPanel.prototype, "backCallback", void 0);
    return MasterDetailPanel;
}());
exports.MasterDetailPanel = MasterDetailPanel;
