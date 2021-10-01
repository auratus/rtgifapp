import  React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from "react-router-dom";

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import WebIcon from '@material-ui/icons/Web';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import GifIcon from '@material-ui/icons/Gif';
import { Typography } from '@material-ui/core';

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

socialIcons:{
  textDecoration:"none",
  color:"white"
}
}));


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  function RandomStickersTopNav(){
    const classes = useStyles();

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


      return(
          <>
           <React.Fragment>
      <CssBaseline />
      <ElevationScroll >
        <AppBar>
          <Toolbar style={{ justifyContent:"space-between" }}>
            <Link to="/" style={{ textDecoration:"none",color:"white" }}>
            <Typography variant="h6" component="div">
              ROHIT TECHNICAL
            </Typography>
            </Link>

            <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer("left", true)} style={{ paddingLeft:50 }}>
            <MenuIcon style={{fontSize:"30px"}}/>
          </IconButton>
          <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
                                    {list("left")}
                                </Drawer>

          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
          </>
      );
  }

  export default RandomStickersTopNav;