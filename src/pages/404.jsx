import React from 'react';
import Navbar from '../components/Navbar';
import { Typography } from '@material-ui/core';
import withRoot from '../withRoot';

const notFound = () => {
    return <div>
        <Navbar />
        <Typography variant="h2" align="center" gutterBottom>404</Typography>
    </div>
}

export default withRoot(notFound);
