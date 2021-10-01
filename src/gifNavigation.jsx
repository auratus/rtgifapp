import React, { useEffect, useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import GifIcon from '@material-ui/icons/Gif';
import { InputData } from "./actions/index.js";
import { useDispatch } from "react-redux";
import { addUrl, NullInput } from './actions/index';
import { useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 500,
  },
  input: {
    marginLeft: theme.spacing(3),
    flex: 1,
  },
  iconButton: {
    padding: 3,
  },
  divider: {
    height: 28,
    margin: 4,
  },

  rt_gif_nav: {
    textDecoration: "none",
    color: "white"
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

function GifNavigation(props) {

  let [inputValue, setInput] = useState();
  let [changeVariant, setChangeVariant] = useState("h5");
  let [searchWidth, setSearchWidth] = useState({ width: 500 });
  let dispatch = useDispatch();
  let dispatch2 = useDispatch();
  let dispatch3 = useDispatch();
  const classes = useStyles();

  // useLoaction is used to get the value passed from the navlink
  //we first import it from react-router-dom and then call it inside the functional component
  let location = useLocation();

  useEffect(() => {
    if (window.screen.width <= 1080) {
      setChangeVariant("h6");
      setSearchWidth({ width: 200 });
    }
    // see the console for more info about the location object
    console.log(location);

    if (localStorage.getItem('inputData') == undefined && location.state != undefined) {
      debugger;
      localStorage.setItem('inputData', location.state);
      dispatch3(NullInput());

      let localData = localStorage.getItem('inputData');
      setInput(localData);
      let spaceRemoved = localData.replace(/ /g, "%");
      let spaceRemoved1 = localData.replace(/ /g, "+");
      let xml1 = new XMLHttpRequest();
      let xml2 = new XMLHttpRequest();
      xml1.open("GET", `https://g.tenor.com/v1/search?q=${spaceRemoved}&key=SP8D8UESTTRV&limit=50`, true);
      xml1.send();
      xml1.onreadystatechange = function () {
        if (xml1.readyState === 4 && xml1.status === 200) {
          let xml1Response = xml1.responseText;
          let xml1ResponseParsed = JSON.parse(xml1Response);
          let length = xml1ResponseParsed.results.length;
          for (let i = 0; i < length; i++) {
            dispatch(addUrl(xml1ResponseParsed.results[i].media[0].tinygif.url));
            // console.log(xml1ResponseParsed.results[i].media[0].tinygif.url);
          }
          xml2.open("GET", `https://api.giphy.com/v1/gifs/search?api_key=ucYyfV3Y735s59WJMmvi3vmEOrKbjSHF&q=${spaceRemoved1}&limit=50&offset=0&lang=hi`);
          xml2.send();
          xml2.onreadystatechange = function () {
            if (xml2.readyState === 4 && xml2.status === 200) {
              let xml2Response = xml2.responseText;
              let xml2ResponseParsed = JSON.parse(xml2Response);
              let length2 = xml2ResponseParsed.data.length;
              for (let j = 0; j < length2; j++) {
                dispatch2(addUrl(xml2ResponseParsed.data[j].images.fixed_height.url));
              }
              // console.log(xml2ResponseParsed.data[0].images.fixed_height.url);
            }
          }
        }
      }
    }

    else if (localStorage.getItem('inputData') != undefined && inputValue == undefined && location.testData != undefined) {
      debugger;
      dispatch3(NullInput());
      let setData = location.state;
      setInput(setData);
      let spaceRemoved = setData.replace(/ /g, "%");
      let spaceRemoved2 = setData.replace(/ /g, "+");
      let setLocalStorage = localStorage.setItem("inputData", setData);
      let xml1 = new XMLHttpRequest();
      let xml2 = new XMLHttpRequest();
      xml1.open("GET", `https://g.tenor.com/v1/search?q=${spaceRemoved}&key=SP8D8UESTTRV&limit=50`, true);
      xml1.send();
      xml1.onreadystatechange = function () {
        if (xml1.readyState === 4 && xml1.status === 200) {
          let xml1Response = xml1.responseText;
          let xml1ResponseParsed = JSON.parse(xml1Response);
          let length = xml1ResponseParsed.results.length;
          for (let i = 0; i < length; i++) {
            dispatch(addUrl(xml1ResponseParsed.results[i].media[0].tinygif.url));
            // console.log(xml1ResponseParsed.results[i].media[0].tinygif.url);
          }
          xml2.open("GET", `https://api.giphy.com/v1/gifs/search?api_key=ucYyfV3Y735s59WJMmvi3vmEOrKbjSHF&q=${spaceRemoved2}&limit=50&offset=0&lang=hi`);
          xml2.send();
          xml2.onreadystatechange = function () {
            if (xml2.readyState === 4 && xml2.status === 200) {
              let xml2Response = xml2.responseText;
              let xml2ResponseParsed = JSON.parse(xml2Response);
              let length2 = xml2ResponseParsed.data.length;
              for (let j = 0; j < length2; j++) {
                dispatch2(addUrl(xml2ResponseParsed.data[j].images.fixed_height.url));
              }
              // console.log(xml2ResponseParsed.data[0].images.fixed_height.url);
            }
          }
        }
      }
    }

    else if (localStorage.getItem('inputData') != undefined && location.testData == undefined && inputValue == undefined) {
      debugger;
      dispatch3(NullInput());
      // localStorage.clear();
      // localStorage.setItem('inputData', location.state);
      let localData1 = localStorage.getItem('inputData');
      setInput(localData1);
      let spaceRemoved1 = localData1.replace(/ /g, "%");
      let spaceRemoved3 = localData1.replace(/ /g, "+");
      let xml1 = new XMLHttpRequest();
      let xml2 = new XMLHttpRequest();
      xml1.open("GET", `https://g.tenor.com/v1/search?q=${spaceRemoved1}&key=SP8D8UESTTRV&limit=50`, true);
      xml1.send();
      xml1.onreadystatechange = function () {
        if (xml1.readyState === 4 && xml1.status === 200) {
          let xml1Response = xml1.responseText;
          let xml1ResponseParsed = JSON.parse(xml1Response);
          let length = xml1ResponseParsed.results.length;
          for (let i = 0; i < length; i++) {
            dispatch(addUrl(xml1ResponseParsed.results[i].media[0].tinygif.url));
            // console.log(xml1ResponseParsed.results[i].media[0].tinygif.url);
          }
          xml2.open("GET", `https://api.giphy.com/v1/gifs/search?api_key=ucYyfV3Y735s59WJMmvi3vmEOrKbjSHF&q=${spaceRemoved3}&limit=50&offset=0&lang=hi`);
          xml2.send();
          xml2.onreadystatechange = function () {
            if (xml2.readyState === 4 && xml2.status === 200) {
              let xml2Response = xml2.responseText;
              let xml2ResponseParsed = JSON.parse(xml2Response);
              let length2 = xml2ResponseParsed.data.length;
              for (let j = 0; j < length2; j++) {
                dispatch2(addUrl(xml2ResponseParsed.data[j].images.fixed_height.url));
              }
              // console.log(xml2ResponseParsed.data[0].images.fixed_height.url);
            }
          }
        }
      }
      // window.location.reload();
    }

  }, []);

  // this function is for the onClick event for searching gif
  function searchGif(event) {

    dispatch3(NullInput());

    // setting the local storage with the data entered by user on the same page hence when user reloads 
    // the page after searching anything then user will see the content which he/she had searched
    localStorage.setItem('inputData', inputValue);
    let localData5 = localStorage.getItem('inputData');
    let spaceRemoved = localData5.replace(/ /g, "%");
    let spaceRemoved4 = localData5.replace(/ /g, "+");
    let xml1 = new XMLHttpRequest();
    let xml2 = new XMLHttpRequest();
    xml1.open("GET", `https://g.tenor.com/v1/search?q=${spaceRemoved}&key=SP8D8UESTTRV&limit=50`, true);
    xml1.send();
    xml1.onreadystatechange = function () {
      if (xml1.readyState === 4 && xml1.status === 200) {
        let xml1Response = xml1.responseText;
        let xml1ResponseParsed = JSON.parse(xml1Response);
        let length = xml1ResponseParsed.results.length;
        for (let i = 0; i < length; i++) {
          dispatch(addUrl(xml1ResponseParsed.results[i].media[0].tinygif.url));
          // console.log(xml1ResponseParsed.results[i].media[0].tinygif.url);
        }
        xml2.open("GET", `https://api.giphy.com/v1/gifs/search?api_key=ucYyfV3Y735s59WJMmvi3vmEOrKbjSHF&q=${spaceRemoved4}&limit=50&offset=0&lang=hi`);
        xml2.send();
        xml2.onreadystatechange = function () {
          if (xml2.readyState === 4 && xml2.status === 200) {
            let xml2Response = xml2.responseText;
            let xml2ResponseParsed = JSON.parse(xml2Response);
            let length2 = xml2ResponseParsed.data.length;
            for (let j = 0; j < length2; j++) {
              dispatch2(addUrl(xml2ResponseParsed.data[j].images.fixed_height.url));
            }
            // console.log(xml2ResponseParsed.data[0].images.fixed_height.url);
          }
        }
      }
    }
  }

  function insertData(event) {

    setInput(event.target.value);

  }

  function preventEnter(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }
  return (
    <>
      <React.Fragment >
        <CssBaseline />
        <ElevationScroll >
          <AppBar >
            <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant={changeVariant}><NavLink to="/" className={classes.rt_gif_nav}>Rohit Technical</NavLink></Typography>

              <Paper component="form" className={classes.root} style={searchWidth}>
                {/* <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
                <InputBase
                  className={classes.input}
                  placeholder="Search Any Gif"
                  inputProps={{ 'aria-label': 'search google maps' }}
                  value={inputValue}
                  onChange={insertData}
                  onKeyPress={preventEnter}
                />
                <IconButton className={classes.iconButton} aria-label="search" >
                  <SearchIcon onClick={searchGif} />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                  <GifIcon />
                </IconButton>
              </Paper>

            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
      </React.Fragment>
    </>
  );
}

export default GifNavigation;