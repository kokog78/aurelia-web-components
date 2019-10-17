import { PLATFORM } from 'aurelia-pal';
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./elements/close-button'),
        PLATFORM.moduleName('./elements/closeable'),
        PLATFORM.moduleName('./elements/collapsible')
    ]);
}
