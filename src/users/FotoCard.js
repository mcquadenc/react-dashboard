import React, { Fragment, Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import withStyles from '@material-ui/core/styles/withStyles';

const showStyle = theme => ({
    root: { display: 'inline-block', marginTop: '1em', zIndex: 2 },
    content: { 
        padding: 0, '&:last-child': { padding: 0 },
        width: '100%'
    },
    img: {
        width: 'initial',
        minWidth: 'initial',
        maxWidth: '42em',
        maxHeight: '15em',
    },
});

class FotoCard extends Component {
    render() {
    const { classes, record,  ...props } = this.props;
    console.log(this.props);
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <img src="https://prdeving.files.wordpress.com/2017/03/google-c-testing-framework-gtesk-300x200.jpg?w=600" alt="" className={classes.img} />
            </CardContent>
        </Card>
		);
	}
}

export default withStyles(showStyle)(FotoCard);