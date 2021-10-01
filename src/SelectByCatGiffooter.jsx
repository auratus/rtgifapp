import React from 'react';
import GifIcon from '@material-ui/icons/Gif';

import CssBaseline from '@material-ui/core/CssBaseline';

import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import { NavLink } from 'react-router-dom';
import StoreIcon from '@material-ui/icons/Store';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import WebIcon from '@material-ui/icons/Web';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SelectCatMain from "./selectCatMain";

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

function SelectByCatFooter() {
    const classes = useStyles();

     //    code for top nav hamburger started here 
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
          <ListItemIcon><i class="fab fa-sticker-mule"></i></ListItemIcon>
          <ListItemText primary="ANIMATED STICKERS" />
        </ListItem>
      </Link>
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
    </div>
  );
  //   code for top nav hamburger ended here 


    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar style={{ paddingLeft:"15px" }}>
                    <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer("left", true)}>
            <MenuIcon style={{fontSize:"30px"}}/>
          </IconButton>
          <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
                                    {list("left")}
                                </Drawer>
                        <NavLink to={{pathname:"/homepage",stickerTestData:"hello"}} style={{ marginLeft: 10, textDecoration: "none", color: "white", }}>
                            <Typography variant="subtitle2" >
                             SEARCH GIF
                            </Typography>
                        </NavLink>

                     

                        <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                            <GifIcon />
                        </Fab>
                        <div className={classes.grow} />
                        <NavLink to="/randomgif" style={{ marginLeft: 3, textDecoration: "none", color: "white" }}>
                            <Typography variant="subtitle2" >
                                TRENDING GIF
                            </Typography>
                        </NavLink>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
            );
        </>
    );
}

export default SelectByCatFooter;