import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import StoreIcon from '@material-ui/icons/Store';
const useStyles = makeStyles((theme) => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        paddingLeft:0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },

    anchor: {
        textDecoration: "none",
        color: "#000000DE"
    },

    socialIcons: {
        textDecoration: "none",
        color: "white"
    }
}));

function SupremeFooter() {
    const classes = useStyles();
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar >

                        <NavLink to={{pathname:"/typeofgif",stickerTestData:"hello"}} style={{ marginRight: 6, textDecoration: "none", color: "white", }}>
                            <Typography variant="subtitle1" >
                              GIF
                            </Typography>
                        </NavLink>

                        <NavLink to="/stickermainpage" style={{ marginLeft: 10, textDecoration: "none", color: "white" }}>
                            <Typography variant="subtitle1" >
                                STICKERS
                            </Typography>
                        </NavLink>

                        <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                            <StoreIcon />
                        </Fab>
                        <div className={classes.grow} />
                        <NavLink to="/mememainpage" style={{ marginLeft: 3, textDecoration: "none", color: "white" }}>
                            <IconButton color="inherit">
                            <Typography variant="subtitle1" >
                               CREATE MEME
                            </Typography>
                            </IconButton>
                            </NavLink>

                       
                    </Toolbar>
                </AppBar>
            </React.Fragment>
            );
        </>
    );
}

export default SupremeFooter;