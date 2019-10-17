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
var Collapsible = (function () {
    function Collapsible() {
    }
    Collapsible.prototype.bind = function (bindingContext) {
        this.parent = bindingContext;
        if (this.group) {
            this.parent[this.group] = this.parent[this.group] || [];
            this.parent[this.group].push(this);
        }
    };
    Collapsible.prototype.onClick = function () {
        var _this = this;
        this.open = !this.open;
        this.callback && this.callback({ open: this.open });
        if (this.open && this.group) {
            this.parent[this.group].forEach(function (item) {
                if (item !== _this) {
                    item.open = false;
                }
            });
        }
    };
    __decorate([
        bindable,
        __metadata("design:type", String)
    ], Collapsible.prototype, "caption", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Function)
    ], Collapsible.prototype, "callback", void 0);
    __decorate([
        bindable,
        __metadata("design:type", String)
    ], Collapsible.prototype, "group", void 0);
    return Collapsible;
}());
export { Collapsible };
