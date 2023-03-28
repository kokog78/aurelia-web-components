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
exports.DragAndDropPanel = void 0;
var aurelia_framework_1 = require("aurelia-framework");
var DragAndDropPanel = (function () {
    function DragAndDropPanel() {
        this.CONTAINER_CLASS = 'drag-and-drop-cont';
        this.CONTAINER_PROPERTY = 'drag-and-drop-index';
    }
    DragAndDropPanel.prototype.attached = function () {
        var _this = this;
        setTimeout(function () { return _this.initialize(); }, 0);
    };
    DragAndDropPanel.prototype.endDrag = function () {
        this.dragStarted = false;
    };
    DragAndDropPanel.prototype.initialize = function () {
        var _this = this;
        var children = [];
        var element = this.rootElement.firstElementChild;
        while (element) {
            var parent_1 = element;
            var item = element;
            if (item.classList.contains(this.CONTAINER_CLASS)) {
                item = item.firstElementChild;
            }
            children.push(item);
            console.log(item.id);
            element = parent_1.nextElementSibling;
            this.rootElement.removeChild(parent_1);
        }
        var index = 0;
        var _loop_1 = function (child) {
            var childId = child.id;
            var cont = document.createElement('div');
            var attr = document.createAttribute(this_1.CONTAINER_PROPERTY);
            attr.nodeValue = "" + index;
            cont.attributes.setNamedItem(attr);
            cont.classList.add(this_1.CONTAINER_CLASS);
            cont.ondragstart = function (event) {
                _this.dragStarted = true;
                var htmlTarget = event.target;
                _this.startIndex = _this.getDragAndDropIndex(htmlTarget);
                return true;
            };
            cont.ondragover = function (event) { return event.preventDefault(); };
            var dropIndex = index;
            cont.ondrop = function (event) { return _this.drop(event, dropIndex); };
            cont.draggable = true;
            cont.appendChild(child);
            this_1.rootElement.appendChild(cont);
            index++;
        };
        var this_1 = this;
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            _loop_1(child);
        }
    };
    DragAndDropPanel.prototype.drop = function (event, dropIndex) {
        var _this = this;
        if (dropIndex !== this.startIndex) {
            this.sortElements(dropIndex);
            var ids = this.calculateIds();
            this.callback && this.callback({ ids: ids });
            setTimeout(function () { return _this.initialize(); }, 10);
        }
    };
    DragAndDropPanel.prototype.sortElements = function (dropIndex) {
        var dragElement;
        var dragIndex;
        var dropCont;
        var cont = this.rootElement.firstElementChild;
        var prevCont;
        var prevElement;
        while (cont && !(dropCont && dragElement)) {
            var removed = false;
            var element = cont.firstElementChild;
            if (dragElement) {
                cont.removeChild(element);
                prevCont.appendChild(element);
                removed = true;
            }
            else if (dropCont) {
                cont.removeChild(element);
                cont.appendChild(prevElement);
                prevElement = element;
                removed = true;
            }
            var contIndex = this.getDragAndDropIndex(cont);
            if (contIndex === dropIndex) {
                dropCont = cont;
                if (!removed) {
                    cont.removeChild(element);
                }
            }
            else if (contIndex === this.startIndex) {
                dragElement = element;
                if (!removed) {
                    cont.removeChild(element);
                }
            }
            prevCont = cont;
            prevElement = element;
            cont = cont.nextElementSibling;
        }
        dropCont.appendChild(dragElement);
        if (this.items) {
            var item = this.items.splice(dragIndex, 1)[0];
            this.items.splice(dropIndex, 0, item);
        }
    };
    DragAndDropPanel.prototype.calculateIds = function () {
        var result = [];
        var child = this.rootElement.firstElementChild;
        while (child) {
            if (child.classList.contains(this.CONTAINER_CLASS)) {
                var element = child.firstElementChild;
                result.push(element.id);
            }
            child = child.nextElementSibling;
        }
        return result;
    };
    DragAndDropPanel.prototype.getDragAndDropIndex = function (element) {
        return parseInt(element.attributes.getNamedItem(this.CONTAINER_PROPERTY).nodeValue, 10);
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Array)
    ], DragAndDropPanel.prototype, "items", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], DragAndDropPanel.prototype, "vertical", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Function)
    ], DragAndDropPanel.prototype, "callback", void 0);
    return DragAndDropPanel;
}());
exports.DragAndDropPanel = DragAndDropPanel;
