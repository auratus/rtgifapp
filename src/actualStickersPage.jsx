import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import "./gifArea.css";
import CancelIcon from '@material-ui/icons/Cancel';
import { useDispatch } from "react-redux";
import { addUrl, NullInput } from './actions/index';
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from "react-router-dom";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import StickerFooter from "./stickerFooter";
import TouchAppIcon from '@material-ui/icons/TouchApp';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        // marginTop: "3vmax",
    },

    root1: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 500,
    },
    imageList1: {
        width: "100%",
        height: "auto",
        cursor: "pointer",
    },
    rt_gif_nav: {
        textDecoration: "none",
        color: "white"
    },

    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },

    iconButton: {
        padding: 3,
    },

    divider: {
        height: 28,
        margin: 4,
    },
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


function ActualStickersPage() {

    let [changeVariant, setChangeVariant] = useState("h5");
    let [searchWidth, setSearchWidth] = useState({ width: 500 });
    let [imgPre1, setImgPre1] = useState("https://media.tenor.com/images/2438bc5e548c35579a2f0700bb414c09/tenor.gif");
    let [changePreArea1, setChangePreArea1] = useState({ transform: "scale(0,1)" })
    let [changeImgArea1, setChangeImgArea1] = useState({ transform: "scale(1,1)",marginBottom:50 })
    let [stringParameter, setStringParameter] = useState("hello");
    let [cols1, setCols1] = useState(6);
    let[longPressText,setLongPressText] = useState({ display:"none" });
    let[adjustImgPadding,setAdjustImgPadding] = useState({ padding:"0 5px",maxHeight:"70%",marginTop:30 })
    const classes = useStyles();
    let dispatch4 = useDispatch();
    let selector = useSelector((store) => store.SetUrl);
    let location = useLocation();

    useEffect(() => {
        if (window.screen.width <= 1080) {
            setCols1(2);
            setChangePreArea1({ transform: "scale(0,1)" });
            setChangeImgArea1({maxWidth:"100%" ,transform: "scale(1,1)" });
            setChangeVariant("subtitle1");
            setSearchWidth({ width: 200 });
            setLongPressText({ display:"block",color:"white" });
            setAdjustImgPadding({padding:"0 15px"})
        }



        dispatch4(NullInput());
        console.log(location);
        let getLocalData = localStorage.getItem("stickerData");
        if (location.state != undefined) {
            localStorage.setItem("stickerData", location.state);
            setStringParameter(location.state)
            let xml1 = new XMLHttpRequest();
            let xml2 = new XMLHttpRequest();
            xml1.open("GET", `https://api.giphy.com/v1/stickers/search?api_key=ucYyfV3Y735s59WJMmvi3vmEOrKbjSHF&q=${stringParameter}&limit=50`, true);
            xml1.send();
            xml1.onreadystatechange = function () {
                if (xml1.readyState === 4 && xml1.status === 200) {
                    let xml1Response = xml1.responseText;
                    let xml1ResponseParsed = JSON.parse(xml1Response);
                    let length = xml1ResponseParsed.data.length;
                    for (let i = 0; i < length; i++) {
                        dispatch4(addUrl(xml1ResponseParsed.data[i].images.original.url));
                       
                    }

                }
                setStringParameter("Search Stickers here");
            }
          
        }

        else if (location.state == undefined && getLocalData != undefined) {
         
            setStringParameter(getLocalData);
            let xml11 = new XMLHttpRequest();
            xml11.open("GET", `https://api.giphy.com/v1/stickers/search?api_key=ucYyfV3Y735s59WJMmvi3vmEOrKbjSHF&q=${getLocalData}&limit=50`, true);
            xml11.send();
            xml11.onreadystatechange = function () {
                if (xml11.readyState === 4 && xml11.status === 200) {
                    let xml11Response = xml11.responseText;
                    let xml11ResponseParsed = JSON.parse(xml11Response);
                    let length = xml11ResponseParsed.data.length;
                    for (let i = 0; i < length; i++) {
                        dispatch4(addUrl(xml11ResponseParsed.data[i].images.original.url));
                    }
                }

            }
        }



    }, []);

    function preview1(event) {
        setImgPre1(event.target.src);
        if (window.screen.width > 1080) {
            setChangeImgArea1({ transformOrigin: "left", transform: "scale(0.7,1)",marginBottom:50 });
            setChangePreArea1({ transformOrigin: "right", transform: "scale(1,1)" });
            setCols1(5);
        }
        else {
            setChangeImgArea1({ width:"100%",transformOrigin: "left", transform: "scale(0,1)" });
            setChangePreArea1({ width: "100%", transformOrigin: "right", transform: "scale(1,1)" });
        }

    }

    function closePrev() {
        if (window.screen.width > 1080) {
            setChangeImgArea1({ transformOrigin: "left", transform: "scale(1,1)",marginBottom:50 });
            setChangePreArea1({ transformOrigin: "right", transform: "scale(0,1)" })
            setCols1(6);
        }

        else if (window.screen.width <= 1080) {
            setChangeImgArea1({ width:"100%",transformOrigin: "left", transform: "scale(1,1)" });
            setChangePreArea1({ transformOrigin: "right", transform: "scale(0,1)" });
        }
    }

    function handleStickerPage(event) {
        setStringParameter(event.target.value)
    }

    function preventStickerEnter(event) {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    }

    function searchSticker() {
        dispatch4(NullInput());
        localStorage.setItem("stickerData", stringParameter)
        let replaced11 = stringParameter.replace(/ /,"+");
        console.log(replaced11);
        let xml111 = new XMLHttpRequest();
        xml111.open("GET", `https://api.giphy.com/v1/stickers/search?api_key=ucYyfV3Y735s59WJMmvi3vmEOrKbjSHF&q=${replaced11}&limit=50`, true);
        xml111.send();
        xml111.onreadystatechange = function () {
            if (xml111.readyState === 4 && xml111.status === 200) {
                let xml111Response = xml111.responseText;
                let xml111ResponseParsed = JSON.parse(xml111Response);
                let length111 = xml111ResponseParsed.data.length;
                for (let i = 0; i < length111; i++) {
                    dispatch4(addUrl(xml111ResponseParsed.data[i].images.original.url));
                }
            }

        }
    }

    return (
        <>
            {/* top nav started here */}
            <React.Fragment >
                <CssBaseline />
                <ElevationScroll >
                    <AppBar >
                        <Toolbar style={{ display: "flex", justifyContent: "space-between",paddingLeft:"10px",paddingRight:"10px" }}>
                            <Typography variant={changeVariant} style={{ fontWeight:"500",letterSpacing:"1px" }}><NavLink to="/" className={classes.rt_gif_nav}>ROHIT TECHNICAL</NavLink></Typography>

                            <Paper component="form" className={classes.root1} style={searchWidth}>
                                {/* <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
                                <InputBase
                                    className={classes.input}
                                    placeholder="Search Any Sticker"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                    value={stringParameter}
                                    onChange={handleStickerPage}
                                    onKeyPress={preventStickerEnter}
                                />
                                <IconButton className={classes.iconButton} aria-label="search" >
                                    <SearchIcon onClick={searchSticker} />
                                </IconButton>
                                <Divider className={classes.divider} orientation="vertical" />
                                <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                                    <i class="fab fa-sticker-mule" />
                                </IconButton>
                            </Paper>

                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
                <Toolbar />
            </React.Fragment>
            {/* top nav ended here */}
            <div className="gif_main" >
                <div style={changeImgArea1} className="images_area">
                    <ImageList rowHeight={140} className={classes.imageList1} cols={cols1}>
                        {selector.map((item, index) => index != 0 ? (
                            <ImageListItem key={index} >
                                <img src={item} alt="gif" onClick={preview1} />
                            </ImageListItem>
                        ) : null)}
                    </ImageList>
                </div>

                <div className="preview_area" style={changePreArea1} >

                    <div className="prev_header">

                        <div className="cancel_icon">
                            <CancelIcon style={{ color: "white", cursor: "pointer" }} onClick={closePrev} />
                        </div>

                        {/* <div id="download_share">
              <a href={imgPre1} download="new file"> <p style={{ color: "white", cursor: "pointer" }}>DOWNLOAD</p></a>
              <ShareIcon style={{ color: "white", cursor: "pointer" }} />
            </div> */}
                    </div>

                    <div className="prev_img" style={adjustImgPadding}>
                    <p style={longPressText}>Long Press On Image To Share/Download&nbsp;<TouchAppIcon/></p>
                        <img onPointerDown src={imgPre1} alt="Image Preview" style={{ backgroundColor:"white",maxHeight:"100%" }}/>
                    </div>
                </div>

            </div>
            <StickerFooter/>
        </>
    );
}

export default ActualStickersPage;