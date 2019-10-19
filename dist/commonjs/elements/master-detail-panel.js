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
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_templating_1 = require("aurelia-templating");
var MasterDetailPanel = (function () {
    function MasterDetailPanel() {
    }
    Object.defineProperty(MasterDetailPanel.prototype, "selected", {
        get: function () {
            return this.selectedItem != null;
        },
        enumerable: true,
        configurable: true
    });
    MasterDetailPanel.prototype.select = function (item) {
        this.selectedItem = item;
        this.selectCallback && this.selectCallback({ item: item });
    };
    MasterDetailPanel.prototype.back = function () {
        var item = this.selectedItem;
        this.selectedItem = null;
        this.backCallback && this.backCallback({ item: item });
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
        __metadata("design:type", Object)
    ], MasterDetailPanel.prototype, "selectedItem", void 0);
    __decorate([
        aurelia_templating_1.bindable,
        __metadata("design:type", Function)
    ], MasterDetailPanel.prototype, "selectCallback", void 0);
    __decorate([
        aurelia_templating_1.bindable,
        __metadata("design:type", Function)
    ], MasterDetailPanel.prototype, "backCallback", void 0);
    __decorate([
        aurelia_framework_1.computedFrom('selectedItem'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], MasterDetailPanel.prototype, "selected", null);
    return MasterDetailPanel;
}());
exports.MasterDetailPanel = MasterDetailPanel;
