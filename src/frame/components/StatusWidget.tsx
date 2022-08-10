import { ReactWidget} from "@jupyterlab/apputils";
import { classes } from 'typestyle';
import {toolbarButtonClass} from '../../style/Toolbar';
import {ActionButton} from "./ActionButton";


export class StatusWidget extends ReactWidget {
    constructor() {
        super();

        this.addClass('jp-git-StatusWidget');
    }

    render(): JSX.Element {
        return (
            <>
                <UseSignal
                    signal={this._model.credentialsRequiredChanged}
                    initialArgs={false}
                >
                    {(_, needsCredentials) => (
                        <Badge
                            className={badgeClass}
                            variant="dot"
                            invisible={!needsCredentials}
                            data-test-id="git-credential-badge"
                        >
                            <ActionButton
                                className={classes(
                                    toolbarButtonClass,
                                    this._status !== 'idle'
                                        ? statusAnimatedIconClass
                                        : statusIconClass
                                )}
                                icon={gitIcon}
                                onClick={
                                    needsCredentials
                                        ? async () => this._showGitOperationDialog()
                                        : undefined
                                }
                                title={
                                    needsCredentials
                                        ? `Git: ${this._trans.__('credentials required')}`
                                        : `Git: ${this._trans.__(this._status)}`
                                }
                            />
                        </Badge>
                    )}
                </UseSignal>

            </>
        );
    }
}