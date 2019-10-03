import React from 'react';
import { Datagrid, TextField, EmailField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

import rowStyle from './rowStyle';

const listStyles = {
    headerRow: {
        borderLeftColor: 'white',
        borderLeftWidth: 5,
        borderLeftStyle: 'solid',
    },
    comment: {
        maxWidth: '18em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
};

const FotoListDesktop = ({ classes, ...props }) => (
    <Datagrid
        rowClick="edit"
        rowStyle={rowStyle}
        classes={{ headerRow: classes.headerRow }}
        {...props}
    >

        <TextField source="id" />
        <TextField source="title" />
        <TextField source="url" />
        <TextField source="thumbnailUrl" />

    </Datagrid>
);

export default withStyles(listStyles)(FotoListDesktop);