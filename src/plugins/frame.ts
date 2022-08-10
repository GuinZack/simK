import {
    JupyterFrontEndPlugin,
} from "@jupyterlab/application";
import sidebar from "../frame/sidebar";
import toolbar from "../frame/toolbar";

const frame: JupyterFrontEndPlugin<any>[] = [sidebar, toolbar];

export default frame;