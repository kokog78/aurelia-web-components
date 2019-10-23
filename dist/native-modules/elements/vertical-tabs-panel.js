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
var VerticalTabsPanel = (function () {
    function VerticalTabsPanel() {
    }
    VerticalTabsPanel.prototype.attached = function () {
        if (this.items && this.items.length) {
            var elements = this.getMainElements();
            var index = 0;
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                if (index < elements.length) {
                    item._displayValue = elements[index].style.display;
                }
                index++;
            }
            this.openTab(this.items[0]);
        }
    };
    VerticalTabsPanel.prototype.openTab = function (tab) {
        var elements = this.getMainElements();
        var index = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (index < elements.length) {
                if (item === tab) {
                    elements[index].style.display = item._displayValue;
                    item._active = true;
                }
                else {
                    elements[index].style.display = 'none';
                    item._active = false;
                }
            }
            index++;
        }
        this.callback && this.callback({ item: tab });
    };
    VerticalTabsPanel.prototype.getMainElements = function () {
        var result = [];
        var child = this.mainElement.firstChild;
        while (child) {
            if (child.nodeType === this.mainElement.ELEMENT_NODE) {
                result.push(child);
            }
            child = child.nextSibling;
        }
        return result;
    };
    __decorate([
        bindable,
        __metadata("design:type", Array)
    ], VerticalTabsPanel.prototype, "items", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Function)
    ], VerticalTabsPanel.prototype, "callback", void 0);
    return VerticalTabsPanel;
}());
export { VerticalTabsPanel };
