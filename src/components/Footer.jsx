import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../styles/footer.scss'

const footer = () => {
    return (
        <div>
        <Typography variant="h6" color="textPrimary" align="center" style={{flex: 'grow', paddingBottom: '10px' }} className="footer">
            Created with ❤ by Stitcherino#1109
        </Typography>
        </div>
    )
}

export default footer;
