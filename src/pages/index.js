// This is the root page, located at /
import React, { Component } from "react"
import { Button, Typography } from "@material-ui/core/"
import Navbar from "../components/Navbar.jsx"
import withRoot from "../withRoot.jsx"
import "../styles/home.scss"

import BotLogo from "../../static/BOT_LOGO.png"
import Footer from "../components/Footer.jsx";
import api from '../meta/api';

const inviteURL = api.getInvite();
// edit this to your bot's support server URL
const supportURL = 'https://discord.gg/code';

class Home extends Component {
    render() {
        return (
            <div className="div">
                <Navbar />
                <img src={BotLogo} alt="bot-image" className="bot-img"/>
                <Typography variant="h3" align="center" className="head" gutterBottom>An awesome Discord bot</Typography>
                <Button variant="contained" color="secondary" className="btn-invite" href={inviteURL}>Invite bot</Button>
                <Button variant="contained" color="secondary" className="btn-support" href={supportURL}>Support Server</Button>
                <Footer />
            </div>
        )
    }
}

export default withRoot(Home)