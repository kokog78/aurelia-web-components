"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
var aurelia_pal_1 = require("aurelia-pal");
function configure(config) {
    config.globalResources([
        aurelia_pal_1.PLATFORM.moduleName('./elements/close-button'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/closeable-panel'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/collapsible-panel'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/overlap-panel'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/master-detail-panel'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/vertical-tabs-panel'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/checkbox-panel'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/checkbox-list'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/drag-and-drop-panel'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/tree-node'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/tree-panel')
    ]);
}
exports.configure = configure;
