import {
    ILayoutRestorer,
    JupyterFrontEnd,
    JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { sidebarIcon } from './style/icons';
import { ConfigWidget } from "./components/ConfigWidget";
import { ISettingRegistry } from "@jupyterlab/settingregistry";

const sidebar: JupyterFrontEndPlugin<any> = {
    id: 'simK:sidebar',
    autoStart: true,
    activate: async (app: JupyterFrontEnd,
                     settingRegistry: ISettingRegistry,
                     restorer: ILayoutRestorer) => {
        console.log('JupyterLab extension simK is activated!');

        const simKPlugin = new ConfigWidget(
            // settings
        );
        simKPlugin.id = 'jp-simK-sessions';
        simKPlugin.title.icon = sidebarIcon;
        simKPlugin.title.caption = 'simK';

        // restorer.add(simKPlugin, "simK-session");

        app.shell.add(simKPlugin, 'left', { rank: 200 });
    }

}

export default sidebar;



