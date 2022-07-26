import Tabs from '@material-ui/core/Tabs';
import * as React from 'react';
import {
    panelWrapperClass,
    tabIndicatorClass,
    tabsClass,
} from '../style/SimkPanel';

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
}
