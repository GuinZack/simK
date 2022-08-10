import { JupyterFrontEndPlugin } from '@jupyterlab/application';
import frame from "./plugins/frame";

/**
 * Initialization data for the simK extension.
 */
const plugins: JupyterFrontEndPlugin<any>[] = [frame];

export default plugins;

