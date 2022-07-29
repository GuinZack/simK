import { JupyterFrontEndPlugin } from '@jupyterlab/application';
import sidebar from "./plugins/sidebar";

/**
 * Initialization data for the simK extension.
 */
const plugins: JupyterFrontEndPlugin<any>[] = [ sidebar];

export default plugins;

