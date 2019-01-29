import React, { Component } from 'react';
import withRoot from '../withRoot.jsx';

class Dashboard extends Component {
    state = {
        user: null
    };

    componentDidMount() {
        const user = localStorage.getItem('user');
        if (!user) {
            window.location.href = "/";
            return;
        }
        this.setState({ user });
    }
}

export default withRoot(Dashboard);