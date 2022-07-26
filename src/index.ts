import {
  ILayoutRestorer,
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { logoIcon } from './style/icons';
import {SimKWidget} from "./widgets/SimKWidget";
import {ISettingRegistry} from "@jupyterlab/settingregistry";


/**
 * Initialization data for the simK extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'simK:plugin',
  autoStart: true,
  activate,

};

export default plugin;

async function activate (
    app: JupyterFrontEnd,
    settingRegistry: ISettingRegistry,
    restorer: ILayoutRestorer) {
  // let settings: ISettingRegistry.ISettings;

  // settings = await settingRegistry.load(plugin.id);


  console.log('JupyterLab extension simK is activated!');

  const simKPlugin = new SimKWidget(
      // settings
  );
  simKPlugin.id = 'jp-simK-sessions';
  simKPlugin.title.icon = logoIcon;
  simKPlugin.title.caption = 'simK';

  // restorer.add(simKPlugin, "simK-session");

  app.shell.add(simKPlugin, 'left', { rank: 200 });
}