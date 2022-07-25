import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the simK extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'simK:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension simK is activated!');
  }
};

export default plugin;
