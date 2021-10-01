import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
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
import SelectByCatFooter from "./SelectByCatGiffooter";


// code for top navigation started here

const useStyles = makeStyles((theme) => ({
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

  formControl: {
    //its a kind of margin from top and bottom
    margin: theme.spacing(1),
    width: "100%",
  },


}));


// function HideOnScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//   });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// HideOnScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };
//   code for top nav ended here

function SelectByCategoryGif() {
  let [category, setCategory] = useState("select gif category");
  let [rtCatVar, setRtCatVar] = useState("h5");
  let [styleCatAppBar, setStyleCatAppBar] = useState({ display: 'flex', justifyContent: "space-between" });
  let [adjustCatSelect, setAdjustCatSelect] = useState({ width: "50%", height: "80%" });
  let [selectCatGif, setSelectCatGif] = useState([{}]);
  let [catUrl,setCatUrl] = useState();
  const classes = useStyles();

 
  useEffect(() => {
    if (window.screen.width <= 1080) {
      setRtCatVar("body1");
      setStyleCatAppBar({ paddingLeft: "9px", paddingRight: "9px" });
      setAdjustCatSelect({ width: "60%", marginLeft: 5 })
    }

    let selectCatXml = new XMLHttpRequest();
    selectCatXml.open("GET", `https://g.tenor.com/v1/categories?key=SP8D8UESTTRV`, true);
    selectCatXml.send();
    selectCatXml.onreadystatechange = function () {
      if (selectCatXml.readyState == 4 && selectCatXml.status == 200) {
        let selectCatResText = selectCatXml.responseText;
        let selectCatParsed = JSON.parse(selectCatResText);
        console.log(selectCatParsed.tags);
        setSelectCatGif(selectCatParsed.tags);
      }
    }

  }, [])

  function handleSelectCat(event) {
    let catVal = event.target.value;

    console.log(event.target.value);
    if (catVal != "Select Category") {
let selectCatXml2 = new XMLHttpRequest();
selectCatXml2.open("GET",`${catVal}`,true);
selectCatXml2.send();
selectCatXml2.onreadystatechange = function (){
  if(selectCatXml2.readyState==4&&selectCatXml2.status==200){
let catRes = selectCatXml2.responseText;
let catParsed = JSON.parse(catRes);
console.log(catParsed.results);
setCatUrl(catParsed.results);
  }
} 
    }
  }

  return (
    <>

      {/* code for top nav started here       */}
      <React.Fragment>
        <CssBaseline />
        
          <AppBar position="fixed">
            <Toolbar style={styleCatAppBar}>
              <Link to="/" style={{textDecoration:"none",color:"white"}}>
              <Typography variant={rtCatVar} >
                ROHIT TECHNICAL
              </Typography>
              </Link>

              {/* code for top nav select input started here    */}
              <div style={adjustCatSelect}>
                <FormControl variant="outlined" className={classes.formControl}>
                  {/* <InputLabel htmlFor="outlined-age-native-simple" style={{ color:"white",zIndex:999999 }}>Meme Template</InputLabel> */}
                  <Select
                    native
                    // value="ok"
                    onChange={handleSelectCat}
                    // label="Meme Template"
                    style={{ backgroundColor: "rgba(255,255,255,0.9)", outline: 'white', border: "white", textAlign: "center" }}
                    inputProps={{
                      name: 'age',
                      id: 'outlined-age-native-simple',
                    }}
                  >
                    <option value="Select Category" >Select Category Here</option>
                    {
                      selectCatGif.map((value, index) => (
                        <option aria-label="None" value={value.path} style={{ textTransform: "capitalize" }}>{value.searchterm}</option>
                      )
                      )
                    }
                  </Select>
                </FormControl>
              </div>
              {/* code for select input ended here */}

            </Toolbar>
          </AppBar>
        
        <Toolbar />
      </React.Fragment>

      {/* code for top nav ended here   */}
<SelectCatMain selCatData={catUrl}/>
      {/* only copy the html for hamburger menu */}

      <SelectByCatFooter/>
    </>
  );
}

export default SelectByCategoryGif;