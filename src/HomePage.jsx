import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Footer from "./footer";
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import HomeGif from "./HomeGif";
import { BrowserRouter, NavLink } from "react-router-dom";
import SwitchNav from "./switchNav";
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import WebIcon from '@material-ui/icons/Web';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { NullInput } from "./actions";
import GifHomeFooter from "./gifHomeFooter";
import TrendingMeme from "./trendingMeme";



const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },

    navContent: {
        justifyContent: "space-between",
    },

    rohitTechnical: {
        width: "60%"
    },

    navigations: {
        width: "40%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: 15,
        flexWrap: "wrap"
    },

    rtSiteLinks: {
        width: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    GIF: {
        textDecoration: "none",
        marginRight: 20,
        color: "white",
        fontSize: 17,
    },

    STICKER: {
        textDecoration: "none",
        marginRight: 10,
        color: "white",
        fontSize: 17,
    },

    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },

    hamburger: {
        color: "white",
        fontSize: 35
    },

    anchor: {
        textDecoration: "none",
        color: "#000000DE"
    }
}));

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

function HomePage() {
    let [homeNavVariant, setHomeNavVariant] = useState("h5");
    const classes = useStyles();
    let dispatch3 = useDispatch();
    // localStorage.clear();

    //drawer code started here
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Link to={{ pathname: "/typeofgif" }} className={classes.anchor}>
                <ListItem button >
                    <ListItemIcon><i class="fas fa-photo-video" /></ListItemIcon>
                    <ListItemText primary="GIF" />
                </ListItem>
            </Link>

            <Link to="/mememainpage" className={classes.anchor}>
                <ListItem button >
                    <ListItemIcon><i class="far fa-grin-squint-tears" /></ListItemIcon>
                    <ListItemText primary="CREATE MEME" />
                </ListItem>
            </Link>

            <Link to="/stickermainpage" className={classes.anchor}>
                <ListItem button >
                    <ListItemIcon ><i class="fab fa-sticker-mule"></i></ListItemIcon>
                    <ListItemText primary="ANIMATED STICKERS" />
                </ListItem>
            </Link>

            {/* <Link to="/mememainpage" className={classes.anchor}>
                <ListItem button >
                    <ListItemIcon style={{ color:"orangered" }}><i class="fas fa-fire"></i></ListItemIcon>
                    <ListItemText primary="TRENDING MEME" />
                </ListItem>
            </Link> */}

            <Divider />
            <List>
                <a href="https://www.rohittechnical.cf" target="_blank" className={classes.anchor}>
                    <ListItem button >
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary="HOME" />
                    </ListItem>
                </a>

                <a href="https://www.rohittechnical.cf/services.html" target="_blank" className={classes.anchor}>
                    <ListItem button>
                        <ListItemIcon><LanguageIcon /></ListItemIcon>
                        <ListItemText primary="SERVICES" />
                    </ListItem>
                </a>

                <a href="https://www.rohittechnical.cf/contactus.html" target="_blank" className={classes.anchor}>
                    <ListItem button>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="CONTACT US" />
                    </ListItem>
                </a>

                <a href="https://www.rohittechnical.cf/myprojects.html" target="_blank" className={classes.anchor}>
                    <ListItem button>
                        <ListItemIcon><WebIcon /></ListItemIcon>
                        <ListItemText primary="MY PROJECTS" />
                    </ListItem>
                </a>
            </List>

            {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </div>
    );

    //drawer code ended here

    useEffect(() => {
        dispatch3(NullInput());
        if (window.screen.width <= 1080) {
            setHomeNavVariant("h6");
        }
    }, [])

    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <AppBar>
                    <Toolbar className={classes.navContent}>

                        <div className={classes.rohitTechnical}>
                            <Link to="/" style={{textDecoration:"none",color:"white"}}>
                                <Typography variant={homeNavVariant}>ROHIT TECHNICAL</Typography>
                            </Link>
                        </div>

                        <div className={classes.rtSiteLinks}>
                            <React.Fragment >
                                <Button onClick={toggleDrawer("left", true)}><MenuIcon className={classes.hamburger} titleAccess="More Options" /></Button>
                                <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
                                    {list("left")}
                                </Drawer>
                            </React.Fragment>
                        </div>
                    </Toolbar>
                </AppBar>
                <Toolbar id="back-to-top-anchor" />

                <ScrollTop >
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </React.Fragment>


            <HomeGif />
            <GifHomeFooter />
        </>
    );
}

export default HomePage;