import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUrl, NullInput } from './actions/index';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import "./gifArea.css";
import CancelIcon from '@material-ui/icons/Cancel';
import GetAppIcon from '@material-ui/icons/GetApp';
import ShareIcon from '@material-ui/icons/Share';
import { useState } from "react";
import RandomGifFooter from "./RandomGifFooter";
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
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

// import { NullInput } from "./actions";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    // marginTop: "3vmax",
  },
  imageList: {
    width: "100%",
    height: "auto",
    cursor: "pointer",
  },
  list: {
    marginBottom: theme.spacing(2),
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

  anchor: {
    textDecoration: "none",
    color: "#000000DE"
  },
}));

//   code for top nav started here
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
//   code for top nav ended here


function RandomGif() {
  let [imgPre, setImgPre] = useState("https://media.tenor.com/images/2438bc5e548c35579a2f0700bb414c09/tenor.gif");
  let [changePreArea, setChangePreArea] = useState({ transform: "scale(0,1)" })
  let [changeImgArea, setChangeImgArea] = useState({ transform: "scale(1,1)" })

  let [cols, setCols] = useState(6);
  const classes = useStyles();
  let dispatch4 = useDispatch();
  let dispatch = useDispatch();

  useEffect(() => {
    if (window.screen.width <= 1080) {
      setCols(2);
      setChangePreArea({ width: "100%", transform: "scale(0,1)" })
      setChangeImgArea({ width: "100%", transform: "scale(1,1)" })
    }

    dispatch4(NullInput());
    let xml1 = new XMLHttpRequest();

    xml1.open("GET", `https://g.tenor.com/v1/trending?key=SP8D8UESTTRV`, true);
    xml1.send();
    xml1.onreadystatechange = function () {
      if (xml1.readyState === 4 && xml1.status === 200) {
        let xml1Response = xml1.responseText;
        let xml1ResponseParsed = JSON.parse(xml1Response);
        let length = xml1ResponseParsed.results.length;
        for (let i = 0; i < length; i++) {
          dispatch(addUrl(xml1ResponseParsed.results[i].media[0].tinygif.url));
          // console.log(xml1ResponseParsed.data[i].images.fixed_height.url);
        }
      }

      let xml2 = new XMLHttpRequest();
      xml2.open("GET", `https://api.giphy.com/v1/gifs/trending?api_key=ucYyfV3Y735s59WJMmvi3vmEOrKbjSHF&limit=200`, true);
      xml2.send();
      xml2.onreadystatechange = function () {
        if (xml2.readyState === 4 && xml2.status === 200) {
          let xml1Response1 = xml2.responseText;
          let xml1ResponseParsed1 = JSON.parse(xml1Response1);
          let length1 = xml1ResponseParsed1.data.length;
          for (let i = 0; i < length1; i++) {
            dispatch(addUrl(xml1ResponseParsed1.data[i].images.fixed_height.url));
            console.log(xml1ResponseParsed1.data[i].images.fixed_height.url);
          }
        }
      }

    }
  }, []);


  function preview(event) {
    setImgPre(event.target.src);
    if (window.screen.width > 1080) {
      setChangeImgArea({ transformOrigin: "left", transform: "scale(0.7,1)" });
      setChangePreArea({ transformOrigin: "right", transform: "scale(1,1)", });
      setCols(5);
    }
    else {
      setChangeImgArea({ width: "100%", transformOrigin: "left", transform: "scale(0,1)" });
      setChangePreArea({ width: "100%", transformOrigin: "right", transform: "scale(1,1)", });
    }

  }

  function closePrev() {
    if (window.screen.width > 1080) {
      setChangeImgArea({ transformOrigin: "left", transform: "scale(1,1)" });
      setChangePreArea({ transformOrigin: "right", transform: "scale(0,1)" })
      setCols(6);
    }

    else if (window.screen.width <= 1080) {
      setChangeImgArea({ transformOrigin: "left", transform: "scale(1,1)" });
      setChangePreArea({ transformOrigin: "right", transform: "scale(0,1)" })
    }
  }

  let selector = useSelector((store) => store.SetUrl);


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

      {/* code for top nav started here       */}
      <React.Fragment>
        <CssBaseline />
        <ElevationScroll >
          <AppBar style={{ backgroundColor: "#3f51b5" }}>
            <Toolbar style={{ display: 'flex', justifyContent: "space-between" }}>
              <div style={{width:"60%",maxHeight:'100%'}}>
              <Link to="/" style={{textDecoration:"none",color:"white"}}>
              <Typography variant="h5" component="div">
              ROHIT TECHNICAL
              </Typography>
              </Link>
              </div>

              <div style={{width:"40%",maxHeight:"100%",paddingRight:"10px",display:"flex",justifyContent:"flex-end"}}>
              <Typography variant="h5" >
              <MenuIcon onClick={toggleDrawer("left", true)} style={{ cursor: "pointer",fontSize:"30px" }}/>
              </Typography>
              </div>
              <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
            {list("left")}
              </Drawer>

            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
      </React.Fragment>
      {/* code for top nav ended here   */}

      <div className="gif_main" >
        <div style={changeImgArea} className="images_area">
          <ImageList rowHeight={140} className={classes.imageList} cols={cols}>
            {selector.map((item, index) => index != 0 ? (
              <ImageListItem key={index} >
                <img src={item} alt="gif" onClick={preview} />
              </ImageListItem>
            ) : null)}
          </ImageList>
        </div>

        <div className="preview_area" style={changePreArea}>

          <div className="prev_header">

            <div className="cancel_icon">
              <CancelIcon style={{ color: "white", cursor: "pointer" }} onClick={closePrev} />
            </div>

            {/* <div className="download_share">
              <a href={imgPre} download={imgPre}> <GetAppIcon style={{ color: "white", cursor: "pointer" }} /></a>
              <ShareIcon style={{ color: "white", cursor: "pointer" }} />
            </div> */}
          </div>

          <div className="prev_img">
            <img src={imgPre} alt="Image Preview" />
          </div>
        </div>

      </div>

      <RandomGifFooter />
    </>

  );
}

export default RandomGif;