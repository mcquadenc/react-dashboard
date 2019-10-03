import React, { Fragment, Component } from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

class ReviewList extends Component {
    render() {
        const { classes, ...props } = this.props;
        return (
            <List {...props}>
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="username" />
                    <EmailField source="email" />
                    <TextField source="address.street" />
                    <TextField source="phone" />
                    <TextField source="website" />
                    <TextField source="company.name" />
                </Datagrid>
            </List>
        );
    }
}

export default ReviewList;