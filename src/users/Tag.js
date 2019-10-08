import React, { Fragment, Component } from 'react';
import Chip from '@material-ui/core/Chip';
import { createStyles, withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import { FavoriteBorder, Favorite } from '@material-ui/icons';

const styles = theme =>
    createStyles({
        chipChecked: {
            background: '#fff',
            border: '1px solid #ccc'
        }
    });

class Tag extends Component {
    render() {
        const {...props} = this.props;
        console.log(props);

        return ({icon: <FavoriteBorder />,checkedIcon: <Favorite />});
    }
}

// export default CheckBoxTag;
export default compose(
    withStyles(styles)
)(Tag);