import React, { Fragment, Component } from 'react';
import { Show, SimpleShowLayout, TextField, } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FotoCard from './FotoCard';

const showStyle = theme => ({
    root: {
        paddingTop: 40,
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0.5em',
    },
    show: {
        [theme.breakpoints.up('xs')]: {
            width: 600,
        },
        [theme.breakpoints.down('xs')]: {
            width: '100vw',
            marginTop: -30,
        },
    },

});

class UserShow extends Component {
    render() {
        const { classes, onCancel, push,  ...props } = this.props;
		return (
			<Fragment>
	            <div className={classes.root}>
	                <div className={classes.title}>
	                    <Typography variant="title">
	                    	Detalhe User
	                    </Typography>
	                    <IconButton onClick={onCancel}>
	                        <CloseIcon />
	                    </IconButton>
	                </div>
	            </div>

			    <Show {...props} className={classes.show}>
			        <SimpleShowLayout>
						<FotoCard />

			            <TextField source="name" />
			            <TextField source="username" />
			            <TextField source="email" />
			        </SimpleShowLayout>
			    </Show>
			</Fragment>
		);
	}
}

export default withStyles(showStyle)(UserShow);