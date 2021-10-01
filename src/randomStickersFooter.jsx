import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
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
import {Link} from "react-router-dom";
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

  function RandomStickersFooter(){
    const classes = useStyles();
    //drawer code started here
  //   const [state, setState] = React.useState({
  //     top: false,
  //     left: false,
  //     bottom: false,
  //     right: false,
  // });

  // const toggleDrawer = (anchor, open) => (event) => {
  //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //         return;
  //     }

  //     setState({ ...state, [anchor]: open });
  // };

  // const list = (anchor) => (
  //     <div
  //         className={clsx(classes.list, {
  //             [classes.fullList]: anchor === 'top' || anchor === 'bottom',
  //         })}
  //         role="presentation"
  //         onClick={toggleDrawer(anchor, false)}
  //         onKeyDown={toggleDrawer(anchor, false)}
  //     >
  //         <Link to={{ pathname: "/" }} className={classes.anchor}>
  //           <ListItem button >
  //                       <ListItemIcon><i class="fas fa-photo-video" /></ListItemIcon>
  //                       <ListItemText primary="GIF" />
  //                   </ListItem>
  //                   </Link>

  //                   <Link to="/homesticker" className={classes.anchor}>
  //           <ListItem button >
  //               <ListItemIcon><i class="far fa-grin-squint-tears" /></ListItemIcon>
  //               <ListItemText primary="CREATE MEME" />
  //           </ListItem>
  //           </Link>

  //           <Link to={{pathname:"/actualstickerspage",stickerTestData:"food"}} className={classes.anchor}>
  //               <ListItem button >
  //                   <ListItemIcon><i class="fab fa-sticker-mule"></i></ListItemIcon>
  //                   <ListItemText primary="ANIMATED STICKERS" />
  //               </ListItem>
  //           </Link>
  //        <Divider />
  //         <List>
  //             <a href="https://www.rohittechnical.cf" target="_blank" className={classes.anchor}>
  //                 <ListItem button >
  //                     <ListItemIcon><HomeIcon /></ListItemIcon>
  //                     <ListItemText primary="HOME" />
  //                 </ListItem>
  //             </a>

  //             <a href="https://www.rohittechnical.cf/services.html" target="_blank" className={classes.anchor}>
  //                 <ListItem button>
  //                     <ListItemIcon><LanguageIcon /></ListItemIcon>
  //                     <ListItemText primary="SERVICES" />
  //                 </ListItem>
  //             </a>

  //             <a href="https://www.rohittechnical.cf/contactus.html" target="_blank" className={classes.anchor}>
  //                 <ListItem button>
  //                     <ListItemIcon><MailIcon /></ListItemIcon>
  //                     <ListItemText primary="CONTACT US" />
  //                 </ListItem>
  //             </a>

  //             <a href="https://www.rohittechnical.cf/myprojects.html" target="_blank" className={classes.anchor}>
  //                 <ListItem button>
  //                     <ListItemIcon><WebIcon /></ListItemIcon>
  //                     <ListItemText primary="MY PROJECTS" />
  //                 </ListItem>
  //             </a>
  //         </List>
         
         
  //     </div>
  // );

  //drawer code ended here
      return(
          <>
           <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          {/* <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer("left", true)}>
            <MenuIcon />
          </IconButton> */}

         
            <Link to={{pathname:"/actualstickerspage",stickerTestData:"hello"}}style={{ textDecoration:"none",color:"white",}}>
              <Typography variant="subtitle2">
            SEARCH STICKERS
            </Typography>
            </Link>
  
          {/* <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
                                    {list("left")}
                                </Drawer> */}
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
          <i class="fab fa-sticker-mule" />
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

  export default RandomStickersFooter;