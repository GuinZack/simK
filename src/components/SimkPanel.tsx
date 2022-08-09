// import Tabs from '@material-ui/core/Tabs';
// import Grid from '@material-ui/core/Grid';
// import {Typography} from "@material-ui/core";
// import Box from '@material-ui/core/Box';


import * as React from 'react';
import {
    panelWrapperClass,
    // tabIndicatorClass,
    // tabsClass,
} from '../style/SimkPanel';
import DiffText from './DiffText';
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
                <ActionButton
                    className={toolbarButtonClass}
                    icon={refreshIcon}
                    onClick={this._onRefreshClick}
                    title='Refresh the hunk'
                />
                <DiffText
                    diff={this.diffFile}></DiffText>
            </React.Fragment>
        );
    }

    /**
     * Renders panel tabs.
     *
     * @returns React element
     */
    // private _renderTabs(): React.ReactElement {
    //     return (
    //         <Tabs
    //             classes={{
    //                 root: tabsClass,
    //                 indicator: tabIndicatorClass
    //             }}
    //         >
    //
    //         </Tabs>
    //     );
    // }
    // private _renderDiffWindows(): React.ReactElement {
    //     return (
    //             <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
    //                 <Grid
    //                     className='diff'
    //                     >
    //                     <Typography>{this.getDiffFile()}</Typography>
    //                 </Grid>
    //             </Box>
    //     );
    // }


    public getDiffFile(): String {
        return this.diffFile as String;
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
        if (this.diffFile == undefined) {
            this.diffFile = 'file temp';
        } else {
            this.diffFile += 'file temp';
            console.log(this.diffFile);
        }

    };

    private diffFile: String = 'diff --git a/src/transformers/models/bloom/modeling_bloom.py b/src/transformers/models/bloom/modeling_bloom.py\n' +
        'index 7d95d7322747..ed5b50a77d70 100644\n' +
        '--- a/src/transformers/models/bloom/modeling_bloom.py\n' +
        '+++ b/src/transformers/models/bloom/modeling_bloom.py\n' +
        '@@ -15,6 +15,7 @@\n' +
        ' """PyTorch BLOOM model."""\n' +
        ' \n' +
        ' import math\n' +
        '+import warnings\n' +
        ' from typing import Tuple, Union\n' +
        ' \n' +
        ' import torch\n' +
        '@@ -522,11 +523,6 @@ def _set_gradient_checkpointing(self, module, value=False):\n' +
        '             - 0 for tokens that are **masked**.\n' +
        ' \n' +
        '             [What are attention masks?](../glossary#attention-mask)\n' +
        '-        position_ids (`torch.LongTensor` of shape `(batch_size, sequence_length)`, *optional*):\n' +
        '-            Indices of positions of each input sequence tokens in the position embeddings. Selected in the range `[0,\n' +
        '-            config.max_position_embeddings - 1]`.\n' +
        '-\n' +
        '-            [What are position IDs?](../glossary#position-ids)\n' +
        '         head_mask (`torch.FloatTensor` of shape `(num_heads,)` or `(num_layers, num_heads)`, *optional*):\n' +
        '             Mask to nullify selected heads of the self-attention modules. Mask values selected in `[0, 1]`:\n' +
        ' \n' +
        '@@ -617,14 +613,24 @@ def forward(\n' +
        '         input_ids=None,\n' +
        '         past_key_values=None,\n' +
        '         attention_mask=None,\n' +
        '-        position_ids=None,\n' +
        '         head_mask=None,\n' +
        '         inputs_embeds=None,\n' +
        '         use_cache=None,\n' +
        '         output_attentions=None,\n' +
        '         output_hidden_states=None,\n' +
        '         return_dict=None,\n' +
        '+        **deprecated_arguments\n' +
        '     ) -> Union[Tuple[torch.Tensor], BaseModelOutputWithPastAndCrossAttentions]:\n' +
        '+        if deprecated_arguments.pop("position_ids", False) is not False:\n' +
        '+            # `position_ids` could have been `torch.Tensor` or `None` so defaulting pop to `False` allows to detect if users were passing explicitly `None`\n' +
        '+            warnings.warn(\n' +
        '+                "`position_ids` have no functionality in BLOOM and will be removed in v5.0.0. You can safely ignore"\n' +
        '+                " passing `position_ids`.",\n' +
        '+                FutureWarning,\n' +
        '+            )\n' +
        '+        if len(deprecated_arguments) > 0:\n' +
        '+            raise ValueError(f"Got unexpected arguments: {deprecated_arguments}")\n' +
        '+\n' +
        '         output_attentions = output_attentions if output_attentions is not None else self.config.output_attentions\n' +
        '         output_hidden_states = (\n' +
        '             output_hidden_states if output_hidden_states is not None else self.config.output_hidden_states\n' +
        '@@ -772,16 +778,7 @@ def prepare_inputs_for_generation(self, input_ids, past=None, **kwargs):\n' +
        '             input_ids = input_ids[:, -1].unsqueeze(-1)\n' +
        ' \n' +
        '         attention_mask = kwargs.get("attention_mask", None)\n' +
        '-        position_ids = kwargs.get("position_ids", None)\n' +
        '-\n' +
        '-        if attention_mask is not None and position_ids is None:\n' +
        '-            # create position_ids on the fly for batch generation\n' +
        '-            position_ids = attention_mask.long().cumsum(-1) - 1\n' +
        '-            position_ids.masked_fill_(attention_mask == 0, 1)\n' +
        '-            if past:\n' +
        '-                position_ids = position_ids[:, -1].unsqueeze(-1)\n' +
        '-        else:\n' +
        '-            position_ids = None\n' +
        '+\n' +
        '         return {\n' +
        '             "input_ids": input_ids,\n' +
        '             "past_key_values": past,\n' +
        '@@ -801,7 +798,6 @@ def forward(\n' +
        '         input_ids=None,\n' +
        '         past_key_values=None,\n' +
        '         attention_mask=None,\n' +
        '-        position_ids=None,\n' +
        '         head_mask=None,\n' +
        '         inputs_embeds=None,\n' +
        '         labels=None,\n' +
        '@@ -809,6 +805,7 @@ def forward(\n' +
        '         output_attentions=None,\n' +
        '         output_hidden_states=None,\n' +
        '         return_dict=None,\n' +
        '+        **deprecated_arguments\n' +
        '     ) -> Union[Tuple[torch.Tensor], CausalLMOutputWithCrossAttentions]:\n' +
        '         r"""\n' +
        '         labels (`torch.LongTensor` of shape `(batch_size, sequence_length)`, *optional*):\n' +
        '@@ -816,13 +813,22 @@ def forward(\n' +
        '             `labels = input_ids` Indices are selected in `[-100, 0, ..., config.vocab_size]` All labels set to `-100`\n' +
        '             are ignored (masked), the loss is only computed for labels in `[0, ..., config.vocab_size]`\n' +
        '         """\n' +
        '+        if deprecated_arguments.pop("position_ids", False) is not False:\n' +
        '+            # `position_ids` could have been `torch.Tensor` or `None` so defaulting pop to `False` allows to detect if users were passing explicitly `None`\n' +
        '+            warnings.warn(\n' +
        '+                "`position_ids` have no functionality in BLOOM and will be removed in v5.0.0. You can safely ignore"\n' +
        '+                " passing `position_ids`.",\n' +
        '+                FutureWarning,\n' +
        '+            )\n' +
        '+        if len(deprecated_arguments) > 0:\n' +
        '+            raise ValueError(f"Got unexpected arguments: {deprecated_arguments}")\n' +
        '+\n' +
        '         return_dict = return_dict if return_dict is not None else self.config.use_return_dict\n' +
        ' \n' +
        '         transformer_outputs = self.transformer(\n' +
        '             input_ids,\n' +
        '             past_key_values=past_key_values,\n' +
        '             attention_mask=attention_mask,\n' +
        '-            position_ids=position_ids,\n' +
        '             head_mask=head_mask,\n' +
        '             inputs_embeds=inputs_embeds,\n' +
        '             use_cache=use_cache,\n' +
        '@@ -907,7 +913,6 @@ def forward(\n' +
        '         input_ids=None,\n' +
        '         past_key_values=None,\n' +
        '         attention_mask=None,\n' +
        '-        position_ids=None,\n' +
        '         head_mask=None,\n' +
        '         inputs_embeds=None,\n' +
        '         labels=None,\n' +
        '@@ -915,6 +920,7 @@ def forward(\n' +
        '         output_attentions=None,\n' +
        '         output_hidden_states=None,\n' +
        '         return_dict=None,\n' +
        '+        **deprecated_arguments\n' +
        '     ) -> Union[Tuple[torch.Tensor], SequenceClassifierOutputWithPast]:\n' +
        '         r"""\n' +
        '         labels (`torch.LongTensor` of shape `(batch_size,)`, *optional*):\n' +
        '@@ -922,6 +928,15 @@ def forward(\n' +
        '             config.num_labels - 1]`. If `config.num_labels == 1` a regression loss is computed (Mean-Square loss), If\n' +
        '             `config.num_labels > 1` a classification loss is computed (Cross-Entropy).\n' +
        '         """\n' +
        '+        if deprecated_arguments.pop("position_ids", False) is not False:\n' +
        '+            # `position_ids` could have been `torch.Tensor` or `None` so defaulting pop to `False` allows to detect if users were passing explicitly `None`\n' +
        '+            warnings.warn(\n' +
        '+                "`position_ids` have no functionality in BLOOM and will be removed in v5.0.0. You can safely ignore"\n' +
        '+                " passing `position_ids`.",\n' +
        '+                FutureWarning,\n' +
        '+            )\n' +
        '+        if len(deprecated_arguments) > 0:\n' +
        '+            raise ValueError(f"Got unexpected arguments: {deprecated_arguments}")\n' +
        ' \n' +
        '         return_dict = return_dict if return_dict is not None else self.config.use_return_dict\n' +
        ' \n' +
        '@@ -929,7 +944,6 @@ def forward(\n' +
        '             input_ids,\n' +
        '             past_key_values=past_key_values,\n' +
        '             attention_mask=attention_mask,\n' +
        '-            position_ids=position_ids,\n' +
        '             head_mask=head_mask,\n' +
        '             inputs_embeds=inputs_embeds,\n' +
        '             use_cache=use_cache,\n' +
        '@@ -1036,7 +1050,6 @@ def forward(\n' +
        '         input_ids=None,\n' +
        '         past_key_values=None,\n' +
        '         attention_mask=None,\n' +
        '-        position_ids=None,\n' +
        '         head_mask=None,\n' +
        '         inputs_embeds=None,\n' +
        '         labels=None,\n' +
        '@@ -1044,6 +1057,7 @@ def forward(\n' +
        '         output_attentions=None,\n' +
        '         output_hidden_states=None,\n' +
        '         return_dict=None,\n' +
        '+        **deprecated_arguments\n' +
        '     ) -> Union[Tuple[torch.Tensor], TokenClassifierOutput]:\n' +
        '         r"""\n' +
        '         labels (`torch.LongTensor` of shape `(batch_size,)`, *optional*):\n' +
        '@@ -1051,6 +1065,15 @@ def forward(\n' +
        '             config.num_labels - 1]`. If `config.num_labels == 1` a regression loss is computed (Mean-Square loss), If\n' +
        '             `config.num_labels > 1` a classification loss is computed (Cross-Entropy).\n' +
        '         """\n' +
        '+        if deprecated_arguments.pop("position_ids", False) is not False:\n' +
        '+            # `position_ids` could have been `torch.Tensor` or `None` so defaulting pop to `False` allows to detect if users were passing explicitly `None`\n' +
        '+            warnings.warn(\n' +
        '+                "`position_ids` have no functionality in BLOOM and will be removed in v5.0.0. You can safely ignore"\n' +
        '+                " passing `position_ids`.",\n' +
        '+                FutureWarning,\n' +
        '+            )\n' +
        '+        if len(deprecated_arguments) > 0:\n' +
        '+            raise ValueError(f"Got unexpected arguments: {deprecated_arguments}")\n' +
        ' \n' +
        '         return_dict = return_dict if return_dict is not None else self.config.use_return_dict\n' +
        ' \n' +
        '@@ -1058,7 +1081,6 @@ def forward(\n' +
        '             input_ids,\n' +
        '             past_key_values=past_key_values,\n' +
        '             attention_mask=attention_mask,\n' +
        '-            position_ids=position_ids,\n' +
        '             head_mask=head_mask,\n' +
        '             inputs_embeds=inputs_embeds,\n' +
        '             use_cache=use_cache,';
}
