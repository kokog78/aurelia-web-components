import { PLATFORM } from 'aurelia-pal';
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./elements/close-button'),
        PLATFORM.moduleName('./elements/closeable-panel'),
        PLATFORM.moduleName('./elements/collapsible-panel'),
        PLATFORM.moduleName('./elements/overlap-panel'),
        PLATFORM.moduleName('./elements/master-detail-panel'),
        PLATFORM.moduleName('./elements/vertical-tabs-panel'),
        PLATFORM.moduleName('./elements/checkbox-panel'),
        PLATFORM.moduleName('./elements/checkbox-list'),
        PLATFORM.moduleName('./elements/drag-and-drop-panel'),
        PLATFORM.moduleName('./elements/tree-node'),
        PLATFORM.moduleName('./elements/tree-panel')
    ]);
}
