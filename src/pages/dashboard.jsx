import React, { Component } from 'react';
import withRoot from '../withRoot.jsx';
import Navbar from '../components/Navbar';
import { Avatar, Chip, Typography } from '@material-ui/core';
import '../styles/dashboard.scss';


class Dashboard extends Component {
    state = {
        user: null
    };

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            window.location.href = "/";
            return;
        }
        this.setState({ user: user.user });
    }

    render() {
        const { user } = this.state;
        if (!user) return <h1>Loading</h1>
        return (
            <div className="div" style={{ flexWrap: 'wrap' }}>
            <Navbar />
            <Typography color="textPrimary" variant="h3" className="text">Select a server</Typography>
                <center>
                <div className="div" style={{ marginLeft: '10px', paddingTop: '150px'}}>
                {user.guilds.filter(g => g.userCanManage).map(guild => {
                    const icon = this.getIcon(guild);
                    return <Chip style={{backgroundColor: '#2C2F33', marginTop: '30px'}}
                        avatar={icon} onClick={() => this.redirect(guild)}></Chip>
                })}
                </div>
                </center>
            </div>
        )
    }

    getIcon = guild => {
        const style = { height: '50px', width: '50px' }
        if (guild.iconURL) return <Avatar src={guild.iconURL} style={style} />
        return <Avatar style={style}>{guild.name.split(' ').map(w => w[0].toUpperCase())}</Avatar>
    }

    redirect = guild => {
        window.location.href = `/dashboard/${guild.id}`;
    }
}

export default withRoot(Dashboard);