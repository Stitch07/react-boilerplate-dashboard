import React, { Component } from 'react';
import withRoot from '../withRoot.jsx';
import api from '../meta/api';
import { Typography, withStyles, Paper, Table, TableHead, TableRow, TableCell, TableBody, Fade } from '@material-ui/core';
import Navbar from '../components/Navbar.jsx';

const styles = theme => ({
    loading: {
        position: 'absolute',
        top: '20%',
        left: '40%'
    },
    root: {
        width: '35%',
        position: 'absolute',
        top: '30%',
        left: '15%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'hidden'
    },
    root2: {
        width: '35%',
        position: 'absolute',
        top: '30%',
        left: '53%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'hidden'
    },
    table: {
        minWidth: 300
    },
    head: {
        fontSize: '20px'
    },
    cell: {
        color: 'black',
        fontSize: '20px'
    }
})

class StatsPage extends Component {
    state = {
        loading: true,
        guilds: null,
        channels: null,
        users: null,
        uptime: null,
        latency: null,
        shard: null
    }

    componentDidMount() {
        api.fetchStats().then(data => this.setState({ loading: false, ...data }));
    }

    render() {
        const { classes } = this.props;
        const { loading, guilds, channels, users, uptime, shards, latency } = this.state;
        if (loading) {
            return (
            <div className="div">
                <Navbar />
                <Fade in={loading} timeout={1000}>
                    <Typography variant="h3" className={classes.loading}>Loading stats...</Typography>
                </Fade>
            </div>
            )
        }
        
        return (
            <div className="div">
            <Navbar />
            <Typography variant="h3" color="primary" className={classes.loading} style={{left: '44%'}}>Statistics</Typography>
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.head}>Connected to</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={0}>
                        <TableCell component="th" scope="row" className={classes.cell}>Guilds</TableCell>
                        <TableCell align="left" className={classes.cell}>{guilds}</TableCell>
                    </TableRow>
                    <TableRow key={1}>
                        <TableCell component="th" scope="row" className={classes.cell}>Channels</TableCell>
                        <TableCell align="left" className={classes.cell}>{channels}</TableCell>
                    </TableRow>
                    <TableRow key={2}>
                        <TableCell component="th" scope="row" className={classes.cell}>Users</TableCell>
                        <TableCell align="left" className={classes.cell}>{users}</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </Paper>

            <Paper className={classes.root2}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.head}>Other:</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={0}>
                        <TableCell component="th" scope="row" className={classes.cell}>Shards</TableCell>
                        <TableCell align="left" className={classes.cell}>{shards}</TableCell>
                    </TableRow>
                    <TableRow key={1}>
                        <TableCell component="th" scope="row" className={classes.cell}>Uptime</TableCell>
                        <TableCell align="left" className={classes.cell}>{uptime}</TableCell>
                    </TableRow>
                    <TableRow key={2}>
                        <TableCell component="th" scope="row" className={classes.cell}>Latency</TableCell>
                        <TableCell align="left" className={classes.cell}>{latency}ms</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(withRoot(StatsPage));