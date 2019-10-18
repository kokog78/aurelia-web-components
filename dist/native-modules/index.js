import { PLATFORM } from 'aurelia-pal';
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./elements/close-button'),
        PLATFORM.moduleName('./elements/closeable-panel'),
        PLATFORM.moduleName('./elements/collapsible-panel')
    ]);
}