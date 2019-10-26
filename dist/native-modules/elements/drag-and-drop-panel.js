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
var DragAndDropPanel = (function () {
    function DragAndDropPanel() {
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
        var index = 0;
        var child = this.rootElement.firstElementChild;
        var _loop_1 = function () {
            var childId = child.id;
            child.ondragstart = function (event) {
                _this.dragStarted = true;
                _this.startId = event.target['id'];
                return true;
            };
            child.ondragover = function (event) { return event.preventDefault(); };
            child.ondrop = function (event) { return _this.drop(event, childId); };
            child.draggable = true;
            child = child.nextElementSibling;
            index++;
        };
        while (child) {
            _loop_1();
        }
    };
    DragAndDropPanel.prototype.drop = function (event, dropId) {
        if (dropId !== this.startId) {
            this.sortElements(dropId);
            var ids = this.calculateIds();
            this.callback && this.callback({ ids: ids });
        }
    };
    DragAndDropPanel.prototype.sortElements = function (dropId) {
        var dragElement;
        var dragIndex;
        var dropElement;
        var dropIndex;
        var index = 0;
        var child = this.rootElement.firstElementChild;
        while (child) {
            if (child.id === dropId) {
                dropElement = child;
                dropIndex = index;
            }
            else if (child.id === this.startId) {
                dragElement = child;
                dragIndex = index;
            }
            child = child.nextElementSibling;
            index++;
        }
        this.rootElement.removeChild(dragElement);
        dropElement.before(dragElement);
        if (this.items) {
            var item = this.items.splice(dragIndex, 1)[0];
            this.items.splice(dropIndex, 0, item);
        }
    };
    DragAndDropPanel.prototype.calculateIds = function () {
        var result = [];
        var child = this.rootElement.firstElementChild;
        while (child) {
            if (!child.classList.contains('drop-target')) {
                result.push(child.id);
            }
            child = child.nextElementSibling;
        }
        return result;
    };
    __decorate([
        bindable,
        __metadata("design:type", Array)
    ], DragAndDropPanel.prototype, "items", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Boolean)
    ], DragAndDropPanel.prototype, "vertical", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Function)
    ], DragAndDropPanel.prototype, "callback", void 0);
    return DragAndDropPanel;
}());
export { DragAndDropPanel };
