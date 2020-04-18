import {inject} from 'aurelia-dependency-injection';
import {Project, ProjectItem, CLIOptions, UI} from 'aurelia-cli';

@inject(Project, CLIOptions, UI)
export default class PanelGenerator {

  project: Project;
  options: CLIOptions;
  ui: UI;

  constructor(project, options, ui) {
    this.project = project;
    this.options = options;
    this.ui = ui;
  }

  execute() {
    return this.ui
      .ensureAnswer(this.options.args[0], 'What would you like to call the new panel (HTML name)?')
      .then(name => {
        let fileName = this.project.makeFileName(name);
        let className = this.project.makeClassName(name);

        this.project.elements.add(
          ProjectItem.text(`${fileName}.ts`, this.generateSource(className)),
          ProjectItem.text(`${fileName}.html`, this.generateHTMLSource(fileName)),
          ProjectItem.text(`${fileName}.scss`, this.generateSCSS(fileName))
        );

        return this.project.commitChanges()
          .then(() => this.ui.log(`Created ${fileName}.`));
      });
  }

  generateSource(className) {
return `import {autoinject, bindable} from 'aurelia-framework';

@autoinject
export class ${className} {

  @bindable
  value: any;

  constructor() {
    // TODO
  }
}
`
  }

  generateHTMLSource(className) {
    return `<template>
  <require from="./${className}.css"></require>
  
  <h1>\${value}</h1>
</template>
`;
  }

  generateSCSS(className) {
    return `${className} {
  display: block;
 }`;
  }
}
