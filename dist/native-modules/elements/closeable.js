var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable } from 'aurelia-framework';
var Closeable = (function () {
    function Closeable() {
    }
    Closeable.prototype.attached = function () {
        if (this.open === undefined) {
            this.open = true;
        }
    };
    Closeable.prototype.closePanel = function () {
        this.open = false;
        this.callback && this.callback();
    };
    __decorate([
        bindable,
        __metadata("design:type", Boolean)
    ], Closeable.prototype, "open", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Function)
    ], Closeable.prototype, "callback", void 0);
    return Closeable;
}());
export { Closeable };
