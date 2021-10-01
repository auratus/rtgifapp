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

function GifHomeFooter() {
    const classes = useStyles();
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar style={{ paddingLeft:"9px" }}>

                        <NavLink to="/stickermainpage" style={{ marginRight: 6, textDecoration: "none", color: "white", }}>
                            <Typography variant="subtitle2" >
                               STICKERS
                            </Typography>
                        </NavLink>

                        <NavLink to="/mememainpage" style={{ marginLeft: 3, textDecoration: "none", color: "white" }}>
                            <Typography variant="subtitle2" >
                                CREATE MEME
                            </Typography>
                        </NavLink>

                        <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                            <StoreIcon />
                        </Fab>
                        <div className={classes.grow} />
                        <a href="https://www.facebook.com/profile.php?id=100032448461635" title="facebook" target="_blank" className={classes.socialIcons}>
                            <IconButton color="inherit">
                                <FacebookIcon />
                            </IconButton>
                        </a>

                        <a href="https://wa.me/919109274958" title="whatsapp" target="_blank" className={classes.socialIcons}>
                            <IconButton color="inherit">
                                <WhatsAppIcon />
                            </IconButton>
                        </a>

                        <a href="https://www.instagram.com/rohitsahu2663/" title="instagram" target="_blank" className={classes.socialIcons}>
                            <IconButton edge="end" color="inherit">
                                <InstagramIcon />
                            </IconButton>
                        </a>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
            );
        </>
    );
}

export default GifHomeFooter;