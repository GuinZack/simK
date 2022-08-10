import { ReactWidget } from '@jupyterlab/apputils';
// import { FileBrowserModel } from '@jupyterlab/filebrowser';
// import { ISettingRegistry } from '@jupyterlab/settingregistry';
// import { TranslationBundle } from '@jupyterlab/translation';
// import { CommandRegistry } from '@lumino/commands';
// import { Message } from '@lumino/messaging';
// import { Widget } from '@lumino/widgets';
import { StylesProvider } from '@material-ui/core/styles';
import {WidgetStyle} from "../../style/WidgetStyle";
import { LoggerContext } from '../../logger';
import * as React from 'react';
// import { ILogMessage, Level } from '../tokens';
import { ConfigPanel } from './ConfigPanel';

export class ConfigWidget extends ReactWidget {
    constructor( ) {
        super();
        this.addClass(WidgetStyle);
        // this._settings = settings;
    }

    /**
     * Render the content of this widget using the virtual DOM.
     *
     * This method will be called anytime the widget needs to be rendered, which
     * includes layout triggered rendering.
     */
    render(): JSX.Element {
        return (
            <StylesProvider injectFirst>
                <LoggerContext.Consumer>
                    {logger => (
                        <React.Fragment>
                            <ConfigPanel
                             tab={0}/>
                            {/*<UseSignal*/}
                            {/*    signal={logger.signal}*/}
                            {/*    initialArgs={{ message: '', level: Level.INFO } as ILogMessage}*/}
                            {/*>*/}
                            {/*    /!*{(sender, log) =>*!/*/}
                            {/*    /!*    log?.message ? (*!/*/}
                            {/*    /!*        // <Feedback*!/*/}
                            {/*    /!*        //     log={log}*!/*/}
                            {/*    /!*        //     settings={this._settings}*!/*/}
                            {/*    /!*        //     trans={this._trans}*!/*/}
                            {/*    /!*        // />*!/*/}
                            {/*    /!*    ) : null*!/*/}
                            {/*    /!*}*!/*/}
                            {/*</UseSignal>*/}
                        </React.Fragment>
                    )}
                </LoggerContext.Consumer>
            </StylesProvider>
        );
    }

    // private _settings: ISettingRegistry.ISettings;
}