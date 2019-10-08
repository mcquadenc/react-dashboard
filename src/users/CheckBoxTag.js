import React, { Fragment, Component } from 'react';
import Chip from '@material-ui/core/Chip';
import { createStyles, withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
const styles = theme =>
    createStyles({
        chipChecked: {
            background: '#fff',
            border: '1px solid #ccc'
        }
    });

class CheckBoxTag extends Component {
    render() {
        const {classes, record, source, label, filterValues,  ...props} = this.props;

        return (
        	<Fragment>
                {
                	((source in filterValues) && filterValues[source].includes(record.id)) ? (
		            	<Chip label={record[label]}/>
                	) : (<Chip className={classes.chipChecked} label={record[label]}/>)
            	}
			</Fragment>
        );
    }
}

// export default CheckBoxTag;
export default withStyles(styles)(CheckBoxTag);