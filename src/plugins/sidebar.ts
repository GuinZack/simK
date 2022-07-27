import {
    ILayoutRestorer,
    JupyterFrontEnd,
    JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { logoIcon } from '../style/icons';
import { SimKWidget } from "../widgets/SimKWidget";
import { ISettingRegistry } from "@jupyterlab/settingregistry";

const sidebar: JupyterFrontEndPlugin<any> = {
    id: 'simK:sidebar',
    autoStart: true,
    activate: async (app: JupyterFrontEnd,
                     settingRegistry: ISettingRegistry,
                     restorer: ILayoutRestorer) => {
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

}

export default sidebar;



