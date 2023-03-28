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
var CheckboxList = (function () {
    function CheckboxList() {
        this.selectionItems = [];
    }
    CheckboxList.prototype.label = function (value) {
        if (this.labelField) {
            return value[this.labelField];
        }
        else {
            return "" + value;
        }
    };
    CheckboxList.prototype.selection = function (index) {
        var selectionItem = this.selectionItems[index];
        if (!selectionItem) {
            var values_1 = this.values;
            this.selectedValues = this.selectedValues || [];
            var selectedValues_1 = this.selectedValues;
            var selectedField_1 = this.selectedField;
            selectionItem = {
                get selected() {
                    var item = values_1 && values_1[index];
                    return item && selectedValues_1.indexOf(item) >= 0;
                },
                set selected(s) {
                    var item = values_1[index];
                    if (selectedField_1) {
                        item[selectedField_1] = s;
                    }
                    var pos = selectedValues_1.indexOf(item);
                    if (s) {
                        if (pos < 0) {
                            selectedValues_1.push(item);
                        }
                    }
                    else {
                        if (pos >= 0) {
                            selectedValues_1.splice(pos, 1);
                        }
                    }
                }
            };
            this.selectionItems[index] = selectionItem;
        }
        return selectionItem;
    };
    CheckboxList.prototype.clickCheckbox = function (index) {
        this.callback && this.callback({ index: index });
        return true;
    };
    __decorate([
        bindable,
        __metadata("design:type", Array)
    ], CheckboxList.prototype, "values", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Array)
    ], CheckboxList.prototype, "selectedValues", void 0);
    __decorate([
        bindable,
        __metadata("design:type", String)
    ], CheckboxList.prototype, "labelField", void 0);
    __decorate([
        bindable,
        __metadata("design:type", String)
    ], CheckboxList.prototype, "selectedField", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Function)
    ], CheckboxList.prototype, "callback", void 0);
    return CheckboxList;
}());
export { CheckboxList };
