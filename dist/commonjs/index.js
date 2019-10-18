"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_pal_1 = require("aurelia-pal");
function configure(config) {
    config.globalResources([
        aurelia_pal_1.PLATFORM.moduleName('./elements/close-button'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/closeable-panel'),
        aurelia_pal_1.PLATFORM.moduleName('./elements/collapsible-panel')
    ]);
}
exports.configure = configure;