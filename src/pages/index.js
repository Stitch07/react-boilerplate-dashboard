// This is the root page, located at /
import React from "react"
import { Button, Typography } from "@material-ui/core/"
import Navbar from "../components/Navbar.jsx"
import withRoot from "../withRoot.jsx"
import "../styles/home.scss"

import BotLogo from "../../static/BOT_LOGO.png"
import Footer from "../components/Footer.jsx";

// edit this to your bot's invite URL
const inviteURL = 'https://discordapp.com/oauth2/authorize?client_id=512521882856062986&permissions=268495936&scope=bot';
// edit this to your bot's support server URL
const supportURL = 'https://discord.gg/code';

const home = () => {
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

export default withRoot(home)