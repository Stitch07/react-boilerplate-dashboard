import React from 'react';
import { Fade, Typography, Slide } from '@material-ui/core';
import Navbar from '../components/Navbar.jsx';
import withRoot from '../withRoot.jsx';
import FeatureImage1 from '../../static/feature1.png';
import FeatureImage2 from '../../static/feature2.png';

// Features showcase bot features. Load/modify images in the static/ directory in the project root.
// note: while customizing the text and images, the css might become messy. make sure you edit 
// the css file - styles/features.scss
// todo: make css a little more customization friendly

import '../styles/features.scss';

const features = () => {
    return <div className="div">
        <Navbar />
        <Fade in timeout={2000}>
            <Typography variant="h4" color="primary" className="feature1" gutterBottom>Fun Commands</Typography>
        </Fade>
        <Fade in timeout={2000} direction="right">
            <Typography variant="h5" className="feature2" gutterBottom>With mini-games and activity points, Flow 
            is the most comprehensive fun bot you'll ever find.</Typography>
        </Fade>
        <Slide in timeout={1000} direction="left">
            <img src={FeatureImage1} className="img1" />
        </Slide>
        <Fade in timeout={2000}>
            <Typography variant="h4" color="primary" className="feature3" gutterBottom>Image commands</Typography>
        </Fade>
        <Fade in timeout={2000}>
            <Typography variant="h5" className="feature4" gutterBottom>Flow has over 30 image commands, meaning being on Discord is never boring.</Typography>
        </Fade>
        <Slide in timeout={1000} direction="right">
            <img src={FeatureImage2} className="img2" />
        </Slide>
    </div>
}

export default withRoot(features);