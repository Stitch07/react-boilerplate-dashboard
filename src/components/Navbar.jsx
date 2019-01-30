import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, Menu, MenuItem } from '@material-ui/core';
import api from '../meta/api';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    flexGrow: 1,
    margin: theme.spacing.unit
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class ButtonAppBar extends Component {

  state = {
    user: null,
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  logout = () => {
    localStorage.removeItem('user');
    this.setState({ user: null, anchorEl: null });
    window.location.href = "/"
  }

  async componentDidMount() {
    const url = new URLSearchParams(window.location.search);
    const code = url.get('code');
    if (code && !localStorage.getItem('user')) {
        await api.user(code);
        // a kind of hacky way to remove the code param from query.
        window.location.href =  window.location.href.split("?")[0]; 
    }
    if (localStorage.getItem('user')) {
      this.setState({ user: JSON.parse(localStorage.getItem('user')) });
    }
  }
  
  render() {
    const { classes } = this.props;
    const { user, anchorEl } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} href="/" color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link className={classes.link} href="/features" color="inherit" underline="none">Features</Link>
            </Typography>
            <Typography variant="h6" color="inherit" className={classes.grow} style={{ flexGrow: 50 }}>
              <Link className={classes.link} href="/stats" color="inherit" underline="none">Stats</Link>
            </Typography>
            {user ? (
              <div>
              <Button aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true"
                onClick={this.handleClick}>
              {user.user.tag}
              </Button>
              <Menu style={{marginTop: '40px', maxWidth: '2000px'}} id="dropdown" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                <MenuItem onClick={() => { window.location.href = "/dashboard" }} style={{color: 'black'}}>Servers</MenuItem>
                <MenuItem onClick={this.logout} style={{color: 'black'}}>Logout</MenuItem>
              </Menu>
              </div>
            ) : (<Button color="inherit" href={api.getOauth()}>Login</Button>)}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);