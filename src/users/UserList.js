import React, { Fragment, Component } from 'react';
import compose from 'recompose/compose';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Route } from 'react-router';
import Drawer from '@material-ui/core/Drawer';
import { List, Responsive, ReferenceInput, ReferenceArrayInput,  TextInput, Filter, SelectInput, CheckboxGroupInput } from 'react-admin';
import { createStyles, withStyles } from '@material-ui/core/styles';
import UserListDesktop from './UserListDesktop'
import UserShow from './UserShow'
import { withDataProvider } from 'react-admin';
import { FavoriteBorder, Favorite } from '@material-ui/icons';
import Chip from '@material-ui/core/Chip';
import CheckBoxTag from './CheckBoxTag';
// import Tag from './Tag'


const styles = theme =>
    createStyles({
        root: {
            display: 'flex',
        },
        list: {
            flexGrow: 1,
            transition: theme.transitions.create(['all'], {
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        },
        listWithDrawer: {
            marginRight: 400,
        },
    });

class UserFilter extends Component {
    render() {
        const {...props} = this.props;
        // console.log(props);
        return (
            <Filter {...props}>
                <TextInput label="Search" source="q" alwaysOn />
                <ReferenceArrayInput label="User" source="id" reference="users" allowEmpty  alwaysOn>
                    <CheckboxGroupInput 
                        optionText={<CheckBoxTag label='name' source='id' filterValues={props.filterValues} />} />
                </ReferenceArrayInput>

            </Filter>
        );
    }
}

class UserList extends Component {
    render() {
        const { classes, ...props } = this.props;
        // console.log(this);
        return (
            <div className={classes.root}>
                <Route path="/users/:id">
                    {({ match }) => {
                        const isMatch = !!(
                            match &&
                            match.params &&
                            match.params.id !== 'create'
                        );

                        return (
                            <Fragment>
                                <List
                                    filters={<UserFilter />}
                                    {...props}
                                    className={classnames(classes.list, {
                                        [classes.listWithDrawer]: isMatch,
                                    })}
                                    // bulkActionButtons={
                                    //     <ReviewsBulkActionButtons />
                                    // }
                                    // filters={<ReviewFilter />}
                                    perPage={25}
                                    sort={{ field: 'date', order: 'DESC' }}
                                >
                                    <Responsive
                                        medium={<UserListDesktop />}
                                    />
                                </List>
                                <Drawer
                                    variant="persistent"
                                    open={isMatch}
                                    anchor="right"
                                    onClose={this.handleClose}
                                    classes={{
                                        paper: classes.drawerPaper,
                                    }}
                                >
                                    {/* To avoid any errors if the route does not match, we don't render at all the component in this case */}
                                    {isMatch ? (
                                        <UserShow
                                            id={match.params.id}
                                            onCancel={this.handleClose}
                                            {...props}
                                        />
                                    ) : null}
                                </Drawer>
                            </Fragment>
                        );
                    }}
                </Route>
            </div>
        );
    }

    handleClose = () => {
        this.props.push('/users');
    };
}

export default compose(
    connect(
        undefined,
        { push }
    ),
    withStyles(styles)
)(UserList);