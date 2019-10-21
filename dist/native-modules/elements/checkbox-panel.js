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
var CheckboxPanel = (function () {
    function CheckboxPanel() {
    }
    CheckboxPanel.prototype.attached = function () {
        this.columns = this.columns || 3;
        var gtc = '';
        for (var i = 0; i < this.columns; i++) {
            gtc += ' 1fr';
        }
        this.container.style.gridTemplateColumns = gtc;
    };
    CheckboxPanel.prototype.clickCheckbox = function (index) {
        this.callback && this.callback({ index: index });
        return true;
    };
    __decorate([
        bindable,
        __metadata("design:type", Number)
    ], CheckboxPanel.prototype, "columns", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Array)
    ], CheckboxPanel.prototype, "values", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Array)
    ], CheckboxPanel.prototype, "labels", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Function)
    ], CheckboxPanel.prototype, "callback", void 0);
    return CheckboxPanel;
}());
export { CheckboxPanel };
