import * as React from 'react';
import Grid from "@material-ui/core/Grid";
// import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {CodeBlock} from "react-code-blocks";

const DiffText = (props: { diff: React.ReactNode; }) => {
    return (
        <Box mb={2}
             display="flex"
             flexDirection="column"
            // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
             height="700px" // fixed the height
             style={{
                 overflow: "hidden",
                 overflowY: "scroll", // added scroll
                 overflowX: "scroll",
                 fontSize: 10
             }}>
            <Grid
                className='diff'

            >
                <CodeBlock
                    text={props.diff}
                    language={'python'}
                    showLineNumbers={true}
                    theme={'github'}
                />
            </Grid>
        </Box>
    );
};

DiffText.defaultProps = {
    diff: 'temp'
};

export default DiffText;
