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
exports.CloseablePanel = void 0;
var aurelia_framework_1 = require("aurelia-framework");
var CloseablePanel = (function () {
    function CloseablePanel() {
    }
    CloseablePanel.prototype.attached = function () {
        if (this.open === undefined) {
            this.open = true;
        }
    };
    CloseablePanel.prototype.closePanel = function () {
        this.open = false;
        this.callback && this.callback();
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], CloseablePanel.prototype, "open", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], CloseablePanel.prototype, "caption", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Function)
    ], CloseablePanel.prototype, "callback", void 0);
    return CloseablePanel;
}());
exports.CloseablePanel = CloseablePanel;
