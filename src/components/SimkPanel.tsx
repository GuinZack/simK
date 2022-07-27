import Tabs from '@material-ui/core/Tabs';
import * as React from 'react';
import {
    panelWrapperClass,
    tabIndicatorClass,
    tabsClass,
} from '../style/SimkPanel';
import { ActionButton } from './ActionButton';
import { toolbarButtonClass } from '../style/Toolbar';
import { refreshIcon } from '@jupyterlab/ui-components';


/**
 * Interface describing component state.
 */
export interface IGitPanelState {
    tab: number;
}

/**
 * React component for rendering a panel for performing Git operations.
 */
export class SimkPanel extends React.Component<IGitPanelState> {
    render(): React.ReactElement {
        return (
            <div className={panelWrapperClass}>
                {
                    <React.Fragment>
                        <ActionButton
                            className={toolbarButtonClass}
                            icon={refreshIcon}
                            onClick={this._onRefreshClick}
                            title='Refresh the hunk'
                        />
                        {this._renderMain()}
                    </React.Fragment>
                }
            </div>
        );
    }

    /**
     * Renders a toolbar.
     *
     * @returns React element
     */


    /**
     * Renders the main panel.
     *
     * @returns React element
     */
    private _renderMain(): React.ReactElement {
        return (
            <React.Fragment>
                {this._renderTabs()}
            </React.Fragment>
        );
    }

    /**
     * Renders panel tabs.
     *
     * @returns React element
     */
    private _renderTabs(): React.ReactElement {
        return (
            <Tabs
                classes={{
                    root: tabsClass,
                    indicator: tabIndicatorClass
                }}
            >
            </Tabs>
        );
    }


    private _onRefreshClick = async (): Promise<void> => {
        // this.props.logger.log({
        //     level: Level.RUNNING,
        //     message: this.props.trans.__('Refreshing…')
        // });
        // try {
        //     await this.props.model.refresh();
        //
        //     this.props.logger.log({
        //         level: Level.SUCCESS,
        //         message: this.props.trans.__('Successfully refreshed.')
        //     });
        // } catch (error) {
        //     console.error(error);
        //     this.props.logger.log({
        //         level: Level.ERROR,
        //         message: this.props.trans.__('Failed to refresh.'),
        //         error
        //     });
        // }
    };
}
