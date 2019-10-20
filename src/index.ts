import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./models/ib-action'),
    PLATFORM.moduleName('./models/ib-item'),
    PLATFORM.moduleName('./elements/close-button'),
    PLATFORM.moduleName('./elements/closeable-panel'),
    PLATFORM.moduleName('./elements/collapsible-panel'),
    PLATFORM.moduleName('./elements/overlap-panel'),
    PLATFORM.moduleName('./elements/master-detail-panel')
  ]);
}
